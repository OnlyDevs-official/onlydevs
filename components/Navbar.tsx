"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/public/assets/Logo-black.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 w-[90vw] flex items-center box-border justify-between md:px-6 px-4 py-2 md:py-4 backdrop-blur-md bg-opacity-35 rounded-full border border-gray-700 bg-black z-50 mt-3">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="hover:underline"
        />
      </Link>
      <div className="hidden md:flex text-sm md:text-base rounded-full space-x-2 md:space-x-4 font-aeonik font-regular">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/about-us">
          <Button>About Us</Button>
        </Link>
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <TextAlignJustifyIcon className="w-5 h-5 bg-none" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => handleSelect("/")}>
              Home
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => handleSelect("/about-us")}>
              About Us
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => handleSelect("/contact")}>
              Contact
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="https://discord.gg/QUaEBhBB8A" target="_blank">
                <button className="text-white bg-gradient-to-r from-gradientColor  to-[#222225] rounded-full text-sm transition duration-200 px-2 md:px-4 py-1 md:py-2 hover:scale-[1.1]">
                  Become a member!
                </button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Link
        href="https://discord.gg/QUaEBhBB8A"
        target="_blank"
        className="md:block hidden"
      >
        <button className="text-white bg-gradient-to-r from-gradientColor  to-[#222225] rounded-full text-sm transition duration-200 px-2 md:px-4 py-1 md:py-2 hover:scale-[1.1]">
          Become a Member!
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

function Button({ children }: { children: ReactNode }) {
  return (
    <button className="px-4 py-2  bg-black text-white text-sm hover:bg-white text-black transition duration-200">
      {children}
    </button>
  );
}
