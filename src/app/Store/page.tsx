"use client";

import Breadcrumbs from "@/components/Modules/global/BradCramp/BradCramp";
import React from "react";
import { useState } from "react";
import PriceFilter from "@/components/Modules/store/filters/PriceFilter";
import ProductCard from "@/components/Modules/store/ProductCard/ProductCard";
import StatusFilter from "@/components/Modules/store/filters/StatusFilter";
import BrandFilter from "@/components/Modules/store/filters/BrandFilter";
import ColorFilter from "@/components/Modules/store/filters/ColorFilter";
import FilterDrawer from "@/components/Modules/store/FilterDrawer/FilterDrawer";

const products = [
  { id: 1, name: "محصول ۱", price: 300000 },
  { id: 2, name: "محصول ۲", price: 450000 },
  { id: 3, name: "محصول ۳", price: 600000 },
  { id: 4, name: "محصول ۴", price: 750000 },
];

function Page() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isShowFilterDrawer, setIsShowFilterDrawer] = useState(false);
  const product = [
    { id: 1, name: "انگشتر نقره مردانه", price: 1200000, stock: 5 },
    { id: 2, name: "انگشتر طلا زنانه", price: 5400000, stock: 3 },
    { id: 3, name: "انگشتر عقیق اصل", price: 950000, stock: 8 },
    { id: 4, name: "انگشتر فیروزه زنانه", price: 1700000, stock: 6 },
    { id: 5, name: "انگشتر استیل اسپرت", price: 450000, stock: 12 },
    { id: 6, name: "انگشتر یاقوت سلطنتی", price: 3200000, stock: 4 },
  ];
  const handleFilter = (min, max) => {
    const filtered = products.filter((p) => p.price >= min && p.price <= max);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Breadcrumbs />
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="max-md:flex hidden">
          <button className="px-2 py-1 border-b mx-5" onClick={()=>setIsShowFilterDrawer(true)}>فیلتر ها</button>
        </div>
        <div className="col-span-1 max-md:hidden flex flex-col gap-5">
          {/* filter base on status */}
          <StatusFilter />

          {/* filter base on brand */}
          <BrandFilter />

          {/* filter base on color */}

          <ColorFilter />

          {/* filter base on price */}
          <div className="w-full bg-black  rounded-md shadow-black shadow-lg bg-inherit ">
            <PriceFilter min={200000} max={1000000} onFilter={handleFilter} />
          </div>
        </div>

        <div className="col-span-1  p-5 md:col-span-3 ">
          <div className="sort flex justify-between items-center py-5 bg-[#1a1a1a]  rounded-lg">
            <div className="text-gray-300">خانه / فروشگاه</div>
            <div className="relative">
              <select className="appearance-none bg-[#1a1a1a] text-MainColor border-b  border-b-MainColor   px-4 py-2 pr-8 focus:outline-none ">
                <option value="-1">مرتب سازی پیش‌فرض</option>
                <option value="popularity">مرتب سازی بر اساس محبوبیت</option>
                <option value="rating">مرتب سازی بر اساس امتیاز</option>
                <option value="newest">مرتب سازی بر اساس جدیدترین</option>
                <option value="cheap">مرتب سازی بر اساس ارزان‌ترین</option>
                <option value="expensive">مرتب سازی بر اساس گران‌ترین</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-MainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      {
        isShowFilterDrawer && (<FilterDrawer setIsShowFilterDrawer={setIsShowFilterDrawer} />)
      }
    </div>


  );
}

export default Page;
