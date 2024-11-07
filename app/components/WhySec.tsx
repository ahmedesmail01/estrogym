import Image from "next/image";
import React from "react";

const WhySec = () => {
  return (
    <div id="what" className="lg:py-[96px] py-5 text-center">
      <h1 className=" lg:mb-[40px] mb-5 text-[#5C56A0] text-center lg:text-[32px] text-3xl font-bold leading-[160%]">
        لماذا هذا البرنامج؟
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-around lg:px-[96px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="flex lg:w-[574px] w-[300px]  justify-center items-center  [background:#FDEEED] lg:px-8 px-4 py-3 rounded-[20px] ">
            استروجيم هو أكثر من مجرد تدريب إنه رحلة لإعادة اكتشاف الذات والأنوثة
            الفطرية في عصر تتعدد فيه المسؤوليات ويزداد فيه التحدي لتحقيق التوازن
          </p>
          <p className="flex lg:w-[574px] w-[300px] justify-center items-center gap-2.5 [background:#F3F2F8] lg:px-8 px-4 py-3 rounded-[20px]">
            يقدم استروجيم فرصة لكل امرأة لتتعرف على كيفية الوصول لحال الراحة علي
            الصعيد العاطفي وبالتالي الجسدي، وتستعيد تواصلها مع مشاعرها الطبيعية
          </p>
          <p className="flex lg:w-[574px] w-[300px] justify-center items-center gap-2.5 [background:#FDEEED] lg:px-8 px-4 py-3 rounded-[20px]">
            يُعتبر استروجيم خيارًا ضروريًا للمرأة الطموحة التي تسعى للاستقرار
            الداخلي والاستمتاع بالسعادة في علاقاتها وحياتها اليومي
          </p>
        </div>
        <div className="p-2 border border-red-500 w-fit rounded-full ">
          <div className=" lg:w-[400px] w-[280px] lg:h-[400px] h-[280px] rounded-full  ">
            <Image
              src={"/estro-gym/images/for-whom-this.svg"}
              alt=""
              className="w-full h-full rounded-full object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySec;
