import React from "react";
import IndexLayout from "../components/layout/IndexLayout";
import Landing from "../components/Templates/index/Landing/Landing";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import CallactionSwiper from "@/components/Templates/index/CallectionSwiper/CallactionSwiper";
import AboutUs from "@/components/Templates/index/aboutUs/AboutUs";
import LastestProduct from "@/components/Templates/index/LastestProducts/LastestProduct";
export default function Home() {
  return (
    <>
      <div className="bg-before">
        <Landing />
        <CallactionSwiper />
        <AboutUs />
        <LastestProduct />
      </div>
    </>
  );
}
