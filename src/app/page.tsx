
import React from "react";
import Landing from "../components/Templates/index/Landing/Landing";
import CallactionSwiper from "@/components/Templates/index/CallectionSwiper/CallactionSwiper";
import AboutUs from "@/components/Templates/index/aboutUs/AboutUs";
import LastestProduct from "@/components/Templates/index/LastestProducts/LastestProduct";
import InfiniteMarquee from "@/components/Templates/index/marquee/Marquee";
import ScrollRevealText from "@/components/Modules/index/WhatWeDo/WhatWeDo";


export default function Home() {
 

  return (
    <>
        <div className="bg-before">
          <Landing />

          <InfiniteMarquee />

          <CallactionSwiper />
          <AboutUs />

          <ScrollRevealText
            text={
              "we crafting unique pieces of jewelry made of the higest standard materials and diamond"
            }
          />

          <LastestProduct />
        </div>
  
    </>
  );
}
