"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CollactionCard from "./CollactionCard";
import { collaction } from "@/utils/constances";

const CollSwiper: React.FC= () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          300: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
        }}
        loop={true}
        pagination={{ clickable: true, el: ".custom-pagination" }}
      >
        {collaction.map((coll, index) => (
          <SwiperSlide key={index}>
            <CollactionCard {...coll} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center mt-4"></div>
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #ccc !important;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #ff4500 !important;
        }
      `}</style>
    </>

  );
};

export default CollSwiper;
