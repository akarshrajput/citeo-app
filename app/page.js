"use client";
import WordPullUp from "@/components/ui/word-pull-up";
import Image from "next/image";
import ReviewCards from "./_components/ReviewCards";
import TypingAnimation from "@/components/ui/typing-animation";
import { CoolMode } from "@/components/ui/cool-mode";
import { PeopleCircles } from "./_components/PeopleCircles";
import { TechStack } from "./_components/TechStack";
import { FAQs } from "./_components/FAQs";
import { Pricing } from "./_components/Pricing";

export default function Home() {
  return (
    <div className="mt-6">
      <div className="flex z-0 my-4 justify-center items-center gap-4">
        <PeopleCircles />
        <div>
          <p className="font-medium">100+ satisfied clients</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <WordPullUp
          className="w-[1000px] text-9xl font-semibold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Crafting Modern Websites that Drive Success"
        />
      </div>
      <div className="text-center my-4 flex gap-2 justify-center">
        <p className="text-xl text-stone-400 font-medium">Looking for a </p>
        <TypingAnimation
          className="text-xl text-stone-400 font-medium"
          text="Developer, Designer, Tech Expert, then no worries!"
        />
      </div>
      <div className="text-center mt-6">
        <CoolMode>
          <button className="bg-black text-white px-6 p-1.5 rounded-full">
            Contact Team or Schedule a meeting
          </button>
        </CoolMode>
      </div>
      <div className="w-[1200px]">
        <ReviewCards />
      </div>
      <div>
        <Pricing />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <TechStack />
        </div>
      </div>
      <div>
        <FAQs />
      </div>
    </div>
  );
}
