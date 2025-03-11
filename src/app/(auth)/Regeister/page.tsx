"use client";

import BradCramp from "@/components/Modules/global/BradCramp/BradCramp";
import Login from "@/components/Modules/Register/Login";
import RegisterForm from "@/components/Modules/Register/Register";
import React from "react";

function Register() {
  const [Status, setStatuse] = React.useState("register");
  const setRegister = () => {
    setStatuse("register");
  };
  const setLogin = () => {
    setStatuse("login");
  };
  return (
    <>
      <BradCramp />
      <div className="w-full h-fit flex justify-center  md:px-24 max-md:px-10  py-20">
        <div className="flex w-full  h-fit max-md:flex-col max-md:gap-5 ">
          <div className="form w-1/2 h-fit max-md:w-full   md:px-16 max-md:py-16   max-md:border-b md:border-l border-gray-700 ">
            {Status === "register" ? <RegisterForm /> : <Login />}
          </div>
          <div className="Details w-1/2 max-md:w-full flex justify-center   text-center flex-col gap-5 h-fit  md:px-16 max-md:mt-20">
            <p className="text-2xl font-DB">ثبت نام</p>
            <p className="text-gray-400 text-sm">
              ثبت نام در این سایت به شما امکان می دهد به وضعیت و سابقه سفارش خود
              دسترسی داشته باشید. فقط کافی است فیلدهای زیر را پر کنید، و ما در
              کمترین زمان یک حساب کاربری جدید برای شما راه اندازی خواهیم کرد. ما
              فقط از شما اطلاعات لازم را برای سریعتر و آسان تر کردن فرآیند خرید
              می خواهیم.
            </p>
            <button
              className="w-fit mr-auto ml-auto bg-MainColor p-2 px-4 rounded-lg text-black font-DM"
              onClick={() =>
                  Status ==='register' ? setLogin() : setRegister()
              }
            >
              {Status == "register" ? "ورود" : "ثبت نام"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
