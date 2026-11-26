import React, { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, AlertCircle, X, Film } from "lucide-react";
import { useVideoUpload } from "@/hooks/useVideoUpload";
import { VideoPreview } from "@/components/VideoPreview/VideoPreview";

interface VideoUploaderProps {
  onUploadSuccess?: (videoUrl: string, durationSeconds?: number) => void;
}

export function VideoUploader({ onUploadSuccess }: VideoUploaderProps) {
  const { uploadVideo, progress, isUploading, result, reset } = useVideoUpload();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("Please upload a valid video file (.mp4, .mkv, .mov, .webm)");
      return;
    }

    setSelectedFile(file);
    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);

    uploadVideo(file).then((uploaded) => {
      if (uploaded && onUploadSuccess) {
        onUploadSuccess(uploaded.videoUrl, uploaded.durationSeconds);
      }
    });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    reset();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Upload Lesson Video</h3>
          <p className="text-xs text-slate-500">Supports MP4, WebM, or MKV up to 500MB</p>
        </div>
        {selectedFile && (
          <button
            onClick={handleClear}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {!previewUrl ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-200 hover:border-brand-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-brand-50/30 transition-all"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            accept="video/*"
            className="hidden"
          />
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600 mb-3 border border-slate-100">
            <UploadCloud size={28} />
          </div>
          <p className="text-sm font-semibold text-slate-800">
            Click to upload or drag & drop video
          </p>
          <p className="text-xs text-slate-400 mt-1">1080p or 4K recommended for crisp playback</p>
        </div>
      ) : (
        <div className="space-y-4">
          <VideoPreview src={result?.videoUrl || previewUrl} />

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Film size={16} className="text-brand-600" />
                <span className="text-xs font-medium text-slate-800 truncate max-w-xs">
                  {selectedFile?.name}
                </span>
              </div>
              <span className="text-xs font-bold text-brand-600">{progress}%</span>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-brand-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-1.5 mt-2.5">
              {isUploading ? (
                <span className="text-xs font-medium text-amber-600">Uploading to server...</span>
              ) : progress === 100 ? (
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 size={14} /> Ready for lesson publishing
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
