"use client";
import Image from "next/image";
import React from "react";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
import { Bag, CloseCircle } from "iconsax-react";
import style from "./infoModal.module.css";

// Define the props structure for the InfoModal component
interface InfoModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>; // Function to toggle modal visibility
  product: {
    name: string;
    price: number;
    image: string;
    shortDescription: string;
    category: [string];
    brand: string;
    color: [{ name: string; hexCode: string }];
    tags: [{ name: string; type: string }];
    status: string;
    offer: number;
  };
}

// InfoModal component
const InfoModal: React.FC<InfoModalProps> = ({ setIsShowModal, product }) => {
  const [counter, setCounter] = React.useState<number>(1);
  const [selectedColor, setSelectedColor] =React.useState<string>();
  // Prevent counter from going below 1
  if (counter < 1) {
    setCounter(1);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex justify-center items-center max-md:items-start">
      <div
        className={`relative w-full max-w-[920px] bg-[#0F0F0F] flex max-md:flex-col overflow-hidden 
      max-h-[450px] max-md:max-h-screen max-md:h-screen max-md:overflow-y-auto ${style.fadeIn}`}
      >
        {/* Product Image Section */}
        <div className="min-w-[450px] max-md:min-w-full relative">
          <Image
            src={product.image}
            alt="product"
            width={600}
            height={600}
            className="w-full h-full max-md:h-[300px] object-cover"
          />
          <button className="w-full absolute left-0 bg-MainColor bottom-0 py-4 text-black">
            نمایش جزییات
          </button>
        </div>

        {/* Product Details Section */}
        <div className="text-white mt-5 p-3 px-5 w-full flex flex-col gap-3 overflow-y-auto max-md:flex-grow">
          {/* Product Name */}
          <div className="text-2xl font-DBOLD">{product.name}</div>

          {/* Product Price */}
          <div className="flex gap-2">
            {product.offer > 0 && (
              <>
                <p className="font-DM line-through  text-gray-600">
                  {product.price.toLocaleString()} تومان
                </p>
                <p className="font-DB text-MainColor">
                  {(
                    product.price -
                    (product.offer / 100) * product.price
                  ).toLocaleString()}{" "}
                  تومان
                </p>
              </>
            )}
            {/* if offer is 0 */}
            {product.offer === 0 && (
              <p className="font-DB text-MainColor">
                {product.price.toLocaleString()} تومان
              </p>
            )}
          </div>

          {/* Short Description */}
          <div className="text-sm text-gray-400">
            {product.shortDescription}
          </div>

          {/* Product Colors */}
          <div className="color flex items-center gap-3">
            <p>رنگ‌ها:</p>
            <div className="flex gap-3">
              {product.color.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color.name
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hexCode }}
                  onClick={() => setSelectedColor(color.name)}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector & Add to Cart Button */}
          <div className="flex gap-2">
            <div className="counter border border-gray-500 rounded-full flex">
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
            <FlipTextButton
              primaryText="افزودن به سبد خرید"
              secondaryText={<Bag size="32" color="#000" />}
            />
          </div>

          <hr className="border-gray-500" />

          {/* Product Categories */}
          <div className="flex gap-2">
            <p>دسته‌ها:</p>
            <div className="text-gray-400">
              {product.category.map((category: string, index: number) => (
                <span key={index}>{category},</span>
              ))}
            </div>
          </div>

          {/* Product Tags */}
          <div className="flex gap-2">
            <p>برچسب‌ها:</p>
            <div className="text-gray-400">
              {product.tags.map((tags, index) => (
                <span key={index}>{tags.name},</span>
              ))}
            </div>
          </div>

          {/* Share Button */}
          <button className="w-fit underline">اشتراک‌گذاری</button>
        </div>

        {/* Close Modal Button */}
        <div
          className="absolute top-5 left-5 text-white text-3xl cursor-pointer"
          onClick={() => setIsShowModal(false)}
        >
          <CloseCircle size="32" color="#FF8A65" />
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
