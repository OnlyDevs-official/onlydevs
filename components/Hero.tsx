"use client";
import React, { ReactNode, useState } from "react";
import {
  ArrowDownIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
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
                  className="text-2xl md:text-4xl mb-2 md:mb-4 font-bold Aeonik-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  revolutionising design & development
                </motion.h1>
                <motion.p
                  className="mb-6 text-base md:text-lg Aeonik-light"
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
                <div className="flex space-x-4">
                  {/* <Link
                    href={"https://www.linkedin.com/company/onlydevsofficial"}
                    target="_blank"
                    aria-placeholder="LinkedIn social"
                  >
                    <Button>
                      <LinkedInLogoIcon className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10" />
                    </Button>
                  </Link>
                  <Link
                    href={"https://www.instagram.com/onlydevsofficial"}
                    target="_blank"
                    aria-placeholder="Instagram social"
                  >
                    <Button>
                      <InstagramLogoIcon className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10" />
                    </Button>
                  </Link>
                  <Link
                    href={"https://x.com/onlydevsoffic_"}
                    target="_blank"
                    aria-placeholder="X social"
                  > */}
                    <Button>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 116 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-full md:h-full "
                      >
                        <path
                          d="M91.3013 0H108.944L70.4 44.0533L115.744 104H80.24L52.432 67.6427L20.6133 104H2.95999L44.1867 56.88L0.687988 0H37.0933L62.2293 33.232L91.3013 0ZM85.1093 93.44H94.8853L31.7813 10.0053H21.2907L85.1093 93.44Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Link>
                  <Link href={"/about-us"} aria-placeholder="About Us">
                    <Button>
                      <PersonIcon className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10" />
                    </Button>
                  </Link>
                </div>
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

function Button({ children, ...prop }: { children: ReactNode }) {
  return (
    <>
      <button
        className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border border-white flex justify-center items-center text-2xl md:text-4xl font-bold"
        {...prop}
      >
        <span className="hover:scale-[1.1] transition">{children}</span>
      </button>
    </>
  );
}
