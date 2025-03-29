"use client";

import { ArrowCircleDown, ArrowDown } from "iconsax-react";
import Image from "next/image";
import React, { useEffect } from "react";
import style from "./Circle.module.css"; // Assuming you have some existing CSS module styles

function RotationCircle() {
  const [scroll, setScroll] = React.useState(true);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(false); // Fade out
      } else {
        setScroll(true); // Fade in
      }
    };

    // Add scroll event listener
    document.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={` ${style.animateIn} ${
          !scroll ? style.fadeOut : ""
        } flex justify-center items-center `}
      >
        <Image
          className="animate-[spin_10s_linear_infinite]"
          src={"/svgviewer-output (2).svg"}
          alt="Rotating Circle"
          width={200}
          height={200}
        />
        <div className=" absolute">
          <ArrowDown size="32" color="#FF8A65" />
        </div>
      </div>
    </>
  );
}

export default RotationCircle;
