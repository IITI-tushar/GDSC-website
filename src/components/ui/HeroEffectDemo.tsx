"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { HeroEffect } from "@/components/ui/HeroEffect";
import Sun from "./Sun";

export function HeroEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    
    <div
      className="h-[200vh] lg:h-[400vh] md:h-[300vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-20 overflow-clip"
      ref={ref || null}
    >
      
      <HeroEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Google Developers Student Club"
        description="About or Description
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolor vel reprehenderit molestias sint a voluptas laborum earum animi voluptatem. Temporibus veniam deserunt eligendi dolore harum iste doloremque voluptas quisquam!"
          />
    </div>
    
  );
}
