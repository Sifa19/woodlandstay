import Image from "next/image";
import Link from "next/link";

import bgImg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="flex flex-col mt-20 items-center text-center gap-4">
      <Image
        src={bgImg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="backgrong image of Mountains"
      />
      <div className="z-40">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight">
          Welcome to paradise
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-lg font-semibold text-primary-800 px-6 py-4
       hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
