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

    // <div className="relative w-full p-5">

    //   {/* Swiper */}
    //   <Swiper
    //     modules={[Navigation, Pagination]}
    //     spaceBetween={20}
    //     slidesPerView={4}
    //     breakpoints={{
    //       300: { slidesPerView: 1 },
    //       500: { slidesPerView: 2 },
    //       800: { slidesPerView: 3 },
    //       1000: { slidesPerView: 4 },
    //     }}
    //     loop={true}
    //     navigation={true} // ✅ مقداردهی صحیح بدون نیاز به `as any`
    //     pagination={{ clickable: true, el: ".custom-pagination" }}
    //     onSwiper={(swiper) => {
    //       swiperRef.current = swiper;

    //       setTimeout(() => {
    //         if (!prevRef.current || !nextRef.current) return;

    //         const navigationParams = swiper.params.navigation;
    //         if (navigationParams && typeof navigationParams === "object") {
    //           navigationParams.prevEl = prevRef.current;
    //           navigationParams.nextEl = nextRef.current;
    //         }

    //         if (swiper.navigation) {
    //           swiper.navigation.init();
    //           swiper.navigation.update();
    //         }
    //       });
    //     }}
    //   >
    //     {[...Array(6)].map((_, index) => (
    //       <SwiperSlide key={index}>
    //         <CollactionCard />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    //   {/* Pagination سفارشی */}
    //   <div className="custom-pagination flex justify-center mt-4"></div>

    //   {/* استایل‌های سفارشی */}

    // </div>
  );
};

export default CollSwiper;
