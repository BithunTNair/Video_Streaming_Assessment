
import VideoPlayer from "@/app/components/VideoPlayer";
export default function WatchPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Watch Video</h1>
      <VideoPlayer src="/videos/output.m3u8" watermark="user@example.com" />
    </main>
  );
}