"use client";
import { useRouter } from 'next/navigation'
import React from "react";
import { useRef } from "react";
import Swal from "sweetalert2";

function RegisterFrom() {
  const router= useRouter()
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleRegistration =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // جلوگیری از ریفرش شدن صفحه

    const userData = {
      userName: userNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    const fetchData = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/Signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    
    if(fetchData.status===201){
      router.push('/myAccount')
    }else{
     Swal.fire({
      title: 'خطا',
      text: 'خطایی رخ داده است',
      icon: 'error',
      confirmButtonText: 'باشه'
     })
    }
  }


  return (
    <>
      <p className="text-2xl font-DB mb-2">ثبت نام</p>
      <form
        action=""
        onSubmit={(event) => handleRegistration(event)}
        className="flex flex-col gap-5 "
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="userName">
            {" "}
            نام کاربری <span className="text-red-500">*</span>
          </label>
          <input
            ref={userNameRef}
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
            ref={emailRef}
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
            ref={passwordRef}
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
          <button
            type="submit"
            className="w-full  text-black bg-MainColor p-2 rounded-md"
          >
            ورود
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterFrom;
