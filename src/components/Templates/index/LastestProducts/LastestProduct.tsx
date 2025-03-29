import getAllProducts from "@/components/serverActions/getAllProducts.action";
import React from "react";
import {ProductType} from "@/types/types";
import LastestProductCard from "@/components/Modules/index/LastestProductCards/LastestProductCard";

async function LastestProduct() {
  const products = await getAllProducts();
  const splitedProducts = products.slice(0, 5);
  
  return (
    <div className="w-full mt-40  ">
      <div className="text-center text-3xl font-DB">جدیدترین محصولات</div>

      <div className="grid md:grid-cols-4 grid-cols-2   items-center mt-10 ">
        {splitedProducts.map((product: ProductType) => (
          <div className="col-span-1" key={product._id}>
            <LastestProductCard product={JSON.stringify(product)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastestProduct;
