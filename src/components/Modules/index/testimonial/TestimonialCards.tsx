'use client';
import React from 'react'
import styles from './style.module.css';

type props = {
  index: number;
  title: string;
  disc: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};
export default function TestimonialCards({ index, title,disc, setModal }: props) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{disc}</p>
    </div>
  );
}