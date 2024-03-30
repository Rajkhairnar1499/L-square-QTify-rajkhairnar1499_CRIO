import React from "react";
import styles from "./Footer.module.css";
import HeroImage from "../../assets/HeroImage.svg";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.imgCard}>
        <div className={styles.img}>
          <img src={HeroImage} alt="ImageHero" />
        </div>
        <div>
          <p className={styles.songName}>Song Name</p>
          <p className={styles.albumName}> Album Name</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
