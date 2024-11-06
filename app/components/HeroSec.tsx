import Image from "next/image";
import React from "react";
import courseLogo from "@/public/images/estrogym-logo.svg";
import videoPlace from "@/public/images/video-place.svg";
const HeroSec = () => {
  return (
    <div className="flex flex-col  lg:flex-row px-2  justify-between items-center lg:px-[145px] pt-6 [background:linear-gradient(278deg,#9C96C5_-0.01%,rgba(255,255,255,0.00)_99.01%)] pb-[126px]">
      <div className="flex flex-col items-center px-2 justify-center ">
        <Image
          src={courseLogo}
          alt="logo"
          width={103}
          height={103}
          className="mb-4"
        />
        <h1 className="lg:w-[506px] mb-4 text-[#E84E46] text-center [font-feature-settings:'liga'_off,'clig'_off] text-xl lg:text-4xl font-bold ">
          تدريبات اللياقة النفسية للأنوثة{" "}
        </h1>
        <p className="lg:w-[507px] w-[300px] mb-[32px] text-[#242424] text-center text-sm lg:text-lg font-normal leading-[160%]">
          اكتشفي سحر الأنوثة وجمال الفطرة وراحة الاتزان انضمي إلى عالم إستروجيم
        </p>
        <a href="#subscribe">
          <button className="flex w-[156px] h-12 justify-center items-center text-white font-bold gap-1 shrink-0 [background:#E84E46] px-8 py-2 rounded-[40px]">
            اشتركِ الآن
          </button>
        </a>
      </div>
      <div>
        <Image
          src={videoPlace}
          alt="video place"
          width={505}
          height={324}
          className="w-[360px] h-[324px] lg:h-[324px] lg:w-[505px]"
        />
      </div>
    </div>
  );
};

export default HeroSec;
