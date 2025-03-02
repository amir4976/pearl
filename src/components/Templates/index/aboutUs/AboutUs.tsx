import Image from "next/image";
import React from "react";
import Btn from "@/components/Modules/global/btn/Btn";

function AboutUs() {
  return (
    <>
      <div className="w-full h-fit flex max-md:flex-col  justify-between items-center px-36 max-md:p-5 mt-40">
        <div className="w-full h-fit  gap-3 ">
          <Image
            src={"/image/Group-49-1024x844.webp"}
            alt=""
            height={800}
            width={800}
          />
        </div>
        <div className="w-1/2 max-md:w-full h-fit flex flex-col gap-4">
          <span className="text-xl">درباره ما</span>
          <p className="text-4xl text-MainColor font-DB">
            با 12 سال سابقه کار در زمینه جواهرات مدرن در کنار شماییم.
          </p>
          <p className="">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>

          <div className=" mt-10">
            <Btn title="بیشتر بدانید" link="/about" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
