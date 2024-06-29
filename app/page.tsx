import Aprroach from "@/Components/Aprroach";
import Clents from "@/Components/Clents";
import Contact from "@/Components/Contact";
import Experience from "@/Components/Experience";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProject from "@/Components/RecentProject";
import { FloatingNav } from "@/Components/ui/FloatinNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100  relative flex flex-col justify-center items-center mx-auto px-5 sm:px-10 overflow-hidden  ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clents />
        <Experience />
        <Aprroach />
        <Contact />
      </div>
    </main>
  );
}
