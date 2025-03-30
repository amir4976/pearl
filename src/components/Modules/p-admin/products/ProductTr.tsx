"use client";
import { Edit,  Trash } from "iconsax-react";
import React from "react";
import Link from "next/link";
interface productProps {
  _id: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  price: number;
  stock: number;
  category: string[];
  image: string;
  brand: string[];
  color: string[];
  tags: string[];
  offer: number;
  createdAt: string;
  updatedAt: string;
  rate: number;
  lable:string;
}
function ProductTr({ product }: { product: string }) {
  const parsedProduct: productProps = JSON.parse(product);

  return (
    <>
      <tr className=" font-DM odd:hover:bg-[#2A2D3E] even:hover:bg-[#292B36]  ">
        <td className="p-3 border border-gray-600">{parsedProduct.name}</td>
        <td className="p-3 border border-gray-600"><span className="text-MainColor font-DB">{parsedProduct.rate} </span>/ 5</td>
        <td className="p-3 border border-gray-600"><span className="text-MainColor">{parsedProduct.stock}</span> عدد</td>
        <td className="p-3 border border-gray-600">{new Date(parsedProduct.createdAt).toLocaleString("fa-IR")}</td>
        <td className="p-3 border border-gray-600"><span className="text-MainColor font-DB">{(parsedProduct.price).toLocaleString('fa-ir')}</span> تومان</td>
        <td className="p-3 border border-gray-600 flex justify-evenly">
            <button className="p-2 bg-red-500 rounded-xl">
                <Trash size={20}/>
            </button>
            <Link href={`/PAdmin/Products/${parsedProduct.name}`} className="p-2 bg-MainColor text-black rounded-xl" >
                <Edit size={20}/>
            </Link>
        </td>
      </tr>
    </>
  );
}

export default ProductTr;
