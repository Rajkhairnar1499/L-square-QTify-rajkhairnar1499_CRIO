import React from "react";
import styles from "./AudioPlayer.module.css";

const SongInfo = ({ title, artist, coverArtSrc }) => {
  // console.log(coverArtSrc);

  return (
    <div className={styles.imgCard}>
      <div className={styles.img}>
        <img 
          src={coverArtSrc} 
          alt="coverArtSrc" 
          width={180} 
          height={180} />
      </div>
      <div>
        <p className={styles.songName}>{title}</p>
        <p className={styles.albumName}>{artist}</p>
      </div>
    </div>
  );
};

export default SongInfo;
