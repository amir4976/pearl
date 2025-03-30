"use client";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

function EditProduct(product: ProductType) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 max-md:p-5">
        <div className="cover col-span-1">
          <div className="w-full p-3">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <input
            type="text"
            defaultValue={product.name}
            className="w-1/2 p-2 rounded-full border  border-MainColor bg-transparent outline-none"
          />
          <div className="flex items-center gap-3 ">
            <input
              type="text"
              defaultValue={product.price}
              className="w-1/2 p-1 rounded-full border  border-MainColor bg-transparent outline-none"
            />
            <p>تومان</p>
          </div>
          <ul className="text-gray-400 font-DM">
                {Array(5)
                .fill("رنگ ثابت")
                .map((item, index) => (
                    <li key={index}>
                    {">"} {item}
                    </li>
                ))}
          </ul>
          {/* <p>{datas.stock}✔ عدد در انبار</p> */}
          <div className="w-1/3 max-md:w-full"></div>
          <hr />
          <div className="flex gap-1">
            <p>دسته:</p>
            {/* {datas.category.map((cat: string, index: number) => (
            <p className="text-gray-400" key={index}>
              {cat},
            </p>
          ))} */}
          </div>
          <div className="flex gap-1">
            <p>برچسب‌ها:</p>
            {/* {datas.tags.map((tag: { name: string }, index: number) => (
            <p className="text-gray-400" key={index}>
              {tag.name},
            </p>
          ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
