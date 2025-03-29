"use client";

import AccountLayout from "@/components/layout/AccountLayout";
import ProductCard from "@/components/Modules/store/ProductCard/ProductCard";
import { CloseCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

type Props = {};

function Page({}: Props) {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("/api/favorites");
      if (res.status === 200) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DeleteFromFavoriteHandler = async (id: string) => {
    console.log(id);
    const DeleteData = await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
    });
    if (DeleteData.status === 200) {
        fetchData()
        Swal.fire({
            icon:"success",
            title:"با موفقیت حذف شد",
            background: "#121212",
            color: "#fff",
        })
    }
  };
  return (
    <AccountLayout>
      <div className="grid grid-cols-3 gap-4 mt-20 max-md:p-5">
    
        {
            !products.length && <p className="text-center w-full col-span-3">لیست علاقه مندی ها خالی است</p>
        }
        {products.map((product, index) => (
          <div className="col-span-1 flex flex-col relative" key={index}>
            <div
              className="absolute right-2 top-2 text-black z-10 flex gap-1 items-center hover:bg-red-500 hover:text-white p-1 rounded-xl"
              onClick={() => DeleteFromFavoriteHandler(product._id)}
            >
              {" "}
              <CloseCircle size={20} /> حذف{" "}
            </div>
            <ProductCard product={product.product} />
          </div>
        ))}
      </div>
    </AccountLayout>
  );
}

export default Page;
