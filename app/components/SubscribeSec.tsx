import React from "react";
import useSWR from "swr";
import { fetchData } from "../services";
import Link from "next/link";

const SubscribeSec = () => {
  const { data } = useSWR("estro-gym/packages", fetchData);
  const packages: Package[] = data?.data?.data || [];

  const projects_map: { [key: number]: string } = {
    0: "estrogym_100$_TGS",
    1: "estrogym_270$_TGS",
    2: "estrogym_490$_TGS",
    3: "estrogym_900$_TGS",
  };

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
            className="w-[302px] h-[305px] rounded-2xl bg-gradient-to-b from-[#c3809c] to-[#8e7dc7] p-1"
          >
            <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-2 items-center">
              <h2 className="self-stretch text-[#353535] text-center text-3xl font-bold leading-[160%] overflow-hidden whitespace-nowrap text-overflow-ellipsis w-full">
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
              <Link
                target="_blank"
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}?course_id=c3894163-38c0-4894-ab88-123dda6690e9&project_name=${projects_map[idx]}`}
              >
                <button className="mt-4 mb-2 flex justify-center items-center gap-3 self-stretch bg-[#ED827B] px-8 py-2 rounded-lg text-white font-bold">
                  اشترك الأن
                </button>
              </Link>
              <p className="self-stretch text-[#595959] text-center font-[PNU] text-xs font-medium leading-[22px] tracking-[-0.12px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribeSec;
