import React from "react";
// import useSWR from "swr";
import Link from "next/link";

const SubscribeSec = () => {
  // const { data } = useSWR("estro-gym/packages", fetchData);
  // const packages: Package[] = data?.data?.data || [];
  const packages = [
    {
      id: "74c81c87-eb59-488c-8150-08248c4ec948",
      name: "اشتراك شهري",
      original_price: 100,
      price_after_discount: 0,
      duration: 1,
      p1: `احصل على ٤ حلقات مسجلة `,
      p2: `٣ لقاءات جماعية مباشرة مع الدكتور / شهر`,
      link: "https://managethenow.com/checkout/?id=50/",
    },
    {
      id: "15833bf0-c2ce-4a17-8ae0-8f37b8d0f991",
      name: "اشتراك ربع سنوي",
      original_price: 300,
      price_after_discount: 270,
      duration: 3,
      p1: "احصل على ٤ حلقات مسجلة ",
      p2: "٩ لقاءات جماعية مباشرة مع الدكتور احمد الدملاوي",
      link: "https://managethenow.com/checkout/?id=51",
    },
    {
      id: "4fe078e4-d786-429d-b53e-55be41ce762d",
      name: "اشتراك نصف سنوي",
      original_price: 600,
      price_after_discount: 490,
      duration: 6,
      p1: "احصل على ٦ حلقات مسجلة ",
      p2: "١٨ لقاء جماعي مباشرة مع الدكتور أحمد الدملاوي بمعدل ٣ لقاءات/شهر",
      link: "https://managethenow.com/checkout/?id=52",
    },
    {
      id: "a8812b67-9c2a-4e7f-8351-e5a71cc36063",
      name: "اشتراك سنوي",
      original_price: 1200,
      price_after_discount: 900,
      duration: 6,
      p1: "احصل على ١٢ حلقة مسجلة ",
      p2: `و ٣٦ لقاء جماعي مباشر مع الدكتور احمد الدملاوي
بمعدل ٣ لقاءات/شهر`,
      link: "https://managethenow.com/checkout/?id=53",
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
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        {packages?.map((item, idx) => (
          <div
            key={idx}
            className="w-[312px] h-[375px] rounded-2xl bg-gradient-to-b from-[#c3809c] to-[#8e7dc7] p-1"
          >
            <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-2 items-center">
              <h2 className="self-stretch text-[#353535] text-center text-3xl font-bold overflow-hidden whitespace-nowrap leading-[130%] text-overflow-ellipsis w-full">
                {item.name}
              </h2>
              {Number(item.price_after_discount) === 0 ? (
                <>
                  <p className="self-stretch text-[color:var(--Gray-900,#1D2026)] text-center text-[32px] font-bold leading-8">
                    ${item.original_price}
                  </p>
                  <p className="self-stretch  text-transparent text-center text-[32px] font-bold leading-8">
                    ${item.price_after_discount}
                  </p>
                </>
              ) : (
                <>
                  <p className="self-stretch text-[color:var(--Gray-900,#1D2026)] text-center text-[32px] font-bold leading-8">
                    ${item.price_after_discount}
                  </p>
                  <p
                    className={`h-5 mb-4 text-base font-normal leading-6 line-through text-[color:var(--Gray-500,#8C94A3)]`}
                  >
                    ${item.original_price}
                  </p>
                </>
              )}
              <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#636363] text-center [font-family:Tajawal] text-[13px] font-bold leading-8">
                {item.p1}
                {item.p2}
              </p>

              <Link
                target="_blank"
                className="w-full"
                // href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}auth/register?package_id=${item.id}`}
                href={item.link}
              >
                <button className="mt-4 mb-2 h-[56px] w-full flex justify-center text-white font-bold items-center gap-3 self-stretch [background:#ED827B] px-8 py-0 rounded-lg">
                  اشترك الأن
                </button>
              </Link>

              {/* <p className="text-xs [font-family:Tajawal]">
                <span className="text-red-500">ملاحظة</span>
                {": البرنامج عبارة عن 4 لقاءات/ شهر (أونلاين)"}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribeSec;
