"use client";
import React, { useEffect } from "react";
import Style from "./BasketDrawer.module.css";

import FlipTextButton from "../AnimateBtn/AnimateBtn";
import { Bag } from "iconsax-react";
import Image from "next/image";
import BasketItem from "./BasketItem";

interface BasketDrawerProps {
  setIsShowBasketDrawer: (isOpen: boolean) => void;
}

const BasketDrawer: React.FC<BasketDrawerProps> = ({
  setIsShowBasketDrawer,
}) => {
  return (
    <div
      className={`z-50 fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/50 ${Style.fadeInBackGround}`}
      onClick={() => setIsShowBasketDrawer(false)} // بستن هنگام کلیک روی پس‌زمینه
    >
      <div
        className={` absolute   h-screen left-0 w-[340px] px-3 bg-[#0F0F0F] ${Style.fadeIn} `}
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته‌شدن هنگام کلیک روی خود سبد
      >
        <div className="flex justify-between py-5 ">
          <p>سبد خرید</p>
          <button>بستن</button>
        </div>
        <hr />

        <div className="w-full h-3/4 overflow-auto ">
           {/* basket items */}
           <BasketItem/>
        </div>

        {/* order btns */}
        <div className="absolute p-3 bottom-0 left-0 w-full bg-inherit">
          <hr />
          <div className="flex justify-between">
            <p>جمع کل</p>
            <p>270,000 تومان</p>
          </div>
          <div className="w-full h-fit flex flex-col gap-3">
            <FlipTextButton
              primaryText="مشاهده سبد خرید"
              secondaryText={<Bag size="32" color="#000" />}
            />

            <FlipTextButton
              primaryText=" تسویه حسساب"
              secondaryText={<Bag size="32" color="#000" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDrawer;
