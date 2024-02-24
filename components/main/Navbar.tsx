import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="curesor-pointer hover:animate-spin"
          />
          <span className="font-bold ml-[10px] hidden md:block hover:text-white text-gray-300">
            Wachira Dev
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border hover:text-white border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <Link
              href={social.path}
              target="_blank"
              className="rounded-xl hover:bg-[#7042f861] "
            >
              {" "}
              <Image
                src={social.src}
                alt={social.name}
                key={index}
                width={40}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
