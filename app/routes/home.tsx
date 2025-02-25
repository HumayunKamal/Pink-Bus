import { useScroll, useSpring } from "motion/react";
import { BookingSection, HeroSection } from "~/components";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pink Bus" },
    { name: "description", content: "Pink Bus service for girls." },
  ];
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  /* Spring for smooth scrolling */
  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection smoothYProgress={smoothYProgress} />

      {/* Booking Section */}
      <BookingSection smoothYProgress={smoothYProgress} />
      
    </>
  );
}
