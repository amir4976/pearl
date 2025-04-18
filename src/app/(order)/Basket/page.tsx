"use client";

import {  loadBasketFromStorage, removeFromBasket, updateBasket } from "@/Redux/slices/Basket";


import { RootState } from "@/Redux/Store";
import { ArrowLeft, CloseSquare } from "iconsax-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { BasketItem } from "@/types/types";
import Link from "next/link";
import OfferBox from "@/components/Modules/Basket/OfferBox";


function Page() {
  // our main basket 
  const [basket, setBasket] = React.useState<BasketItem[]>([]);
    
  // load the basket and load the dispatch
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(loadBasketFromStorage());
  }, [dispatch]);


  // load data from store and get in this page
  const basketData: BasketItem[] = useSelector((state: RootState) => state.Basket.basket);
  useEffect(() => {
    return setBasket(basketData);
  }, [basketData]);


  const handleRemoveFromBasket = (productId: string) => {
    Swal.fire({
      title: "آیا از حذف این محصول اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      background: "#121212",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the product from the basket
        const FiltredData = basketData.filter(
          (item: BasketItem) => item.id !== productId
        );
        dispatch(removeFromBasket(productId));
        setBasket(FiltredData);
      }
    });
  };


const calculateTotalPrice = () => {
  // we can calculte price  from here
  let totalPrice = 0;
  basketData.forEach((item: BasketItem) => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice.toLocaleString('fa-ir');
}


//  this one tack the quantity of product and add it to the basket
const addMoreQuantity = (productId: string) => {
  const index = basket.findIndex((item) => item.id === productId);
  if (index !== -1) {
    const updatedBasket = [...basket];
    updatedBasket[index] = {
      ...updatedBasket[index],
      quantity: updatedBasket[index].quantity + 1,
    };
    console.log(updatedBasket)
    setBasket(updatedBasket);
    dispatch(updateBasket(updatedBasket));
  } else {
    console.log("محصول در سبد خرید یافت نشد");
  }
};


// well this one nearly tack me down :D
// this one is decrease the quantity of product and if the quantity is 0 remove the product from the basket
const decreaseQuantity = (productId: string) => {
  const index = basket.findIndex((item) => item.id === productId);
   
  if (index !== -1) {
    const updatedBasket = [...basket];
    updatedBasket[index] = {
      ...updatedBasket[index],
      quantity: updatedBasket[index].quantity - 1,
    };

    if(updatedBasket[index].quantity === 0 ) {
      return handleRemoveFromBasket(productId)
    }

    setBasket(updatedBasket);
    dispatch(updateBasket(updatedBasket));
  } else {
    console.log("محصول در سبد خرید یافت نشد");
  }
}


// well if you dont undrestand this one so you should't have to be here :D
const getQuantity = (productId: string) => {
  const item = basket.find((item) => item.id === productId);
  return item ? item.quantity : 0;
};





  return (
    <div className="">
      <div className="flex items-center text-2xl text-DB py-10   text-gray-500 gap-2">
        <span className="text-white">سبد خرید</span>
        <span>
          <ArrowLeft />
        </span>
        <span>تصفیه حساب</span>
        <span>
          <ArrowLeft />
        </span>
        <span>ثبت سفارش</span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3  gap-5">
        <div className="col-span-2 w-full">
          <div className="w-full h-fit min-h-[500px]">
            <div className=" w-full">
              <table className="w-full table table-auto  text-center">
                <thead className="border-b border-b-slate-500">
                  <tr>
                    <th className="p-2"></th>
                    <th className="p-2">محصول</th>
                    <th className="p-2">قیمت</th>
                    <th className="p-2">تعداد</th>
                    <th className="p-2">جمع جز</th>
                  </tr>
                </thead>

                <tbody>
                  {basket.map((item: BasketItem, index) => (
                    <tr className="border-b border-slate-600" key={index}>
                      <td onClick={() => handleRemoveFromBasket(item.id)}>
                        <CloseSquare size={20} />
                      </td>

                      <td>
                        <div className="flex  justify-center items-center py-5 gap-2">
                          <Image
                            src={item.image}
                            alt=""
                            width={100}
                            height={100}
                          />
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td>
                        <div className=" text-center text-slate-500">
                         {item.price} تومان
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <button className="border w-7 h-10 rounded-r-full"  onClick={()=>decreaseQuantity(item.id)}>
                            -
                          </button>
                          <div className="border min-w-7"> { getQuantity(item.id) } </div>
                          <button className="border w-7 h-10 rounded-l-full" onClick={()=>addMoreQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="font-DB text-MainColor">
                          {item.price * item.quantity} تومان
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
                  {basket.length === 0 && <p className="text-center mt-5 text-MainColor">سبد خرید شما خالی است</p>}
            </div>
          </div>
        </div>
        <div className="col-span-1 menu font-DR ">
          <div className="w-full flex flex-col gap-5 border-2 border-gray-500 p-7">
            <h1 className="text-xl font-DB text-MainColor">جمع کل سبد خرید</h1>
            <div className="w-full p-2 border-b border-gray-500  flex justify-between ">
              <p>جمع کل</p>
              <p>{calculateTotalPrice()} تومان</p>
            </div>
            <div className="w-full p-2 border-b border-gray-500  flex justify-between">
              <p> جمع کل باتخفیف</p>
              <p>{calculateTotalPrice()} تومان</p>
            </div>
            <div className="w-full p-2    flex justify-between">
              <p> مجموع</p>
              <p className="text-lg font-DB text-MainColor">{calculateTotalPrice()} تومان</p>
            </div>
            <Link href={'/Basket/FinalizeBasket'} className="w-full text-center py-2 rounded-md bg-MainColor text-black">
              ثبت نهایی سفارش
            </Link>
          </div>
          {/* offer code */}
                  <OfferBox/>
        </div>
      </div>
    </div>
  );
}

export default Page;
