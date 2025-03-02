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
    <div className="fixed top-0 left-0 h-screen bg-black/50 w-full z-50 flex justify-center items-center">
      <div className={`max-w-[920px] relative  w-full max-h-[450px] bg-[#0F0F0F] flex overflow-hidden  ${style.fadeIn}`}>
        {/* cover */}
        <div className="min-w-[450px] relative">
          <Image
            src={"/image/tiffany-tt1-ring-67795121_1010332_ED-1.webp"}
            alt="product"
            width={600}
            height={600}
            className="w-full h-full float-right"
          />
          <div className="accessBtn">
            <button className="w-full absolute left-0 bg-MainColor bottom-0 py-4 text-black  ">
              نمایش جزییات
            </button>
          </div>
        </div>
        <div className="text-white mt-5 p-3 px-5 w-full overflow-auto flex flex-col gap-3">
          <div className="text-2xl font-DBOLD">انگشتر مدل شماره 4</div>
          <div className="text-xl font-DB text-MainColor">550,000 تومان</div>
          <div className="text-sm text-gray-400">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </div>
          <div className="text-sm text-gray-400">موجود در انباز</div>
      {/* colors */}
          <div className="color flex items-center gap-3">
            <p> رنگ ها :</p>
            <div className="colors flex gap-3">
              <div className="cirleColor w-8 h-6 bg-red-500 rounded-full"></div>
              <div className="cirleColor w-8 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-2">
            {/* counter */}
            <div className="counter border border-gray-500 rounded-full flex ">
              <button
                className="p-2 border-l"
                onClick={() => setCounter((prev) => prev - 1)}
              >
                -
              </button>
              <p className="p-2">{counter}</p>
              <button
                className="p-2 border-r"
                onClick={() => setCounter((prev) => prev + 1)}
              >
                +
              </button>

            </div>
            {/* flipBtn */}
            <FlipTextButton
              primaryText="افزودن به سبد خرید"
              secondaryText={<Bag size="32" color="#000" />}
            />
          </div>


       <hr className="border-gray-500" />

       {/* category */}
        <div className="flex gap-2">
          <p>دسته ها:</p>
          <div className=" text-gray-400">
            <span>گوشواره</span>,
            <span>گوشواره</span>
          </div>
        </div>
        <div className="flex gap-2">
          <p>برچسب ها :</p>
          <div className=" text-gray-400">
            <span>گوشواره</span>,
            <span>گوشواره</span>
          </div>
        </div>
        <button className="w-fit underline  ">
          اشتراک گزاری
        </button>








        </div>
        {/* tags */}
        





        <div
          className="closeBtn absolute top-5 left-5 text-white text-3xl cursor-pointer"
          onClick={() => setIsShowModal(false)}
        >

          <CloseCircle size="32" color="#FF8A65" />
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
