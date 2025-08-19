"use client"
import Image from "next/image";
import React from "react";


function AboutUs() {
  return (
    <div className="grid grid-cols-2  mt-40 FadeIn">
      <div className="col-span-1  p-3   text-MainColor text-sm  ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی ی، لورم ایپسوم متن ساختگی با تولید
        سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
        فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
        ی،
        <div className="flex justify-center mt-10">
          <Image
            src="/cover/Asset 1.svg"
            alt="alt"
            width={400}
            height={600}
            className=" rounded-3xl overflow-hidden opacity-80 "
          />
        </div>
      </div>
      <div className="col-span-1  p-3 col-start-2  mt-40   text-MainColor text-sm  ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی ی، لورم ایپسوم متن ساختگی با تولید
        سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
        فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
        ی،
                <div className="flex justify-center mt-10">
          <Image
            src="/cover/model1.svg"
            alt="alt"
            width={400}
            height={600}
            className=" rounded-3xl overflow-hidden  opacity-80 "
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
