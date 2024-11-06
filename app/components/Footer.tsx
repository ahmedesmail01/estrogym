"use client";

import Image from "next/image";
import React from "react";
import instagram from "@/public/images/instagram-icon.svg";
import Youtube from "@/public/images/youtube.svg";
import X from "@/public/images/new-twitter.svg";
import linkedin from "@/public/images/linkedin-logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#b3aed2] h-[80px] pt-4 mt-[160px] md:bg-none lg:mt-[230px] lg:h-[155px] border-t flex flex-col items-center justify-between lg:pt-[40px]">
      <div className="flex flex-row-reverse items-center gap-16 lg:gap-[88px]">
        <div className="flex  gap-3 items-center justify-center cursor-pointer">
          <span className="hidden md:block text-black  text-lg font-medium leading-5 tracking-[0.21px]">
            Company
          </span>
          <Image src={instagram} alt="Instagram" width={24} height={24} />
        </div>
        <div className="flex gap-3 items-center justify-center cursor-pointer">
          <span className="hidden md:block text-black  text-lg font-medium leading-5 tracking-[0.21px]">
            Youtube
          </span>
          <Image src={Youtube} alt="Youtube" width={24} height={24} />
        </div>
        <div className="flex gap-3 items-center justify-center cursor-pointer">
          <span className="hidden md:block text-black  text-lg font-medium leading-5 tracking-[0.21px]">
            X
          </span>
          <Image src={X} alt="X" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="hidden md:block text-black  text-lg font-medium leading-5 tracking-[0.21px]">
            linkedin
          </span>
          <Image src={linkedin} alt="linkedin" />
        </div>
      </div>
      <p className="text-black text-center mt-4 text-sm font-medium leading-[25px] tracking-[-0.14px] opacity-70">
        © 2024 All Rights Reserved - Mange The Now
      </p>
    </div>
  );
};

export default Footer;
