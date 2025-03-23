"use client";
import React, { useState, useEffect } from "react";
import Style from "./BasketDrawer.module.css";
import FlipTextButton from "../AnimateBtn/AnimateBtn";
import { Bag } from "iconsax-react";
import BasketItem from "./BasketItem";
import Link from "next/link";

interface BasketItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface BasketDrawerProps {
  setIsShowBasketDrawer: (isOpen: boolean) => void;
}

const BasketDrawer: React.FC<BasketDrawerProps> = ({
  setIsShowBasketDrawer,
}) => {
  const [basketItems, setBasketItems] = useState<BasketItemType[]>(() => {
    // مقدار اولیه از localStorage
    if (typeof window !== "undefined") {
      const storedBasket = localStorage.getItem("basket");
      return storedBasket ? JSON.parse(storedBasket) : [];
    }
    return [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedBasket = localStorage.getItem("basket");
      setBasketItems(updatedBasket ? JSON.parse(updatedBasket) : []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div
      className={`z-50 fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/50 ${Style.fadeInBackGround}`}
      onClick={() => setIsShowBasketDrawer(false)}
    >
      <div
        className={`absolute h-screen left-0 w-[340px] px-3 bg-[#0F0F0F] ${Style.fadeIn}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between py-5">
          <p>سبد خرید</p>
          <button onClick={() => setIsShowBasketDrawer(false)}>بستن</button>
        </div>
        <hr />

        <div className="w-full h-3/4 overflow-auto">
          {basketItems.length > 0 ? (
            basketItems.map((item) => <BasketItem key={item.id} item={item} />)
          ) : (
            <p className="text-center">سبد خرید شما خالی است</p>
          )}
        </div>

        <div className="absolute p-3 bottom-0 left-0 w-full bg-inherit">
          <hr />
          <div className="flex justify-between">
            <p>جمع کل</p>
            <p>
              {basketItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}{" "}
              تومان
            </p>
          </div>
          <div className="w-full h-fit flex flex-col gap-3">
            <Link href="/Basket" className="w-full">
              <FlipTextButton
                primaryText="مشاهده سبد خرید"
                secondaryText={<Bag size="32" color="#000" />}
              />
            </Link>

            <FlipTextButton
              primaryText="تسویه حساب"
              secondaryText={<Bag size="32" color="#000" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDrawer;
