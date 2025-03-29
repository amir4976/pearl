"use client";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <>
      <motion.div animate={{display:'none'}} transition={{ delay: 3,duration:2 }}  className="flex fixed top-0 justify-center items-center w-full h-screen z-50 " >
        <motion.div
          initial={{ left: "0%" }}
          animate={{ left: "-100%" }}
          transition={{ delay: 3,duration:2 }}
          className=" fixed w-1/2 h-screen z-40 bg-[#1B1B1B]   top-0 left-0 flex items-center justify-center"
        ></motion.div>

        <motion.div
         initial={{ scale:0 }}
         animate={{ scale:1 , display:'none' }}
         transition={{duration:3}}
          className=" h-screen  border-2 border-MainColor z-50"
        >
         
        </motion.div>
        <motion.div
          initial={{ right: "0%" }}
          animate={{ right: "-100%" }}
          transition={{ delay: 3,duration:2 }}
          className=" fixed w-1/2 h-screen z-40 bg-[#1B1B1B] top-0 right-0 flex items-center justify-center"
        ></motion.div>
      </motion.div>
    </>
  );
};

export default LoadingScreen;
