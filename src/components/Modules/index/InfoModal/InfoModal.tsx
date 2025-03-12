"use client";
import Image from "next/image";
import React from "react";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
import { Bag, CloseCircle } from "iconsax-react";
import style from './infoModal.module.css'
interface InfoModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const InfoModal: React.FC<InfoModalProps> = ({ setIsShowModal }) => {
  const [counter, setCounter] = React.useState<number>(1);
  return (
<div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex justify-center items-center max-md:items-start">
  <div
    className={`relative w-full max-w-[920px] bg-[#0F0F0F] flex max-md:flex-col overflow-hidden 
      max-h-[450px] max-md:max-h-screen max-md:h-screen max-md:overflow-y-auto ${style.fadeIn}`}
  >
    {/* Cover Image */}
    <div className="min-w-[450px] max-md:min-w-full relative">
      <Image
        src={"/image/tiffany-tt1-ring-67795121_1010332_ED-1.webp"}
        alt="product"
        width={600}
        height={600}
        className="w-full h-full max-md:h-[300px] object-cover"
      />
      <button className="w-full absolute left-0 bg-MainColor bottom-0 py-4 text-black">
        نمایش جزییات
      </button>
    </div>

    {/* Content */}
    <div className="text-white mt-5 p-3 px-5 w-full flex flex-col gap-3 overflow-y-auto max-md:flex-grow">
      <div className="text-2xl font-DBOLD">انگشتر مدل شماره 4</div>
      <div className="text-xl font-DB text-MainColor">550,000 تومان</div>
      <div className="text-sm text-gray-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
      </div>

      {/* Colors */}
      <div className="color flex items-center gap-3">
        <p>رنگ‌ها:</p>
        <div className="flex gap-3">
          <div className="w-8 h-6 bg-red-500 rounded-full"></div>
          <div className="w-8 h-6 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Counter & Button */}
      <div className="flex gap-2">
        <div className="counter border border-gray-500 rounded-full flex">
          <button className="p-2 border-l" onClick={() => setCounter((prev) => prev - 1)}>-</button>
          <p className="p-2">{counter}</p>
          <button className="p-2 border-r" onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
        <FlipTextButton primaryText="افزودن به سبد خرید" secondaryText={<Bag size="32" color="#000" />} />
      </div>

      <hr className="border-gray-500" />

      {/* Categories & Tags */}
      <div className="flex gap-2">
        <p>دسته‌ها:</p>
        <div className="text-gray-400"><span>گوشواره</span>, <span>انگشتر</span></div>
      </div>
      <div className="flex gap-2">
        <p>برچسب‌ها:</p>
        <div className="text-gray-400"><span>طلا</span>, <span>جواهر</span></div>
      </div>

      <button className="w-fit underline">اشتراک‌گذاری</button>
    </div>

    {/* Close Button */}
    <div className="absolute top-5 left-5 text-white text-3xl cursor-pointer" onClick={() => setIsShowModal(false)}>
      <CloseCircle size="32" color="#FF8A65" />
    </div>
  </div>
</div>

  );
};

export default InfoModal;
