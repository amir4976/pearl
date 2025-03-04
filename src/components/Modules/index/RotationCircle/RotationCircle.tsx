"use client";

import { ArrowCircleDown } from "iconsax-react";
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
        className={`absolute -bottom-20 ${style.animateIn} ${
          !scroll ? style.fadeOut : ""
        }`}
      >
        <Image
          className="animate-[spin_10s_linear_infinite]"
          src={"/svgviewer-output (2).svg"}
          alt="Rotating Circle"
          width={200}
          height={200}
        />
      </div>
    </>
  );
}

export default RotationCircle;
