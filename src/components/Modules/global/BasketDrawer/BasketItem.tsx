import React from "react";
import Image from "next/image";
type Props = {
  item: any;
};

function BasketItem({item}: Props) {
  return (
    <div className="card w-full h-fit p-2 flex gap-3  relative">
      <div className="cover ">
        <Image
          src={
           item.image
          }
          alt="cover"
          width={65}
          height={65}
        />
      </div>
      <div className="flex flex-col text-sm font-DM gap-2">
        <p>{item.name}</p>
        <p>
          <span className="text-gray-500">{item.quantity} × </span>{(item.price).toLocaleString()} تومان
        </p>
      </div>

      <div className="CloseBTN left-2 top-1 absolute text-gray-400 ">X</div>
    </div>
  );
}

export default BasketItem;
