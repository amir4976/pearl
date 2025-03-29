"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

type ScrollTypingTextProps = {
  text: string;
};

const ScrollTypingText: React.FC<ScrollTypingTextProps> = ({ text }) => {
  const container = useRef<HTMLParagraphElement>(null);

  // Type scrollYProgress as MotionValue
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");
  return (
    <p ref={container} className="text-3xl font-bold text-gray-600 text-center leading-relaxed">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

type WordProps = {
  children: string;
  progress: MotionValue<number>; // Use MotionValue for progress
  range: [number, number];
};

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-2">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

type CharProps = {
  children: string;
  progress: MotionValue<number>; // Use MotionValue for progress
  range: [number, number];
};

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#6b7280", "#f3d098"]);
  return (
    <span>
      <motion.span style={{ opacity, color }} className="transition-all font-Bizan text-2xl ">
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollTypingText;
