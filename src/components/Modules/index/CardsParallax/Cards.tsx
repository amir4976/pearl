'use client';

import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import Link from 'next/link';

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const Card: React.FC<CardProps> = ({ i, title, description, src, url, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 ">
      <motion.div 
        style={{ backgroundColor: 'var(--PannelBg)', scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col top-[-25%] h-[500px] max-md:h-fit   w-[1000px] shadow-xl  rounded-2xl p-12 transform-origin-top"
      >
        <h2 className="text-center text-2xl m-0 font-Dorna text-MainColor">{title}</h2>
        <div className="flex max-md:flex-col   h-full mt-12 gap-12 ">
          <div className="md:w-2/5 w-full relative top-[10%]">
            <p className="text-base text-MainColor  ">{description}</p>
             <Link href={url} className="text-center text-lg mt-12 text-white">
             مشاهده جزییات
             </Link>
          </div>
          <div className="relative md:w-3/5 w-full h-[300px] rounded-full overflow-hidden  " >

            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                width={300}
                height={300}
                src={src}
                alt="image"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;