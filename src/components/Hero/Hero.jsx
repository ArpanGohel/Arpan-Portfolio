/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arpan</h1>
        <p className={styles.description}>Welcome to my Portfolio site!</p>
        <p className={styles.description}>
          I'm a Tech Enthusiast & a Software Engineering Grad ready to contribute and grow in a Dynamic Team Environment
           by translating my Academic Excellence into Real-World Solutions.
        </p>
       {/*<a href="mailto:gohel.arpan@gmail.com" className={styles.contactBtn}>
          Get in Touch
        </a>*/}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};