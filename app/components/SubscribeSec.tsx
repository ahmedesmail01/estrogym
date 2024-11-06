import React from "react";

const SubscribeSec = () => {
  const items = [
    {
      title: "أشتراك 3 شهور",
      price: "$900",
      discount: "$1200",
      note: (
        <>
          <span className="text-red-500">ملاحظة</span>
          {": البرنامج عبارة عن 4 لقاءات/ شهر (أونلاين)"}
        </>
      ),
    },
    {
      title: "أشتراك 3 شهور",
      price: "$490",
      discount: "$600",
      note: (
        <>
          <span className="text-red-500">ملاحظة</span>
          {": البرنامج عبارة عن 4 لقاءات/ شهر (أونلاين)"}
        </>
      ),
    },
    {
      title: "أشتراك 3 شهور",
      price: "$270",
      discount: "$300",
      note: (
        <>
          <span className="text-red-500">ملاحظة</span>
          {": البرنامج عبارة عن 4 لقاءات/ شهر (أونلاين)"}
        </>
      ),
    },
    {
      title: "أشتراك 3 شهور",
      price: "$100",
      discount: "",
      note: (
        <>
          <span className="text-red-500">ملاحظة</span>
          {": البرنامج عبارة عن 4 لقاءات/ شهر (أونلاين)"}
        </>
      ),
    },
  ];

  return (
    <div id="subscribe" className="lg:mb-[96px] mb-10">
      <h1 className=" mb-4 text-[color:var(--www\_getfinvest\_com\_\_1440x761-Black-Pearl,#071A34)] text-center [font-family:Tajawal] text-[42px] font-extrabold leading-[normal]">
        اشترك الأن
      </h1>
      <p className="mb-[52px] text-[color:var(--gray-scale-gray-600,var(--gray-scale-gray-600,#4B5563))] text-center [font-family:Tajawal] text-lg font-normal leading-7">
        أختر خطة اشتراكك الأن
      </p>
      <div className="flex flex-col-reverse lg:flex-row gap-4 items-center justify-center">
        {[...items].reverse().map((item, idx) => (
          <div
            key={idx}
            className="w-[302px] h-[305px] rounded-2xl bg-gradient-to-b from-[#c3809c] to-[#8e7dc7] p-1"
          >
            <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-2 items-center">
              <h2 className="self-stretch text-[#353535] text-center text-4xl font-bold leading-[160%]">
                {item.title}
              </h2>
              <p className="self-stretch text-[color:var(--Gray-900,#1D2026)] text-center text-[32px] font-bold leading-8">
                {item.price}
              </p>
              <p className="h-5 mb-4 text-[color:var(--Gray-500,#8C94A3)] text-base font-normal leading-6 line-through">
                {item.discount}
              </p>
              <button className="mt-4 mb-2 flex justify-center items-center gap-3 self-stretch bg-[#ED827B] px-8 py-2 rounded-lg text-white font-bold">
                اشترك الأن
              </button>
              <p className="self-stretch text-[#595959] text-center font-[PNU] text-xs font-medium leading-[22px] tracking-[-0.12px]">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribeSec;