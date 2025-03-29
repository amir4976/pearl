"use client";
import Image from "next/image";
import React from "react";
import style from "./LastestProductCard.module.css";
import { Eye } from "iconsax-react";
import InfoModal from "../InfoModal/InfoModal";

import ProductOrder from "../../store/ProductOrder/ProductOrder";

function LastestProductCard({ product }: { product: string }) {
  const parsedProduct = JSON.parse(product);

  const [isHover, setIsHover] = React.useState(false);
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);
  return (
    <>
      <div className={`${style.card} p-3 `}>
        <div
          className="w-full md:h-[400px] h-[300px]  overflow-hidden  relative  "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Image
            src={parsedProduct.image}
            className="w-full h-full  object-cover"
            alt={parsedProduct.name}
            width={500}
            height={500}
          />
          <div
            className={` text-sm  p-3  bg-black w-full h-fit absolute flex flex-col gap-2 left-0 -bottom-[60px] ${
              isHover ? style.FadeOut : style.FadeIn
            }  `}
          >
            <span className=" font-DM">{parsedProduct.name}</span>
            <p className="font-DBOLD mb-5 text-MainColor">
              {parsedProduct.price.toLocaleString()} تومان
            </p>
            <div className="w-full  flex gap-3">
              <ProductOrder
                name={parsedProduct.name}
                id={parsedProduct._id}
                price={parsedProduct.price}
                image={parsedProduct.image}
              />
              <button className="p-2 " onClick={() => setIsShowModal(true)}>
                <Eye size="22" color="#FF8A65" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && (
        <InfoModal setIsShowModal={setIsShowModal} product={parsedProduct} />
      )}
    </>
  );
}

export default LastestProductCard;
