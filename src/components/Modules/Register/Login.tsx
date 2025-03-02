import React from "react";
import Link from "next/link";

function Login() {
  return (
    <>
      <p className="text-2xl font-DB mb-2">ورود </p>
      <form action="" className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-3">
          <label htmlFor="auth">
            {" "}
            نام کاربری یا آدرس ایمیل <span className="text-red-500">*</span>
          </label>
          <input
            id="auth"
            className="p-2 rounded-full w-full bg-transparent border border-gray-600"
            type="text"
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
          />
        </div>

        <div className="">
          <button className="w-full  text-black bg-MainColor p-2 rounded-md">
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
