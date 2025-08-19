import React from "react";
import Landing from "../components/Templates/index/Landing/Landing";
import CallactionSwiper from "@/components/Templates/index/CallectionSwiper/CallactionSwiper";
import AboutUs from "@/components/Templates/index/aboutUs/AboutUs";
import LastestProduct from "@/components/Templates/index/LastestProducts/LastestProduct";
import InfiniteMarquee from "@/components/Templates/index/marquee/Marquee";
import ScrollRevealText from "@/components/Modules/index/WhatWeDo/WhatWeDo";
import CardsParallax from "@/components/Templates/index/CardsParallax/CardsParallax";
import Testimonial from "@/components/Templates/index/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <div className="bg-before">
        <Landing />

        <InfiniteMarquee />

        <CallactionSwiper />
        <div className="max-xl:hidden mt-10">
          <ScrollRevealText
            text={
              "we crafting unique pieces of jewelry made of the higest standard materials and diamond"
            }
          />
        </div>
        <AboutUs />
            <Testimonial/>

        <LastestProduct />
      </div>
    </>
  );
}
