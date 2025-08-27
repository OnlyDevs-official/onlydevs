"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { features } from "@/lib/consts";

const FeaturesList = () => {
  // Title animations
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(
    titleScrollProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const titleScale = useTransform(
    titleScrollProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const titleFilter = useTransform(
    titleScrollProgress,
    [0, 0.2, 0.8, 1],
    ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
  );

  // Paragraph animations
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress: paraScrollProgress } = useScroll({
    target: paraRef,
    offset: ["start end", "end start"],
  });

  const paraOpacity = useTransform(
    paraScrollProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const paraScale = useTransform(
    paraScrollProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const paraFilter = useTransform(
    paraScrollProgress,
    [0, 0.2, 0.8, 1],
    ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
  );

  return (
    <>
      <section
        id="featureList"
        className="mt-[12rem] py-24 px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-6xl mx-auto mb-20 aeonik-bold"
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            filter: titleFilter,
          }}
        >
          The Community
        </motion.h1>

        <motion.p
          ref={paraRef}
          className="text-lg md:text-xl text-center text-white font-light max-w-3xl mx-auto mb-12"
          style={{
            opacity: paraOpacity,
            scale: paraScale,
            filter: paraFilter,
          }}
        >
          Network with{" "}
          <span className="orbikular-medium">real industry experts</span> who
          know what they're talking about.
        </motion.p>

        <div className="mx-auto max-w-7xl">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

interface FeatureItemProps {
  feature: {
    title: string;
    description: string;
    image: StaticImageData;
  };
  index: number;
}

const FeatureItem = ({ feature, index }: FeatureItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const filter = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
  );

  return (
    <motion.div ref={ref} className="mb-20" style={{ opacity, scale, filter }}>
      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        <div
          className={`${
            index % 2 === 1 ? "md:order-2" : ""
          } bg-gradient-to-t from-gradientColor to-[#0F1015] rounded-xl`}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={300}
            height={300}
            className="h-auto"
          />
        </div>
        <div
          className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:order-1" : ""}`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-aeonik font-bold">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-lg md:text-xl font-aeonik font-light">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesList;
