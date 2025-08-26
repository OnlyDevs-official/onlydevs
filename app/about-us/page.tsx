"use client";
import Image from "next/image";
import LightBulb from "@/public/assets/light-illustration.png";
import { motion } from "framer-motion";
import TeamCarousel from "@/components/Team"; 

function AboutUs() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - Behind everything */}
      <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-10 z-0">
        <div className="md:w-1/2 md:block hidden">
          <div className="bg-gradientColor rounded-tr-full rounded-bl-full m-4 md:m-10">
            <div className="bg-gradientColor rounded-tl-full rounded-br-full">
              <Image src={LightBulb} alt="illustration" layout="responsive" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Carousel - In front of background */}
      <div className="relative z-10 pt-20">
        <TeamCarousel />
      </div>
    </div>
  );
}

export default AboutUs;