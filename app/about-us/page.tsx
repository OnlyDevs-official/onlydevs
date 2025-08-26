"use client";
import Image from "next/image";
import LightBulb from "@/public/assets/light-illustration.png";
import { motion } from "framer-motion";
import TeamCarousel from "@/components/Team"; 
function AboutUs() {
  return (
    <>
      <div className="min-h-screen flex items-center mx-4 md:mx-10">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-8 py-3 bg-gradient-to-r from-gradientColor via-[#85B4BB] to-[#85B4BB] inline-block text-transparent bg-clip-text Aeonik-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About OnlyDevs
          </motion.h1>
          <motion.p
            className="max-w-6xl font-aeonik font-light"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            OnlyDevs is a dynamic platform tailored for developers and designers
            to connect and collaborate. It offers a comprehensive hub where
            members can access a wide range of resources, discover innovative
            solutions, and engage in meaningful discussions. Our dedicated forum
            fosters an environment for sharing knowledge, exploring new ideas,
            and solving challenges within the design and game development
            community.
          </motion.p>
        </div>
        <div className="md:w-1/2 md:block hidden">
          <div className="bg-gradientColor rounded-tr-full rounded-bl-full m-4 md:m-10">
            <div className="bg-gradientColor rounded-tl-full rounded-br-full">
              <Image src={LightBulb} alt="illustration" layout="responsive" />
            </div>
          </div>
        </div>
      </div>

    <TeamCarousel/>

    </>
  );
}



export default AboutUs;
