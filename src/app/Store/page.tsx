"use client";

import Breadcrumbs from "@/components/Modules/global/BradCramp/BradCramp";
import React, { useEffect } from "react";
import { useState } from "react";
import PriceFilter from "@/components/Modules/store/filters/PriceFilter";
import ProductCard from "@/components/Modules/store/ProductCard/ProductCard";
import StatusFilter from "@/components/Modules/store/filters/StatusFilter";
import BrandFilter from "@/components/Modules/store/filters/BrandFilter";
import ColorFilter from "@/components/Modules/store/filters/ColorFilter";
import FilterDrawer from "@/components/Modules/store/FilterDrawer/FilterDrawer";

import {getAllUsers} from "@/Redux/slices/ProductSlice";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";



function Page() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers('/api/Products'))
  },[dispatch]);

  const  AllProducts = useSelector((state:RootState)=>state.product.products)
  const isLoading = useSelector((state:RootState)=>state.product.loading)

  console.log(AllProducts)
  const [filteredProducts, setFilteredProducts] = useState(AllProducts);
  const [isShowFilterDrawer, setIsShowFilterDrawer] = useState(false);

  const handleFilter = (min, max) => {
    // const filtered = products.filter((p) => p.price >= min && p.price <= max);
    // setFilteredProducts(filtered);
  };

  return (
    <div>
      <Breadcrumbs />
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="max-md:flex hidden">
          <button
            className="px-2 py-1 border-b mx-5"
            onClick={() => setIsShowFilterDrawer(true)}
          >
            فیلتر ها
          </button>
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
            {
              AllProducts.map((product,index) => (
                <ProductCard key={index} product={product}  />
              ))
            }
            {
              isLoading && <div>Loading...</div>
            }
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </div>
      </div>
      {isShowFilterDrawer && (
        <FilterDrawer setIsShowFilterDrawer={setIsShowFilterDrawer} />
      )}
    </div>
  );
}

export default Page;
