"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/title";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "../ui/flip-words";


export function CreativeFooter() {
  const words = [
    {
      text: "Feel  ",
    },
    {
      text: "free",
    },
    {
      text: "to",
    },
    {
      text: "reach",
    },
    {
      text: "out to me today.",
      className: "text-blue-500 text-[springgreen]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] pb-4 w-full z-10 backdrop-blur-sm pt-[90px] overflow-hidden">
      <TypewriterEffectSmooth words={words} />
      <p className=" text-neutral-200 text-xs sm:text-base mb-6 ">
    Transform all your ideas online and get your digital workspace today
      </p>
      <div className="flex w-full text-white mt-5  max-[570px]:flex-col max-[570px]:text-center md:flex-row space-y-4 md:space-y-0 justify-items-center space-x-0 md:space-x-4 justify-around">
        <p className="text-lg font-bold">All Services by Makhosi Ncube</p>
        <p className="text-sm">customer support: <span className="font-extrabold text-[#fc6e91]"></span>makhosin27@gmail.com</p>
        <p className="text-lg font-bol text-[springgreen] max-[570px]:hidden">tech-rehalm web services</p>
      </div>
    </div>
  );
}
