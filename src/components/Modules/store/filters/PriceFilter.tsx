"use client";

import { useState } from "react";
import style from "./PriceFilter.module.css";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
import { Filter } from "iconsax-react";
interface PriceFilterProps {
  min: number;
  max: number;
  onFilter: (min: number, max: number) => void;
}
const PriceFilter =({ min, max, onFilter }: PriceFilterProps) => {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  return (
    <div className=" text-white p-5 rounded-lg max-w-sm ">
      <h2 className="text-sm font-DM  mb-4">فیلتر براساس قیمت</h2>

      <div className="relative mb-4">
        <div className="absolute top-1/2 w-full h-1  rounded transform -translate-y-1/2"></div>
        
        <input

          type="range"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
          className={`${style.tombs} absolute w-full appearance-none bg-transparent pointer-events-none`}
          style={{ zIndex: minPrice < max / 2 ? 1 : 0 }}
        />
        
        <input

          type="range"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
          className={`${style.tombs} absolute w-full appearance-none bg-transparent pointer-events-none`}

          style={{ zIndex: maxPrice > max / 2 ? 1 : 0 }}
        />

      </div>

      <p className="text-center text-sm mt-10">
        قیمت: <span className="font-bold">{minPrice.toLocaleString()} تومان</span> —  
        <span className="font-bold"> {maxPrice.toLocaleString()} تومان</span>
      </p>

      <div className=" mt-5" onClick={() => onFilter(minPrice, maxPrice)}>
        <FlipTextButton primaryText="فیلتر" secondaryText={<Filter size="24" color="#000"/>} />
      </div>
    </div>
  );
};

export default PriceFilter;
