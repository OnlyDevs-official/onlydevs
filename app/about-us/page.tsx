"use client";
import Image from "next/image";
import LightBulb from "@/public/assets/light-illustration.png";
import { motion } from "framer-motion";
import TeamCarousel from "@/components/Team"; 

function AboutUs() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-0 px-4 md:px-10">
        <div className="w-full max-w-lg md:block hidden">
          <div className="bg-gradientColor rounded-tr-full rounded-bl-full mx-8">
            <div className="bg-gradientColor rounded-tl-full rounded-br-full">
              <Image src={LightBulb} alt="illustration" layout="responsive" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-20">
        <TeamCarousel />
      </div>
    </div>
  );
}

export default AboutUs;