import React from "react";
import styles from "./Footer.module.css";
import HeroImage from "../../assets/HeroImage.svg";
import AudioPlayer from "../Audio Bar/AudioBar";
import SongInfo from "../AudioPlayerComponents/SongInfo";
import ProgressBar from "../AudioPlayerComponents/ProgressBar";

const Footer = () => {
  return (
    <section className={styles.footerWrapper}>
      <SongInfo />
      <div className={styles.play_pause}>
        <ProgressBar />
        <div>Track</div>
      </div>
    </section>
  );
};


// const Footer = () => {
//   return (
//     <section className={styles.footerWrapper}>
//       <div className={styles.imgCard}>
//         <div className={styles.img}>
//           <img src={HeroImage} alt="ImageHero" />
//         </div>
//         <div>
//           {/* <AudioPlayer /> */}
//           <p className={styles.songName}>Song Name</p>
//           <p className={styles.albumName}> Album Name</p>
//         </div>
//       </div>
//       <div className={styles.play_pause}>
//         <div>Play/Pause</div>
//         <div>Track</div>
//       </div>
//     </section>
//   );
// };

export default Footer;
