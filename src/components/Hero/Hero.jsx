import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/HeroImage.svg";

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
