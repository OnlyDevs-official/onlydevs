"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import DiscordQr from "@/public/assets/Discord-qr.png";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div
      className="bg-gradient-to-t from-gradientColor to-[#0F1015] p-4 sm:p-8"
      id="community"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 Aeonik-bold">
            Looking for a Community?
          </h2>
          <p className="text-gray-300 mb-6 font-serif">
            Want better connection and make friends with similar taste? We have
            got you covered! Join our community to share your work and provide
            your suggestions on making the design & development community a
            better place.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <SocialButton href="https://www.linkedin.com/company/onlydevsofficial">
              <LinkedInLogoIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </SocialButton>
            <SocialButton href="https://www.instagram.com/onlydevsofficial">
              <InstagramLogoIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </SocialButton>
            <SocialButton href="https://x.com/onlydevsoffic_">
              <svg
                width="20"
                height="20"
                viewBox="0 0 116 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M91.3013 0H108.944L70.4 44.0533L115.744 104H80.24L52.432 67.6427L20.6133 104H2.95999L44.1867 56.88L0.687988 0H37.0933L62.2293 33.232L91.3013 0ZM85.1093 93.44H94.8853L31.7813 10.0053H21.2907L85.1093 93.44Z"
                  fill="white"
                />
              </svg>
            </SocialButton>
          </div>
        </div>
        <div className="w-full lg:w-1/3 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 Aeonik-bold">
            Join the community
          </h3>
          <p className="text-gray-300 mb-4 font-serif">Scan the QR code</p>
          <div className="inline-block">
            <Image
              src={DiscordQr}
              alt="QR Code"
              width={150}
              height={150}
              className="rounded-2xl"
            />
          </div>
          <p className="text-gray-300 mt-4 text-sm sm:text-base font-serif">
            Feel free to
            <br />
            contact us regarding
            <br />
            any queries!
          </p>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

const SocialButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white flex justify-center items-center text-white hover:scale-110 transition-transform">
        {children}
      </button>
    </Link>
  );
};

const ScrollToTopButton = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
      <button
        className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-black border border-white flex justify-center items-center text-xl sm:text-2xl font-bold text-white hover:bg-white hover:text-black transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
};

export default ContactSection;
