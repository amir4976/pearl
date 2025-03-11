"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
function Login() {
  const adenifierRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("first");
    const adentifire = adenifierRef.current?.value;
    const password = PasswordRef.current?.value;
    const data = {
      adentifire,
      password
    };
    console.log(data);
    const fatchHandler = await fetch(
      "/api/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(fatchHandler);
    if (fatchHandler.status === 200) {
      console.log('first')
      router.push("/myAccount");
    }else if(fatchHandler.status ===400){
      Swal.fire({
        title: "خطا",
        text: "نام کاربری یا رمز عبور اشتباه است",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }else {
      Swal.fire({
        title: "خطا",
        text: "خطایی رخ داده است",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };
  return (
    <>
      <p className="text-2xl font-DB mb-2">ورود </p>
      <form
        action=""
        onSubmit={(e) => handleLogin(e)}
        className="flex flex-col gap-5 "
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="auth">
            {" "}
            نام کاربری یا آدرس ایمیل <span className="text-red-500">*</span>
          </label>
          <input
            id="auth"
            className="p-2 rounded-full w-full bg-transparent border border-gray-600"
            type="text"
            ref={adenifierRef}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="auth">
            {" "}
            رمز ورود<span className="text-red-500">*</span>
          </label>
          <input
            id="auth"
            className="p-2 rounded-full w-full bg-transparent border border-gray-600"
            type="text"
            ref={PasswordRef}
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="w-full  text-black bg-MainColor p-2 rounded-md"
          >
            ورود
          </button>
          <div className="w-full flex justify-between mt-5">
            <div className="flex items-center gap-2">
              {" "}
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm  font-DM">
                مرا به خواطر بسپار
              </label>
            </div>

            <div className="">
              <Link href={"/Regeister"} className="text-MainColor text-sm">
                رمز عبور را فراموش کرده اید؟
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
