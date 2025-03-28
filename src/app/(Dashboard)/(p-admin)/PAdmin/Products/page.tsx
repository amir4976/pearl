import ProductTr from "@/components/Modules/p-admin/products/ProductTr";
import getAllProducts from "@/components/serverActions/getAllProducts.action";
import React from "react";

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
}
async function page() {
  const AllProducts = await getAllProducts();
  return (
    <div className="  shadow-lg rounded-lg p-6">
      <table className="w-full border-collapse border border-gray-500 text-right">
        <thead className="bg-MainColor text-black">
          <tr>
            <th className="p-3 border border-gray-600">نام</th>
            <th className="p-3 border border-gray-600">امتیاز</th>
            <th className="p-3 border border-gray-600">موجودی</th>
            <th className="p-3 border border-gray-600">تاریخ</th>
            <th className="p-3 border border-gray-600">قیمت</th>
            <th className="p-3 border border-gray-600">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {AllProducts.map((product:productProps, index:number) => (
            <ProductTr key={index} product={JSON.stringify(product)}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
