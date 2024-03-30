import React from "react";
import styles from "./hero.module.css";
import heroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <img src={heroImage} alt="HeroImage" />
    </div>
  );
};

export default Hero;
