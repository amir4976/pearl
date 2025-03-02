import AvatarGroup4 from "@/components/Modules/global/AvatarGroupe/AvatarGroupe";
import Btn from "@/components/Modules/global/btn/Btn";
import RotationCircle from "@/components/Modules/index/RotationCircle/RotationCircle";
import Image from "next/image";
import React from "react";

function Landing() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex  mt-36 justify-center">
        <div className="max-w-6xl  flex gap-10  max-md:flex-col max-xl:px-5" >
          <div className="w-4/12  max-md:w-full flex justify-center ">
            <div className=" flex flex-col gap-5">
              <p className="text-2xl font-DM py-3">
                ما جواهرات را بر اساس زندگی شما میسازیم
              </p>
              <p className="text-4xl font-DB text-MainColor">
                قصه خودتان را برای ما <br /> تعریف کنید <br /> تا ما آن را به جواهر تبدیل
                کنیم.
              </p>
              <p className="text-md font-DM">
                ما برآنیم که با ارائه بهترین محصولات به مشتریان گرامی خود، پاسخ
                اعتماد شما بزرگواران را به بهترین صورت داده باشیم. و از شما
                عالیجنابان و مشتریان گرامی که در واقع مالکان حقیقی این برند
                هستید.
              </p>
              <span className="w-full text-left font-DM">نظرات مشتریان ما</span>

              <Btn title="بیشتر بدانید" link="/about" />
              <div className="">
                <AvatarGroup4 />
              </div>
            </div>
          </div>
          <div className="w-7/12  max-md:hidden ">
            <div className="w-full">
              <Image
                src={"/image/Group-46-1024x836.webp"}
                alt="landing"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>

      <RotationCircle />
    </div>
  );
}

export default Landing;
