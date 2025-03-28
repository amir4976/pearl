import product from "@/models/product";
import { Edit, Trash } from "iconsax-react";
import React from "react";

type Props = {
  products: any[];
};

function PanelProducts({ products }: Props) {
   


  return (
    <div className="bg-PannelBg p-3 rounded-md  min-h-96">
      <div className="flex justify-between items-center  border-b border-b-gray-500 pb-3  ">
        <div className="flex flex-col ">
          {" "}
          <p className="font-DB  ">لیست محصولات</p>
          <p className="text-sm text-gray-500">
            برای مدیریت بهتر لطفا به صفحه محصولات مراجعه کنید
          </p>
        </div>
        <button className="p-2 bg-MainColor rounded-lg text-black">
          بیشتر{" "}
        </button>
      </div>
      <div className="w-full mt-3">
        <div className="table w-full">
          <table className=" table table-auto  w-full text-center">
            <thead className=" py-10">
              <tr className="bg-black text-gray-200 ">
                <th>عنوان</th>
                <th>قیمت </th>
                <th>مدیریت</th>
              </tr>
            </thead>
            <tbody>
              {
                product.length === 0 && (
                  <tr>
                    <td colSpan={3}>محصولی برای نمایش وجود ندارد</td>
                  </tr>)
              }
              {products.splice(0,5).map((product) => (
                <ProductItem
                  title={product.name}
                  price={product.price}
                  id={product._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ProductItem({
  title,
  price,
  id,
}: {
  title: string;
  price: number;
  id: number;
}) {
  return (
    <tr className="my-2 odd:bg-[#32364a] even:bg-PannelBg rounded-md">
      <td className="font-DB">{title}</td>
      <td className="text-DM">{price.toLocaleString("fa-ir")}</td>
      <td>
        <button className="bg-MainColor text-black py-2 px-3 my-2 rounded-md">
          <Edit size={15} />
        </button>
        <button className="bg-red-500 text-black py-2 px-3 my-2 rounded-md">
          <Trash size={15} />
        </button>
      </td>
    </tr>
  );
}

export default PanelProducts;
