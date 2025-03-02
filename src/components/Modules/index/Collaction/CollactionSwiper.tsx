"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import CollactionCard from "./CollactionCard";
import { Swiper as SwiperCore } from "swiper/types";

type Props = {};

const CollSwiper: React.FC<Props> = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;

      if (swiper.params.navigation && swiper.navigation) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  return (
    <div className="relative w-full p-5">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full  max-xl:left-0 max-md:hidden"
      >
        ❮
      </button>
      <button
        ref={nextRef} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full max-xl:right-0 max-md:hidden"
      >
        ❯
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          300: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          // Delay initialization to ensure refs are mounted
          setTimeout(() => {
            if (swiperRef.current && prevRef.current && nextRef.current) {
              const swiper = swiperRef.current;

              if (swiper.params.navigation && swiper.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }
          }, 10);
        }}
      >
        <SwiperSlide><CollactionCard /></SwiperSlide>
        <SwiperSlide><CollactionCard /></SwiperSlide>
        <SwiperSlide><CollactionCard /></SwiperSlide>
        <SwiperSlide><CollactionCard /></SwiperSlide>
        <SwiperSlide><CollactionCard /></SwiperSlide>
        <SwiperSlide><CollactionCard /></SwiperSlide>
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center mt-4"></div>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #ccc !important;
          width: 12px;
          height: 12px;
          margin: 0 5px;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #ff4500 !important;
        }
      `}</style>
    </div>
  );
};

export default CollSwiper;
