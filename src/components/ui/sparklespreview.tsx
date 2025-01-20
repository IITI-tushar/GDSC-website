"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { SparklesCore } from "./sparkles";
import { motion, useAnimation, useInView } from "framer-motion";

export function SparklesPreview() {
      // Ref to track the container for in-view logic
      const containerRef = useRef<HTMLDivElement>(null);
      const isInView = useInView(containerRef, { once: true});
      const controls = useAnimation();
    
      useEffect(() => {
        console.log("Is in view:", isInView); // Debugging log
        if (isInView) {
          controls.start("visible");
        }
      }, [isInView, controls]);
  return (
    <div className="h-[10rem] w-full bg-black flex flex-col items-center py-10 justify-center overflow-hidden rounded-md">
        {/* <img src="" alt="GDSC-LOGO"/> */}
      <h1 className="md:text-2xl text-xl lg:text-4xl font-bold text-center pt-10 text-white relative z-20">
        Indian Institute Of Technology Indore
      </h1>

      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function SparklesPreview2({
    children,
  }: {
    children?: ReactNode;
  }) {
    return (
      <div className="h-[40rem] relative w-full bg-black -z-10 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
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
        {children}
      </div>
    );
  }
  