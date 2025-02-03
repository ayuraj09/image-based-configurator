import Image from "next/image";

import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[#0A2F2F]">
      <h1 className="text-3xl font-bold text-center mb-8"></h1>
      <ProjectList />
    </div>
  );
}
