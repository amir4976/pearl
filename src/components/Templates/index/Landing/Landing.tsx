"use client";
import RotationCircle from "@/components/Modules/index/RotationCircle/RotationCircle";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Landing() {
  return (
    <>
      <div className="h-[600px] w-full grid md:grid-cols-2 grid-cols-1 max-md:h-fit items-center mt-16">
        {/* Section 1 - Images */}
        <div className="col-span-1 flex items-end justify-center gap-5 relative">
          {/* Floating Star */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay:3 }}
            className="absolute top-10 left-52 max-md:left-10"
          >
            <Image src="/image/star.svg" width={50} height={50} alt="star" />
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut",delay:3 }}
            className="w-[300px] h-[600px] rounded-full overflow-hidden flex justify-center items-center"
          >
            <Image
              src="/cover/1155fa4fe9d110d98d4a118359ad4a20.jpg"
              alt="landing"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2,  delay:3.5 }}
            className="w-[200px] h-[350px] custom-rounded mb-10 overflow-hidden max-md:hidden"
          >
            <Image
              src="/cover/e08341166fca31bb54b8244b6c320938.jpg"
              alt="landing"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Section 2 - Text Content */}
        <div className="col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 , delay:3}}
            className="flex flex-col gap-5 items-center text-center h-full mt-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" ,delay:3}}
              className="font-DM text-center text-lg"
            >
              <motion.span whileHover={{ scale: 1.1 }}>
                ما جواهرات را بر اساس زندگی شما می‌سازیم
              </motion.span>
            </motion.div>
            <div className="font-Dorna text-center text-4xl text-MainColor flex flex-col md:hidden">
            قصه خودتان را برای ما تعریف کنید
          تا ما آن را به
          جواهر تبدیل کنیم
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 3.3 }}
              className="font-Dorna text-center text-4xl text-MainColor flex flex-col max-md:hidden"
            >
              <motion.span whileHover={{ scale: 1.05 }}>
                قصه خودتان را برای ما تعریف کنید
              </motion.span>
              <div className="flex mt-1 items-center">
                <motion.span whileHover={{ scale: 1.05 }}>تا ما آن را به</motion.span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.6 }}
                  whileHover={{ rotate: 10 }}
                  className="w-44 mx-2 bg-MainColor h-12 rounded-full overflow-hidden hidden xl:block"
                >
                  <Image
                    src="/cover/Blue Nile round diamond engagement ring..jpeg"
                    width={100}
                    height={100}
                    alt="ring"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.span whileHover={{ scale: 1.05 }}>جواهر تبدیل کنیم</motion.span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 3.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-lg"
            >
              ما برآنیم که با ارائه بهترین محصولات به مشتریان گرامی خود، پاسخ
              اعتماد شما را به بهترین صورت داده باشیم.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 3.7 }}
              className="flex justify-between w-full mt-10 max-md:hidden"
            >
              <RotationCircle />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, delay: 3.8 }}
                className="border-r border-MainColor w-full text-right text-sm p-2"
              >
                <motion.p whileHover={{ scale: 1.02 }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است.
                </motion.p>
                <div className="text-left px-3">مشتری</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Landing;