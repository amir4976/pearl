"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SearchNormal } from "iconsax-react";
import style from "./ProductCard.module.css";
import InfoModal from "../../index/InfoModal/InfoModal";
import Link from "next/link";
import ProductOrder from "../ProductOrder/ProductOrder";

type Props = {
  product: {
    _id: string;
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
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* ❌ حذف <Link> از اطراف کل کارت — چون جلوگیری از ناوبری داخلی در دکمه‌ها ممکن نبود */}
      <div
        className={`w-full h-96 bg-black relative overflow-hidden shadow-lg ${style.card}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ✅ فقط لینک دادن به بخش مورد نظر (مثلاً فقط عکس) */}
        <Link href={`/Store/${product._id}`} className="block">
          <Image
            src={product.image || "/default-image.jpg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-80 object-cover"
          />

        {product.offer > 0 && (
          <div className="absolute top-2 left-2 bg-black/30 rounded-full px-2 text-white">
            % {product.offer}
          </div>
        )}
        </Link>

        <div
          className={`bg-black p-3 absolute w-full transition-all ${
            isHovered ? style.FadeOut : style.FadeIn
          }`}
        >
          <p className="text-md font-DM">{product.name}</p>

          <div className="flex gap-1 items-center">
            {product.offer > 0 ? (
              <>
                <p className="font-DM line-through text-gray-600">
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
            ) : (
              <p className="font-DB text-MainColor">
                {product.price.toLocaleString()} تومان
              </p>
            )}
          </div>

          {/* ✅ حذف onClick با stopPropagation و استفاده از دکمه‌های معمولی */}
          <div className="flex mt-5 gap-3">
            <ProductOrder
              name={product.name}
              price={product.price}
              id={product._id}
              image={product.image}
              isCounter={false}
            />

            {/* ✅ دکمه‌ی نمایش مودال به جای دکمه‌ای داخل <Link> */}
            <button
              type="button"
              onClick={() => setIsShowModal(true)}
              role="button" // دسترسی‌پذیری بهتر
            >
              <SearchNormal size="24" color="#FF8A65" />
            </button>
          </div>
        </div>
      </div>

      {isShowModal && (
        <InfoModal setIsShowModal={setIsShowModal} product={product} />
      )}
    </>
  );
};

export default ProductCard;
