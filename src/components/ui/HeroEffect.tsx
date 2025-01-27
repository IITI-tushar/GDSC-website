"use client";
import { cn } from "../../../lib/utils";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { SparklesPreview, SparklesPreview2 } from "./sparklespreview";
import { Cover } from "./cover";
import { TextGenerateEffect } from "./textGenerateeffect";
import Planet from "./planets";
import Sun from "./Sun";
import { SparklesCore } from "./sparkles";

const transition = {
  duration: 0,
  ease: "linear",
};

export const HeroEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [showInitialContent, setShowInitialContent] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.2) {
        setShowInitialContent(false);
        setShowDescription(true);
      } else {
        setShowInitialContent(true);
        setShowDescription(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  
  
  return (
    <div className={cn("sticky top-60", className)}>
      <div className="absolute inset-0 h-screen w-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
              <img
          src="/saturn.svg"
          className="floating-image3 h-[20vh] w-[20vw] -z-1 animation-1"
        />
        <Planet name="jupiter" />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showInitialContent ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.p className="text-[15px] md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
          {title || ""}
        </motion.p>
        <SparklesPreview />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showDescription ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
             
        <Cover><p className="text-xs sm:text-sm md:text-lg font-bold text-white"><TextGenerateEffect words={description || ""} /></p></Cover>
      </motion.div>
      <Planet name="uranus" style={{
        top: '0rem',
        animation : 'orbit 19s backwards infinite' 
      }}/>
      
    </div>
  );
};

