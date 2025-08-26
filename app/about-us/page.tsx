"use client";
import Image from "next/image";
import LightBulb from "@/public/assets/light-illustration.png";
import { motion } from "framer-motion";
import TeamCarousel from "@/components/Team"; 

function AboutUs() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - Top right corner, smaller size */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-0">
        <div className="w-48 md:w-64 md:block hidden">
          <div className="bg-gradientColor rounded-tr-full rounded-bl-full">
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