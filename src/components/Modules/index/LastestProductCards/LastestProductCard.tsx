"use client";
import Image from "next/image";
import React from "react";
import style from "./LastestProductCard.module.css";
import { Bag, Eye } from "iconsax-react";
import InfoModal from "../InfoModal/InfoModal";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
type Props = {};

function LastestProductCard({ cover, title, offer, price }: Props) {
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
            src={"/image/tiffany-tt1-ring-67795121_1010332_ED-1.webp"}
            className="w-full h-full  rounded-t-full "
            alt={title}
            width={500}
            height={500}
          />
          <div
            className={` text-sm  p-3  bg-black w-full h-fit absolute flex flex-col gap-2 left-0 -bottom-[60px] ${
              isHover ? style.FadeOut : style.FadeIn
            }  `}
          >
            <span className=" font-DM">انگشتر مدل 2</span>
            <p className="font-DBOLD mb-5 text-MainColor">270,000 تومان</p>
            <div className="w-full  flex gap-3">
              <FlipTextButton
                primaryText="افزودن به سبد خرید"
                secondaryText={<Bag size="32" color="#000" />}
              />
              <button className="p-2 " onClick={() => setIsShowModal(true)}>
                <Eye size="22" color="#FF8A65" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && <InfoModal setIsShowModal={setIsShowModal} />}
    </>
  );
}

export default LastestProductCard;
