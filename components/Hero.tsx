"use client";
import React, { ReactNode, useState } from "react";
import {
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import pattern from "@/public/assets/3d-pattern.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-8xl font-bold aeonic-bold text-center mb-8 mt-60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          revolutionising design & development
        </motion.h1>
        
        <AnimatedButton />
        
        <motion.p
          className="text-lg md:text-2xl aeonic-light text-center max-w-4xl mt-32"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          OnlyDevs is an energetic platform designed for developers and
          designers to network and collaborate. It serves as a
          comprehensive resource center where members can access a
          variety of tools, uncover innovative solutions, and
          participate in insightful discussions. Our dedicated forum
          promotes an atmosphere for knowledge sharing, idea
          exploration, and problem-solving within the design &
          development communities.
        </motion.p>
      </div>
    </>
  );
};

export default HeroSection;

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    e.preventDefault();
    const targetSection = document.getElementById("featureList");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    router.push("/#featureList", { scroll: true });
  };
  return (
    <div className="my-6">
      <button
        className="border border-white rounded-full flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-300  hover:bg-opacity-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <p className="text-lg">Why Should You Join OnlyDevs?</p>
        <ArrowDownIcon
          className={`w-5 h-5 transition-transform duration-300 ${
            isHovered ? "transform translate-y-1" : ""
          }`}
        />
      </button>
    </div>
  );
};