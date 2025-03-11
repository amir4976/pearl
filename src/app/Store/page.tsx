

'use client'

import Breadcrumbs from "@/components/Modules/global/BradCramp/BradCramp";
import React from "react";
import { useState } from "react";
import PriceFilter from "@/components/Modules/store/PriceFilter";

const products = [
  { id: 1, name: "محصول ۱", price: 300000 },
  { id: 2, name: "محصول ۲", price: 450000 },
  { id: 3, name: "محصول ۳", price: 600000 },
  { id: 4, name: "محصول ۴", price: 750000 },
];
function page() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (min, max) => {
    const filtered = products.filter((p) => p.price >= min && p.price <= max);
    setFilteredProducts(filtered);
  };
  return (
    <div>
      <Breadcrumbs />
      <div className="w-full h-fit grid grid-cols-4 gap-5">
        <div className="col-span-1 flex flex-col gap-5">
          {/* filter base on status */}
          <div className="w-full bg-black p-5 rounded-md shadow-black shadow-lg bg-inherit ">
            <div className="text-sm font-DD">فیلتر بر اساس وضعیت</div>
            <div className="flex gap-2 mt-5">
              <input type="checkbox" id="top-sale" />
              <label htmlFor="top-sale">فروش ویژه</label>
            </div>
            <div className="flex gap-2 mt-2">
              <input type="checkbox" id="is-Available" />
              <label htmlFor="is-Available" >موجود در انبار</label>
            </div>

          </div>

          {/* filter base on brand */}
          <div className="w-full bg-black p-5 rounded-md shadow-black shadow-lg bg-inherit ">
            <div className="text-sm font-DD">فیلتر بر اساس برند</div>
            <div className="flex gap-2 mt-5 flex-col">
              <div className="w-full flex justify-between hover:text-MainColor">
               <p>  دیور</p>
               <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
              </div>

              <div className="w-full flex justify-between   hover:text-MainColor">
               <p>  دیور</p>
               <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
              </div>
            </div>
          </div>

          {/* filter base on color */}
          <div className="w-full bg-black p-5 rounded-md shadow-black shadow-lg bg-inherit ">
            <div className="text-sm font-DD">فیلتر بر اساس برند</div>
            <div className="flex gap-3 mt-5 flex-col">
               
              <div className="w-full flex justify-between hover:text-MainColor ">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-600 bg-red-600"></div>
                  <p>تیتانیوم</p>
                </div>
               <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
              </div>

              <div className="w-full flex justify-between hover:text-MainColor text-xs">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-600 bg-yellow-500"></div>
                  <p>طلایی</p>
                </div>
               <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
              </div>

              
            </div>
          </div>

        {/* filter base on price */}
        <div className="w-full bg-black  rounded-md shadow-black shadow-lg bg-inherit ">
        <PriceFilter min={200000} max={1000000} onFilter={handleFilter} />
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3">
          
        </div>
      </div>
    </div>
  );
}

export default page;
