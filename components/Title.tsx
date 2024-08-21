"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/title";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "./ui/flip-words";


export function Title() {
  const words = [
    {
      text: "Check ",
    },
    {
      text: "out",
    },
    {
      text: "my",
    },
    {
      text: "tech",
    },
    {
      text: "skills now",
      className: "text-blue-500 text-[springgreen]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] pb-4 w-full z-10 backdrop-blur-sm pt-[90px]">
      <TypewriterEffectSmooth words={words} />
      <p className=" text-neutral-200 text-xs sm:text-base mb-6 ">
        I possess several skills in technology field including ...
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-[200px] mr-3 h-[45px] rounded-xl bg-purple-100 cursor-pointer   text-sm font-bold text-purple-500 transition duration-500 hover:scale-110">
          <Link href="/#webdev">Web development</Link>
        </button>
        <button className="ml-3  w-[200px] h-[45px] rounded-xl bg-[springgreen] cursor-pointer   text-sm font-bold text-purple-700 transition duration-500 hover:scale-110">
        <Link href="/#softwaredev">Software Development</Link>
        </button>
      </div>
    </div>
  );
}

export function Spatletitle({title}:{title:string}) {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>{title}</Cover>
      </h1>
    </div>
  );
}



export function FlipWord({words, title}:{words:[string, string, string, string], title: string}) {
  return (
    <div className=" flex  justify-center items-center px-4">
      <div className="text-sm  lg:w-[300px] mx-auto ">
        {title}<br/>
        <FlipWords words={words} />
      </div>
    </div>
  );
}
