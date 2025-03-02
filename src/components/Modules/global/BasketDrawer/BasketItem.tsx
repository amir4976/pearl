import React from "react";
import Image from "next/image";
type Props = {};

function BasketItem({}: Props) {
  return (
    <div className="card w-full h-fit p-2 flex gap-3  relative">
      <div className="cover ">
        <Image
          src={
            "/image/tiffany-co-schlumbergersixteen-stone-ring-19186555_1039864_ED-1.webp"
          }
          alt="cover"
          width={65}
          height={65}
        />
      </div>
      <div className="flex flex-col text-sm font-DM gap-2">
        <p>انگشتر مدل شماره 4 - طلایی</p>
        <p>
          <span className="text-gray-500">1 × </span> 550,000 تومان
        </p>
      </div>

      <div className="CloseBTN left-2 top-1 absolute text-gray-400 ">X</div>
    </div>
  );
}

export default BasketItem;
