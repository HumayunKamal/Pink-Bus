import { heroBackground } from "~/assets";
import type { Route } from "./+types/home";
import { useEffect, useLayoutEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pink Bus" },
    { name: "description", content: "Pink Bus service for girls." },
  ];
}

export default function Home() {
  const playbackRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playbackRef.current) {
      playbackRef.current.playbackRate = 0.5;
    }
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
          muted
          // controls
          // loop
        ></video>
        <div className="absolute inset-0 bg-secondary/50" />
      </div>
      <div className="col-span-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt porro
        ab illo iure nam dignissimos excepturi in neque, quam officiis
        voluptatem quibusdam error minus qui animi reprehenderit? Inventore,
        explicabo accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Delectus tempore unde est dolorem eveniet non quisquam veniam
        corrupti animi debitis ratione deserunt voluptate voluptates rem error
        voluptatibus, aspernatur repellat inventore. Laudantium illum aliquam
        natus omnis, tempora cum eius! Odit recusandae placeat molestias omnis
        suscipit fugiat iste adipisci voluptatem optio in possimus quod dicta
        maiores repudiandae, corrupti impedit illo? Excepturi, labore. Sed
        voluptas enim aliquid voluptatum, voluptatem nemo laboriosam impedit
        asperiores praesentium, earum ipsa reprehenderit voluptatibus molestias
        tempora ducimus ea, iusto deleniti. Delectus porro enim ut mollitia vero
        iusto aut consectetur. Reiciendis non aliquid fugit velit cum ab a fuga
        qui ea rem, ipsa expedita odit perferendis. Sapiente libero harum
        reprehenderit maiores nostrum, nulla doloremque, nesciunt molestiae
        cumque officiis nihil labore. Error quam quia assumenda quisquam
        sapiente illo qui minima eius esse minus. Perferendis exercitationem
        molestiae nobis porro eaque distinctio voluptatibus facere eos magni,
        asperiores consequuntur dolores! A quae tempore architecto.
      </div>
    </>
  );
}
