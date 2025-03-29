"use client";
import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./Marquee.css";

const InfiniteMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const cloneRef = useRef<HTMLDivElement | null>(null);

  const emojiAnimation = useSpring({
    transform: "scale(1.5)",
    loop: { reverse: true },
    config: { friction: 10, tension: 200 },
  });

  useEffect(() => {
    if (!marqueeRef.current || !cloneRef.current) return;
    const marquee = marqueeRef.current;
    const clone = cloneRef.current;
    let position = 0;
    const speed = 1;

    function animate() {
      position -= speed;
      if (position <= -marquee.clientWidth) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      clone.style.transform = `translateX(${position + marquee.clientWidth}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className="absolute inset-x-0 top-[700px] max-md:top-[900px]   w-full  ">
      <div className="marquee-container mt-52  ">
        <div className="marquee-content" ref={marqueeRef}>
          <animated.div style={emojiAnimation} className="text-amber-400">
            ✨
          </animated.div>
          <div className="text-teal-400">درخشش جاودانه، زیبایی بی‌نهایت</div>

          <animated.div style={emojiAnimation} className="text-rose-400">
            💍
          </animated.div>
          <div className="text-blue-500">
            الماس واقعی، جلوه‌ای از شکوه و اصالت
          </div>

          <animated.div style={emojiAnimation} className="text-yellow-500">
            👑
          </animated.div>
          <div className="text-green-400">زیبایی‌ای که شایسته‌ی شماست</div>

          <animated.div style={emojiAnimation} className="text-pink-500">
            🔷
          </animated.div>
          <div className="text-purple-600">هر قطعه‌ای، قصه‌ای از عشق و هنر</div>

          <animated.div style={emojiAnimation} className="text-red-500">
            💖
          </animated.div>
          <div className="text-indigo-400">جواهری خاص برای لحظه‌های خاص</div>

          <animated.div style={emojiAnimation} className="text-orange-500">
            🎁
          </animated.div>
          <div className="text-yellow-400">هدیه‌ای بی‌نظیر برای عزیزان شما</div>

          <animated.div style={emojiAnimation} className="text-cyan-400">
            💫
          </animated.div>
          <div className="text-pink-600">
            درخشش جاودانه با طلا و جواهرات منحصر‌به‌فرد
          </div>

          <animated.div style={emojiAnimation} className="text-purple-500">
            🔱
          </animated.div>
          <div className="text-indigo-500">
            ترکیبی از ظرافت و شکوه در هر قطعه
          </div>

          <animated.div style={emojiAnimation} className="text-yellow-500">
            🕰
          </animated.div>
          <div className="text-amber-500">سبکی کلاسیک، اما همیشه ماندگار</div>

          <animated.div style={emojiAnimation} className="text-indigo-400">
            💠
          </animated.div>
          <div className="text-blue-500">
            برلیان‌های درخشان، طراحی‌های بی‌نظیر
          </div>
        </div>

        <div className="marquee-content" ref={cloneRef}>
          <animated.div style={emojiAnimation} className="text-amber-400">
            💎
          </animated.div>
          <div className="text-teal-400">درخشش جاودانه، زیبایی بی‌نهایت</div>

          <animated.div style={emojiAnimation} className="text-rose-400">
            💍
          </animated.div>
          <div className="text-blue-500">
            الماس واقعی، جلوه‌ای از شکوه و اصالت
          </div>

          <animated.div style={emojiAnimation} className="text-yellow-500">
            👑
          </animated.div>
          <div className="text-green-400">زیبایی‌ای که شایسته‌ی شماست</div>

          <animated.div style={emojiAnimation} className="text-pink-500">
            🔷
          </animated.div>
          <div className="text-purple-600">هر قطعه‌ای، قصه‌ای از عشق و هنر</div>

          <animated.div style={emojiAnimation} className="text-red-500">
            💖
          </animated.div>
          <div className="text-indigo-400">جواهری خاص برای لحظه‌های خاص</div>

          <animated.div style={emojiAnimation} className="text-orange-500">
            🎁
          </animated.div>
          <div className="text-yellow-400">هدیه‌ای بی‌نظیر برای عزیزان شما</div>

          <animated.div style={emojiAnimation} className="text-cyan-400">
            💫
          </animated.div>
          <div className="text-pink-600">
            درخشش جاودانه با طلا و جواهرات منحصر‌به‌فرد
          </div>

          <animated.div style={emojiAnimation} className="text-purple-500">
            🔱
          </animated.div>
          <div className="text-indigo-500">
            ترکیبی از ظرافت و شکوه در هر قطعه
          </div>

          <animated.div style={emojiAnimation} className="text-yellow-500">
            🕰
          </animated.div>
          <div className="text-amber-500">سبکی کلاسیک، اما همیشه ماندگار</div>

          <animated.div style={emojiAnimation} className="text-indigo-400">
            💠
          </animated.div>
          <div className="text-blue-500">
            برلیان‌های درخشان، طراحی‌های بی‌نظیر
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
