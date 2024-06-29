
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicBtn from "./ui/MagicBtn";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-black-100 dark:bg-grid-white/[0.03] bg-grid-white/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl " words='Transforming Concepts into Seamless User Experiences' />
          <p className="text-center md:text-lg lg:text-2xl md:tracking-wide mb-4 " >Hi! I’m Oussama, a Next.js Developer based in Morocco.</p>
          <Link href={'#about'}>
            <MagicBtn title='Show my work' icon={<FaLocationArrow />} position="right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;