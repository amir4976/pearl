import RotationCircle from "@/components/Modules/index/RotationCircle/RotationCircle";
import Image from "next/image";
import React from "react";

function Landing() {
  return (
    <>
      <div className="h-[600px] w-full grid md:grid-cols-2 grid-cols-1  max-md:h-fit items-center mt-16 ">
        <div className="col-span-1 flex items-end justify-center gap-5 relative ">
          <div className="w-[300px] h-[600px] rounded-full overflow-hidden flex  justify-center items-center">
            <Image className="absolute top-10 left-52" src={'/image/star.svg'} width={50} height={50} alt={'star'}/>
            <Image
              src="/cover/1155fa4fe9d110d98d4a118359ad4a20.jpg"
              alt="landing"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[200px] h-[350px] custom-rounded mb-10   overflow-hidden">
            <Image
              src="/cover/e08341166fca31bb54b8244b6c320938.jpg"
              alt="landing"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-5  items-center text-center  h-full mt-10">
            <div className="font-DM text-center text-lg">
              ما جواهرات را بر اساس زندگی شما میسازیم
            </div>
            <div className="font-Dorna text-center text-4xl text-MainColor flex flex-col">
              <span> قصه خودتان را برای ما تعریف کنید</span>
              <div className="flex mt-1 items-center ">
                <span>تا ما آن را به</span>
                <div className="w-44 mx-2 bg-MainColor h-12 rounded-full overflow-hidden hidden xl:block">
                  <Image
                    src={"/cover/Blue Nile round diamond engagement ring..jpeg"}
                    width={100}
                    height={100}
                    alt="ring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span> جواهر تبدیل کنیم</span>
              </div>
            </div>
            <div className="text-lg">
              ما برآنیم که با ارائه بهترین محصولات به مشتریان گرامی خود، پاسخ
              اعتماد شما بزرگواران را به بهترین صورت داده باشیم. و از شما
              عالیجنابان و مشتریان گرامی که در واقع مالکان حقیقی این برند هستید.
            </div>
            <div className="flex justify-between w-full  mt-10 max-md:hidden">
              <RotationCircle />
              <div className="border-r border-MainColor w-full text-right text-sm p-2 ">
                <p>
                  {" "}
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className="text-left px-3">مشتری</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
