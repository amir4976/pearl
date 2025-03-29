"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CloseCircle } from "iconsax-react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { loadBasketFromStorage, removeFromBasket } from "@/Redux/slices/Basket";
import { RootState } from "@/Redux/Store";
type Props = {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  setBasketItems: (items: any[]) => void;
};



function BasketItem({ item, setBasketItems }: Props) {

  const dispath = useDispatch()

  useEffect(()=>{
    dispath(loadBasketFromStorage())
  },[dispath])



  



  const handleRemoveItem = (itemId: string) => {
    Swal.fire({
      title: "حذف کالا",
      text: "آیا از حذف کالا اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "خیر، لغو",
      background: "#121212",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        // حذف کالای مورد نظر از localStorage
        const updatedBasket = localStorage.getItem("basket");

        if (updatedBasket) {
           dispath(removeFromBasket(itemId));
           const updatedBasket = JSON.parse(localStorage.getItem("basket")||"{}");
           if(updatedBasket){
             setBasketItems(updatedBasket)
           }else{
            setBasketItems([])
           }
          Swal.fire(
            {
              icon: "success",
              title: "کالا با موفقیت حذف شد",
              timer: 1500,
              background: "#121212",
              color: "#fff",
            }
          );
        }
      }
    });
  };

  return (
    <div className="card w-full h-fit p-2 flex gap-3  relative">
      <div className="cover ">
        <Image src={item.image} alt="cover" width={65} height={65} />
      </div>
      <div className="flex flex-col text-sm font-DM gap-2">
        <p>{item.name}</p>
        <p>
          <span className="text-gray-500">{item.quantity} × </span>
          {item.price.toLocaleString()} تومان
        </p>
      </div>

      <button
        className="CloseBTN left-2 top-1 absolute text-gray-400 "
        onClick={() => handleRemoveItem(item.id)}
      >
        <CloseCircle size="20" color="red" variant="Broken" />
      </button>
    </div>
  );
}

export default BasketItem;
