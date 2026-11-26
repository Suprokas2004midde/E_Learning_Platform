interface VideoPreviewProps {
  src: string;
  className?: string;
}

export function VideoPreview({ src, className = "" }: VideoPreviewProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden bg-black aspect-video ${className}`}>
      <video
        src={src}
        controls
        className="w-full h-full object-contain"
        playsInline
      />
    </div>
  );
}
