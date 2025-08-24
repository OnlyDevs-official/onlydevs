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
      <div>
        <div className="h-36"></div>
        <div className="md:px-20 px-4">
          <div className="p-6 md:p-12 mb-8 md:mb-16 rounded-3xl bg-gradient-to-t from-gradientColor to-[#0F1015]">
            <div className="flex justify-between md:flex-row flex-col">
              <div className="w-full md:w-1/2 flex flex-col justify-center text-white pr-0 md:pr-4">
                <motion.h1
                  className="text-2xl md:text-4xl mb-2 md:mb-4 font-bold aeonic-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  revolutionising design & development
                </motion.h1>
                <motion.p
                  className="mb-6 text-base md:text-lg aeonic-light"
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
                <AnimatedButton />
              </div>
              <motion.div
                className="w-full md:w-1/2 h-[300px] hidden md:block md:h-[540px] relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* <Image src={pattern} alt="image" width={700} height={700} /> */}
              </motion.div>
            </div>
          </div>
        </div>
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