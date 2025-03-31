"use client";
import { projects } from "@/utils/constances";
import Card from "@/components/Modules/index/CardsParallax/Cards";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

type Project = {
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
};

export default function CardsParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main ref={container} className="relative mt-[50vh]  cover-backGround2">
        <div className="w-full text-center font-Dorna text-3xl text-MainColor max-md:mb-10">
          {" "}
          مشتریان ما چه میگویند
        </div>
        {projects.map((project: Project, i: number) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}
