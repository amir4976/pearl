"use client";
import React from "react";
import { Star1 } from "iconsax-react";
import { useState } from "react";

function CommentsRate({rate ,setRate}:{rate:number,setRate:React.Dispatch<React.SetStateAction<number>>}) {
  const maxStars = 5;
  
  const [hoverStars, setHoverStars] = useState(0);

  return (
    <div className="flex space-x-1 items-center">
      {Array(maxStars)
        .fill(0)
        .map((star, index) => {
          const isFilled = index < (hoverStars || rate);

          return (
            <>
              <Star1
                key={index}
                size={20}
                onMouseEnter={() => setHoverStars(index + 1)}
                onMouseLeave={() => setHoverStars(0)}
                onClick={() => {
                 setRate(index + 1);
                }}
                color={isFilled ? "#FFD700" : "#ccc"}
                variant={isFilled ? "Bold" : "Outline"}
              />
            </>
          );
        })}

      <div className="text-gray-500 text-sm">امتیاز : {rate}</div>
    </div>
  );
}

export default CommentsRate;
