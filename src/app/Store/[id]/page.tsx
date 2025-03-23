import FlipTextButton from "@/components/Modules/global/AnimateBtn/AnimateBtn";
import ProductOrder from "@/components/Modules/store/ProductOrder/ProductOrder";
import InfoBar from "@/components/Templates/store/InfoBar";
import Image from "next/image";
import React from "react";

async function getData(id: { id: string }) {
  try {
    const res = await fetch(`http://localhost:3000/api/Products/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data = await getData(id);
  if (!data) {
    return <p>خطایی در دریافت اطلاعات رخ داده است</p>;
  }

  const { datas } = data;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 max-md:p-5">
        <div className="cover col-span-1">
          <div className="w-full p-3">
            <Image
              src={datas.image}
              alt={datas.name}
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <p className="text-md font-DM">{datas.name}</p>
          <p className="text-xl font-DB text-MainColor">{datas.price} تومان</p>
          <ul className="text-gray-400 font-DM">
            {Array(5)
              .fill("رنگ ثابت")
              .map((item, index) => (
                <li key={index}>
                  {">"} {item}
                </li>
              ))}
          </ul>
          <p>{datas.stock}✔ عدد در انبار</p>
          <div className="w-1/3 max-md:w-full">
            <ProductOrder
              name={datas.name}
              price={datas.price}
              id={datas._id}
              image={datas.image}
            />
          </div>
          <div className="">❤ افزودن به علاقه‌مندی‌ها</div>
          <hr />
          <div className="flex gap-1">
            <p>دسته:</p>
            {datas.category.map((cat: string, index: number) => (
              <p className="text-gray-400" key={index}>
                {cat},
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <p>برچسب‌ها:</p>
            {datas.tags.map((tag: { name: string }, index: number) => (
              <p className="text-gray-400" key={index}>
                {tag.name},
              </p>
            ))}
          </div>
        </div>
      </div>

      <InfoBar id={id}/>
    </>
  );
}

export default Page;
