"use client";
import { motion } from "framer-motion";
// import Image from "next/image";
import React from "react";
import "./aboutUs.css";
import Image from "next/image";
import { AboutUsImages } from "@/utils/constances";

interface AboutUsProps {
  image: string;
  role:string;
  name:string;
  index:number;
}
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className=" my-44 cover-backGround relative "
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-full flex items-center text-center justify-center flex-col "
        >
          <div className="font-Dorna text-3xl text-MainColor">
            درباره مجموعه پایرل
          </div>
          <div className="mt-5 text-white leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل
          </div>
        </motion.div>
      </div>
      <div className="w-full flex gap-10 mt-10 max-md:flex-col max-md:items-center max-md:justify-center max-md:px-10">
        {AboutUsImages.map((item, index) => (
          <div key={index}>
            <AboutUSCard image={item.image} name={item.name} role={item.role} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const AboutUSCard = ({image,name,role,index}: AboutUsProps) => {
  console.log(image);
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <motion.div
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="mt-20 "

      >
        <div className="overflow-hidden rounded-full relative hover:scale-105 hover:rotate-6   transition-all" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <div className={`${isHovered ? "flex" : "hidden"} text-MainColor font-Dorna  flex-col  absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center transition-all duration-300`}>
             <span className="text-2xl">{name}</span>
             <span>{role}</span>
            </div>
          <Image
            src={image}
            width={500}
            height={600}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
