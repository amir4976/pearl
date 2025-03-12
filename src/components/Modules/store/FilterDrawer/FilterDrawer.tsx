"use client";
import React from "react";
import Style from "./FilterDrawer.module.css";
import { CloseSquare } from "iconsax-react";

interface FilterDrawerProps {
  setIsShowFilterDrawer: (isOpen: boolean) => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  setIsShowFilterDrawer,
}) => {
  return (
    <div
      className={`z-50 fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/50 ${Style.fadeInBackGround}`}
      onClick={() => setIsShowFilterDrawer(false)} // بستن هنگام کلیک روی پس‌زمینه
    >
      <div
        className={` absolute   h-screen left-0 w-[340px] px-3 bg-[#0F0F0F] ${Style.fadeIn} `}
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته‌شدن هنگام کلیک روی خود سبد
      >
        <div className="flex justify-between py-5 ">
          <p>منو</p>
          <button onClick={()=>setIsShowFilterDrawer(false)}><CloseSquare size="32" color="#F3D098"/></button>
        </div>


            <div className=" w-full h-fit">
                <ul className="flex flex-col gap-2 [&>*]:border-b [&>*]:border-gray-600 [&>*]:text-MainColor hover:border-b-MainColor  [&>*]:py-2 ">
                    <li className="hover:border-b-MainColor transition-all">فروشگاه</li>
                    <li className="hover:border-b-MainColor transition-all">درباره ما</li>
                    <li className="hover:border-b-MainColor transition-all">تماس با ما</li>
                    <li className="hover:border-b-MainColor transition-all">دموهای دیگر</li>
                    <li className="hover:border-b-MainColor transition-all">علاقه مندی</li>
                    <li className="hover:border-b-MainColor transition-all">مقایسه</li>
                    <li className="hover:border-b-MainColor transition-all">ورود / ثبت نام</li>
                </ul>
            </div>

        </div>
    </div>
  );
};

export default FilterDrawer;
