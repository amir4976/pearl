import Image from "next/image";
import React from "react";
// import Btn from "@/components/Modules/global/btn/Btn";
import "./aboutUs.css";
function AboutUs() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-20">
        <div className="col-span-1">
          <div className="w-full h-full  flex items-center text-center justify-center flex-col ">
            <div className=" font-Dorna text-3xl text-MainColor">
              درباره مجموعه پایرل
            </div>
            <div className=" mt-5 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center ">
          <div className=" relative w-[450px] before-cover flex justify-center">
            <div className="relative h-[700px]  w-[400px] overflow-hidden rounded-full ">
              <Image
                src={"/cover/brooke-evans-qM23Rt6y_io-unsplash.jpg"}
                className="w-full h-full object-cover "
                width={1080}
                height={1080}
                alt={"about cover"}
              />
            </div>
            <div className="absolute left-0 top-0 h-[250px]   w-[100px] overflow-hidden rounded-t-full rounded-l-full max-md:hidden">
              <Image
                src={"/cover/brooke-cagle-kElEigko7PU-unsplash.jpg"}
                className="w-full h-full object-cover"
                width={400}
                height={400}
                alt={"about cover"}
              />
            </div>
            <div className="absolute -right-0 bottom-0 h-[250px]   w-[100px] overflow-hidden rounded-tr-full rounded-b-full max-md:hidden">
              <Image
                src={"/cover/camilla-carvalho-Y9dcQpOIMHQ-unsplash.jpg"}
                className="w-full h-full object-cover "
                width={400}
                height={400}
                alt={"about cover"}
              />
            </div>
            <div className="absolute  right-10  top-10 h-[70px]   w-[70px] overflow-hidden rounded-tr-full rounded-b-full max-md:hidden animate-bounce ">
              <Image
                src={"/image/star.svg"}
                className="w-full h-full object-cover "
                width={50}
                height={50}
                alt={"about cover"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
