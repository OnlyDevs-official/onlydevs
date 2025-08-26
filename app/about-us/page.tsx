"use client";
import Image from "next/image";
import LightBulb from "@/public/assets/light-illustration.png";
import { motion } from "framer-motion";
import TeamCarousel from "@/components/Team"; 

function AboutUs() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-0">
        <div className="w-24 md:w-32 md:block hidden">
          <div className="bg-gradientColor rounded-tr-full rounded-bl-full">
            <div className="bg-gradientColor rounded-tl-full rounded-br-full">
              <Image src={LightBulb} alt="illustration" layout="responsive" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="w-full overflow-hidden">
          <TeamCarousel />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;