import { VideoUploader } from "@/components/VideoUploader/VideoUploader";

export function UploadVideoPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Video Uploader Testing</h1>
        <p className="text-sm text-slate-500 mt-1">
          Upload course lessons directly with live chunked progress tracking and instant in-browser preview.
        </p>
      </div>

      <VideoUploader
        onUploadSuccess={(url, duration) => {
          alert(`Video upload complete! URL: ${url} | Duration: ${duration}s`);
        }}
      />
    </div>
  );
}
