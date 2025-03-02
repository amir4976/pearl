import React from "react";
import Link from "next/link";

function RegisterFrom() {
  return (
    <>
      <p className="text-2xl font-DB mb-2">ثبت نام</p>
      <form action="" className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-3">
          <label htmlFor="userName">
            {" "}
            نام کاربری <span className="text-red-500">*</span>
          </label>
          <input
            id="userName"    
            className="p-2 rounded-full w-full bg-transparent border border-gray-600"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="Email">
            {" "}
            ادرس ایمیل<span className="text-red-500">*</span>
          </label>
          <input
            id="Email"
            className="p-2 rounded-full w-full bg-transparent border border-gray-600"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="auth">
            {" "}
            گذرواژه<span className="text-red-500">*</span>
          </label>
          <input
            id="auth"
            className="p-2 rounded-full w-full bg-transparent border border-gray-600"
            type="text"
          />
        </div>
        <p className="text-center text-sm font-DM text-gray-500">
          اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از
          تجربه شما در این وبسایت، و برای اهداف دیگری که در{" "}
          <span className="text-white underline"> سیاست حفظ حریم خصوصی </span>
          توضیح داده شده است
        </p>
        <div className="">
          <button className="w-full  text-black bg-MainColor p-2 rounded-md">
            ورود
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterFrom;
