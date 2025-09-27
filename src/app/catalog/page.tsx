
"use client";
import { useRouter } from "next/navigation";

export default function CatalogPage() {
  const router = useRouter();

  const videos = [
    {
      id: 1,
      title: "Sample Video 1",
      thumbnail: "/thumbnails/video1.jpg",
    },
    {
      id: 2,
      title: "Sample Video 2",
      thumbnail: "/thumbnails/video2.jpg",
    },
  ];

  const handleWatch = (videoId: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    router.push(`/watch/${videoId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Enjoy The Videos
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h2>
              </div>
              <button
                onClick={() => handleWatch(video.id)}
                className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition text-center"
              >
                Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
