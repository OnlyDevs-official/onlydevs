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
      <div className="min-h-screen flex flex-col justify-center items-center  text-white px-4">
        <motion.h1
          className="text-4xl md:text-8xl font-bold aeonik-bold kerning-tightest text-center mb-8 mt-36"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          revolutionising <span className="[text-shadow:0_0_5px_#006eff,0_0_10px_#006eff,0_0_20px_#006eff,0_0_40px_#006eff]">design</span> & <span className="[text-shadow:0_0_5px_#006eff,0_0_10px_#006eff,0_0_20px_#006eff,0_0_40px_#006eff]">development</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-aeonik font-light text-center max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building the most versatile platform for designers & developers
        </motion.p>

        <AnimatedButton />

        {/* <motion.p
          className="text-lg md:text-2xl font-aeonik font-light text-center max-w-4xl mt-32"
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
        </motion.p> */}
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
    const targetSection = document.getElementById("events-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    router.push("/#events-section", { scroll: true });
  };
  return (
    <div className="my-6 flex justify-center items-center gap-6">
      <Link
        href="https://discord.gg/QUaEBhBB8A"
        target="_blank"
      >
        <button className="bg-[#006eff] text-black border-none rounded-full flex items-center justify-center 
        px-6 py-3 cursor-pointer transition-all duration-300 
        min-w-[120px] h-[50px] hover:shadow-[0_0_20px_#006eff]">
          Join Now
        </button>
      </Link>

      <button
        className="border border-white rounded-full flex items-center justify-center p-3 cursor-pointer transition-all duration-300 hover:bg-opacity-10 w-[50px] h-[50px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <ArrowDownIcon
          className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "transform translate-y-1" : ""
            }`}
        />
      </button>

      <Link
        href="https://www.instagram.com/onlydev.s"
        target="_blank"
      >
        <button className="border border-white rounded-full flex items-center justify-center px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-opacity-10 min-w-[120px] h-[50px]">
          Discover
        </button>
      </Link>
    </div>
  );
};