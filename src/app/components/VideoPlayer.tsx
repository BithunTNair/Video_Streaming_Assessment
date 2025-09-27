"use client";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
interface VideoPlayerProps {
  src: string;
  watermark?: string;
}
export default function VideoPlayer({ src, watermark }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: true,
        fluid: true,
        preload: "auto",
        autoplay: false,
        sources: [{ src, type: "application/x-mpegURL" }],
      });
      return () => {
        player.dispose();
      };
    }
  }, [src]);
  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        playsInline
      />
      {watermark && (
        <div className="absolute top-4 left-4 text-white text-sm opacity-70 bg-black px-2 py-1 rounded">
          {watermark}
        </div>
      )}
    </div>
  );
}
