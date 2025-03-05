import React from "react";

function Menu() {
  const styles = {
    Active: "bg-gray-500/25",
  };

  return (
    <div className="w-full border-l border-gray-700 h-fit p-7 font-DD  max-md:border-l-0 ">
      <div className="border-b p-3 border-gray-700">حساب کاربری من</div>
      <div className="p-4">
        <ul className="flex flex-col gap-1 [&>li]:py-2 [&>li:hover]:bg-gray-500/25 transition-all [&>li]:text-white [&>li]:rounded-md [&>li]:px-3 [&>li]:cursor-pointer">
          <li className="">پیشخوان </li>
          <li className={styles.Active}>سفارش‌ها</li>
          <li className="">آدرس</li>
          <li className="">جزئیات حساب</li>
          <li className="">علاقه مندی</li>
          <li className=" hover:bg-red-500/25 ">خروج</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
