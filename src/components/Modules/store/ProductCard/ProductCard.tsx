"use client";
import Image from "next/image";
import React from "react";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
import { SearchNormal, ShoppingCart } from "iconsax-react";
import style from "./ProductCard.module.css";
import InfoModal from "../../index/InfoModal/InfoModal";
type Props = {
  product: {
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    color: string;
    status: string;
  }
};

function ProductCard({product}: Props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isShowModal, setIsShowModal] = React.useState(false);
  console.log(product)
  return (
    <>
      <div
        className={`w-full h-96 col-span-1 bg-black relative overflow-hidden  shadow-black shadow-lg bg-inherit ${style.card} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={product.image}
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
            <p className="text-md font-DM"> {product.name}</p>
            <p className="font-DB text-MainColor">{product.price.toLocaleString()} تومان</p>
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
      {isShowModal && <InfoModal setIsShowModal={setIsShowModal} product={product} />}
    </>
  );
}

export default ProductCard;
