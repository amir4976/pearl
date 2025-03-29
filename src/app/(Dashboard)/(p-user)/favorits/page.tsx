"use client";

import AccountLayout from "@/components/layout/AccountLayout";
import ProductCard from "@/components/Modules/store/ProductCard/ProductCard";
import { CloseCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Define the type for product data
type ProductType = {
  _id: string; // Unique ID of the favorite item
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
    shortDescription: string;
    category: [string];
    brand: string;
    color: [{ name: string; hexCode: string }];
    tags: [{ name: string; type: string }];
    status: string;
    offer: number;
  };
};

function Page() {
  // State to store favorite products
  const [products, setProducts] = useState<ProductType[]>([]);

  // Fetch favorite products from the API
  const fetchData = async () => {
    try {
      const res = await fetch("/api/favorites");
      if (res.status === 200) {
        const data: ProductType[] = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Handle removing a product from favorites
  const DeleteFromFavoriteHandler = async (id: string) => {
    console.log(id);
    const DeleteData = await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
    });

    if (DeleteData.status === 200) {
      fetchData(); // Refresh the product list after deletion
      Swal.fire({
        icon: "success",
        title: "Successfully removed!",
        background: "#121212",
        color: "#fff",
      });
    }
  };

  return (
    <AccountLayout>
      <div className="grid grid-cols-3 gap-4 mt-20 max-md:p-5">
        {/* Show message if there are no favorite products */}
        {!products.length && (
          <p className="text-center w-full col-span-3">
            The favorites list is empty
          </p>
        )}

        {/* Display favorite products */}
        {products.map((product, index) => (
          <div className="col-span-1 flex flex-col relative" key={index}>
            {/* Delete button */}
            <div
              className="absolute right-2 top-2 text-black z-10 flex gap-1 items-center hover:bg-red-500 hover:text-white p-1 rounded-xl"
              onClick={() => DeleteFromFavoriteHandler(product._id)}
            >
              <CloseCircle size={20} /> Remove
            </div>
            {/* Render product card */}
            <ProductCard product={product.product} />
          </div>
        ))}
      </div>
    </AccountLayout>
  );
}




export default Page;
