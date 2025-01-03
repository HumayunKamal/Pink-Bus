import { heroBackground } from "~/assets";
import type { Route } from "./+types/home";
import { useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pink Bus" },
    { name: "description", content: "Pink Bus service for girls." },
  ];
}

export default function Home() {
  const playbackRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playbackRef.current) playbackRef.current.playbackRate = 0.5;
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="col-span-full row-start-1 -mx-[2rem] h-dvh sm:-mx-[7.5rem]">
        <video
          ref={playbackRef}
          src={heroBackground}
          className="absolute h-full w-full object-cover object-center"
          autoPlay
          // controls
          loop
        ></video>
        <div className="absolute inset-0 bg-secondary/50" />
      </div>
    </>
  );
}
