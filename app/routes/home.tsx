import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pink Bus" },
    { name: "description", content: "Pink Bus service for girls." },
  ];
}

export default function Home() {
  return <div className="">Home</div>;
}
