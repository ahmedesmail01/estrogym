import Image from "next/image";
import React from "react";
import group from "@/public/images/Group 1.png";
import oneIcon from "@/public/images/iconOne.svg";
import twoIcon from "@/public/images/iconTwo.svg";
import threeIcon from "@/public/images/iconThree.svg";

const WhyChooseSec = () => {
  const items = [
    {
      id: 1,
      title: "أساليب مبتكرة",
      icon: oneIcon,
      content:
        "تدريبات عملية تساعدك على العيش في اللحظة وفهم مشاعرك بشكل أفضل.",
    },
    {
      id: 2,
      title: "نتائج ملحوظة",
      icon: twoIcon,
      content:
        " تغييرات ملموسة في علاقاتك وصحتك النفسية والجسدية، مما يجعلك في أفضل حالاتك.",
    },
    {
      id: 3,
      title: "تجربة متكاملة",
      icon: threeIcon,
      content:
        "البرنامج لا يعالج ولكنه يُمهد لك الطريق نحو التشافي الذاتي، ليكون بداية رائعة لرحلة التوازن الداخلي.",
    },
  ];

  return (
    <div
      id="why"
      className=" py-8 px-4 lg:mb-[96px] lg:px-[96px] bg-gradient-to-l from-[#fdeeee] to-[#ffffff]"
    >
      <h1 className=" text-black text-center lg:text-[32px] text-xl font-bold leading-[160%]">
        <span className="text-[#5c56a0]">لماذا تختارين</span> برنامج استروجيم؟
      </h1>
      <p className=" text-[#242424] text-center py-4 mb-10 text-sm lg:text-xl font-normal leading-[160%]">
        برنامج استروجيم مصمم خصيصاً ليمنحك الدعم والتوجيه من خلال تدريبات عملية
        في لقاءات مباشرة مع الدكتور أحمد الدملاوي بواقع لقاء أسبوعي، لتكوني
        جزءًا من مجتمع نسائي يشاركك تجارب فريدة تدعمك في إدارة نفسك وبالتالي
        إمكانية استعادة التوازن والراحة الداخلية
      </p>
      <div className="flex flex-col-reverse px-4 lg:flex-row justify-between items-center gap-[126px]">
        <div>
          <Image src={group} alt="group" />
        </div>
        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <>
              <div key={item.id} className="flex items-start gap-4">
                <Image src={item.icon} alt="number icon" />
                <div>
                  <h2 className=" text-[#5C56A0] text-right  mb-3 text-lg font-bold leading-[160%]">
                    {item.title}
                  </h2>
                  <p className="lg:w-[460px]">{item.content}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSec;
