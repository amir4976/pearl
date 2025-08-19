"use client";
import React, { useState } from "react";
import TestimonialCards from "@/components/Modules/index/testimonial/TestimonialCards";
import styles from "./testimonial.module.css";
// import Modal from "@/components/Modules/index/testimonial/modal/Modal";
import dynamic from "next/dynamic";

const Modal = dynamic(
  () => import("@/components/Modules/index/testimonial/modal/Modal"),
  { ssr: false }
);
const testimonialItems = [
  {
    title: "جواهرات اسپورت",
    src: "/cover/gardie-design-social-media-marketing-i2jbuqO0YfM-unsplash.jpg",
    color: "#1a1a1a",
    disc:"بدون محدودیت زیبا باشید❤❤"
    
  },
  {
    title: "جواهرات خاص شما",
    src: "/cover/segal-jewelry-NsH-CvU0deg-unsplash.jpg",
    color: "#2e2e2e",
    disc:"بدون محدودیت زیبا باشید❤❤"
  },
  {
    title: "انگشتر هایی بی همتا",
    src: "/cover/cornelia-ng-zZLhoEwGCeM-unsplash.jpg",
    color: "#3b3b3b",
    disc:"بدون محدودیت زیبا باشید❤❤"

  },
  {
    title: "زیبایی و زینت شما",
    src: "/cover/brooke-cagle-kElEigko7PU-unsplash.jpg",
    color: "#5a4630",
    disc:"بدون محدودیت زیبا باشید❤❤"

  },
];
function Testimonial() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {testimonialItems.map((project, index) => {
          return (
            <TestimonialCards
              index={index}
              disc={project.disc}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={testimonialItems} />
    </main>
  );
}

export default Testimonial;
