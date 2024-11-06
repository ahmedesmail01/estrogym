import Image from "next/image";
import React from "react";
import backImg from "@/public/images/purple-flowers 1.svg";
import doc from "@/public/images/dr-ahmed-img.svg";

const AboutDoc = () => {
  const items = [
    "- طبيب خريج كلية الطب جامعة عين شمس عام 1982",
    "- الطبيب الوحيد في العالم العربي الذي يعتمد في تشخيص وعلاج عملائه على منظور علاجي وتدريبي ينبع من تشخيص النفس بالألوان وتشخيص المرض بالسبب النفسي له  علم الميتاهيلث  منذ عام 2012 حتى الآن.",
    "- مؤسس الطب التصنيفي",
    "- قام بتأسيسه عام 2019 بعد أبحاث وتجارب دامت أكثر من 7 سنوات ومستمر في تطويرها وتدريسها حتى الأن ، وقد أعتمد فيه طريقة مذهلة في التشخيص والعلاج بتحديد المشاعر المضطربة بدقة شديدة والتي تتسبب في صدمات تنتهي بأمراض عضوية ونفسية ، ويتم تحديد هذه الاضطرابات بتقنيات متعددة يقوم بممارستها بعيادته بالقاهرة وأيضاً يقوم بتدريسها لطالبي تعلم هذا العلم .",
    "- أستاذ مدرب علم الميتاهيلث ونائب رئيس الجمعية العالمية للميتا ماديسون بالولايات المتحدة  IMMA®  (سابقاً) . علم الميتاهيلث هو منظور جديد للطب ينبع من منظور الشفاء وليس المرض.",
  ];
  return (
    <div
      id="about"
      className="relative overflow-hidden flex flex-col-reverse lg:flex-row lg:gap-[96px] justify-around items-center px-4 py-8 lg:px-[96px] lg:py-[88px] "
    >
      <Image
        src={backImg}
        alt="back image"
        className="absolute w-full h-full object-cover  left-0"
      />
      <Image src={doc} alt="doc ahmed" />
      <div className="lg:px-4">
        <h1 className="lg:mb-10 mb-8 text-[#5C56A0] text-right  text-[32px]  font-bold leading-[160%]">
          د.أحمد الدملاوي
        </h1>
        <div>
          {items.map((item, index) => (
            <p
              key={index}
              className="lg:w-[612px] mb-3 lg:mb-6 text-[#242424] text-right text-xl lg:text-xl font-normal leading-[160%]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDoc;
