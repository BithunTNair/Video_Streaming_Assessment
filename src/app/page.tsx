import Image from "next/image";
import VideoPlayer from "./components/VideoPlayer";
import AuthComponent from "./components/AuthComponent";

export default function Home() {
  return (
    <>
      {/* <VideoPlayer src="/videos/output.m3u8" /> */}
      <AuthComponent/>
    </>
  );
}
