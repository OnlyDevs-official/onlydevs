"use client";
import React from "react";
import Link from "next/link";

interface SubtitleProps {
  text?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({
  text = "OnlyDevs isn't just another stagnant community. We're building the most versatile platform for designers & developers, strengthening the bond between these industries. But we need your help."
}) => {
  return (
    <section className="w-full flex flex-col items-center mt-12 mb-16 px-4">
      <p className="text-4xl md:text-3xl text-white font-semibold text-center max-w-3xl leading-relaxed mb-8">
        {text.split("need your help").map((part, index, arr) => (
          <React.Fragment key={index}>
            {part}
            {index < arr.length - 1 && (
              <span>
                need <span className="orbikular-medium">your</span> help
              </span>
            )}
          </React.Fragment>
        ))}
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="https://discord.gg/9UbbYWEQDH" target="_blank">
          <button className="bg-[#006eff] text-white rounded-full px-6 py-3 font-bold 
            cursor-pointer transition-all duration-300 min-w-[140px] h-[50px] 
            hover:shadow-[0_0_20px_#006eff]">
            Join Now
          </button>
        </Link>

        <Link href="https://www.instagram.com/onlydev.s" target="_blank">
          <button className="border border-white text-white rounded-full px-6 py-3 font-bold 
            cursor-pointer transition-all duration-300 min-w-[140px] h-[50px] 
            hover:bg-white hover:text-black">
            Discover
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Subtitle;
