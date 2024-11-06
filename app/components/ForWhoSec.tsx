import Image from "next/image";
import React from "react";
import rightImg from "@/public/images/Rectangle 4 (1).svg";
// import redDot from "@/public/images/redDot.svg";
const ForWhoSec = () => {
  const items = [
    "لكل أنثى تبحث عن هويتها الحقيقية، وتريد استعادة شعورها بالأنوثة بعيدًا عن المقارنات والتحديات. استروجيم يساعدك لتكوني فخورة بدورك كأنثى، ويعيدك لجوهرك بكل حب وتوازن.",
    "لكل أنثى تحمل مسؤوليات كبيرة وتشعر بالضغط، هذا البرنامج يعيدك لفطرتك، ويمنحك مفاتيح الراحة التي تعيد لك التوازن بين حياتك العائلية والشخصية والمهنية، لتستمري بسلام وبعيدًا عن التعب.",
    "لكل أنثى تعاني من مشاكل صحية ونفسية مرتبطة باضطرابات شعورية إذا كنتِ تتألمين دون معرفة السبب، استروجيم يمنحك مفاتيح فهم نفسك ويساعدك على التعامل مع الأعراض التي تتعرضين لها.",
    "لكل أنثى ترغب في تحسين علاقاتها بوعي وتوازن، إذا شعرتِ أن علاقاتك أصبحت مرهقة أو مسمومة، استروجيم يعلمك كيف تتعاملين مع من حولك برقة وثقة وراحة نفسية.",
    "لكل أنثى تريد أن تفهم مشاعرها وتديرها بنضج، مشاعرك جزء جميل وأساسي منكِ، واستروجيم يساعدك على إدارتها، لتعيشي بسلام وثقة.",
    "لكل أنثى تأثرت بفكرة الاستقلالية كرمز للقوة، استروجيم يعيد تعريف القوة بأسلوبك الخاص، حيث يعلمك أن الأنوثة هي مصدر قوة حقيقية. هنا ستكتشفين أن الراحة والأمان هما جزء من قوتك الفطرية.",
  ];
  return (
    <div id="forwho" className=" px-4 py-8 lg:px-[96px] lg:py-[88px]">
      <h1 className="lg:mb-10 mb-8 text-[#5C56A0] text-center  text-[32px]  font-bold leading-[160%]">
        لمن هذا البرنامج؟
      </h1>
      <div className="  flex flex-col-reverse  lg:flex-row lg:gap-[96px] justify-around items-center  ">
        <Image src={rightImg} alt="image" />
        <div className="lg:px-4">
          <div>
            <h2 className="mb-8 text-[#242424] lg:text-right text-center [font-family:Tajawal] text-xl lg:text-[32px]  font-bold leading-[160%]">
              <span className="text-[#5c56a0]">استروجيم</span> يساعدك علي
            </h2>
            {items.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                {/* <span>
                <Image
                  src={redDot}
                  alt="red icon"
                  width={32}
                  height={32}
                  className="!w-[32px] !h-[32px]"
                />
              </span> */}
                <div className="w-[22px] h-[22px] rounded-full bg-[#e84e46]"></div>
                <p
                  key={index}
                  className="lg:w-[463px] w-full mb-3 lg:mb-6 text-[#242424] text-right text-lg font-normal leading-[160%]"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWhoSec;
