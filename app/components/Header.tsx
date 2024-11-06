import Image from "next/image";
import React from "react";
import logo from "@/public/images/mtn-logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-[32px] lg:py-4 lg:px-[120px]">
      <div className="flex items-center lg:gap-[64px]">
        <Image src={logo} alt="logo" width={96} height={36} />
        <ul className="hidden lg:flex items-center gap-[32px]">
          <li>
            <a href="#what">ما هو استروجيم</a>
          </li>
          <li>
            <a href="#why"> لماذا تختاري استروجيم</a>
          </li>
          <li>
            <a href="#about">عن المحاضر</a>
          </li>
          <li>
            <a href="#forwho">لمن هذا البرنامج</a>
          </li>
        </ul>
      </div>
      <a href="#subscribe">
        <button className="text-[#5C56A0]  border-2 rounded-full w-[100px] h-[30px] lg:w-[178px] lg:h-[44px] border-[#5C56A0] lg:text-base text-sm font-bold leading-6">
          اشتركِ الآن
        </button>
      </a>
    </div>
  );
};

export default Header;
