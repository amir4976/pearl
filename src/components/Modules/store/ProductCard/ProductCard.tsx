"use client";
import Image from "next/image";
import React from "react";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
import { SearchNormal, ShoppingCart } from "iconsax-react";
import style from "./ProductCard.module.css";
import InfoModal from "../../index/InfoModal/InfoModal";
type Props = {};

function ProductCard({}: Props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isShowModal, setIsShowModal] = React.useState(false);
  return (
    <>
      <div
        className={`w-full h-96 col-span-1 bg-black relative overflow-hidden  shadow-black shadow-lg bg-inherit ${style.card} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/image/tiffany-ttrue-wide-ring-63962465_1001393_ED_M-1.webp"
          alt="product"
          width={600}
          height={600}
          className="w-full h-80 object-cover"
        />

        <div
          className={`bg-black p-3  h-fit w-full  absolute  ${
            !isHovered ? style.FadeIn : style.FadeOut
          }`}
        >
          <div className=" ">
            <p className="text-md font-DM"> انگشتر مدل شماره 3</p>
            <p className="font-DB text-MainColor">270,000 تومان</p>
          </div>
          <div className="bg-black">
            <div className="flex gap-5 px-1 mt-5 ">
              <FlipTextButton
                primaryText={"افزودن به سبد خرید"}
                secondaryText={<ShoppingCart size="24" color="#000" />}
              />
              <button onClick={() => setIsShowModal(true)}>
                <SearchNormal size="24" color="#FF8A65" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && <InfoModal setIsShowModal={setIsShowModal} />}
    </>
  );
}

export default ProductCard;
