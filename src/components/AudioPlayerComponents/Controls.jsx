import React from 'react';
import playButtonIcon from "./songIcons/ic_play.svg";
import pauseButtonIcon from "./songIcons/ic_pause.svg";
import nextButtonIcon from "./songIcons/ic_next.svg";
import prevButtonIcon from "./songIcons/ic_prev.svg";
import shuffleButtonIcon from "./songIcons/ic_shuffle.svg";
import shuffleButtonDisabledIcon from "./songIcons/ic_shuffle_disabled.svg";
import repeatButtonIcon from "./songIcons/ic_repeat.svg";
import repeatButtonDisabledIcon from "./songIcons/ic_repeat_disabled.svg";
import styles from "./AudioPlayer.module.css";


const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}) => {
  return (
    <div className={styles.controls}>
      {/* <div className="flex flex-row mt-4"> */}
      <ImageButton
        src={shuffle ? shuffleButtonIcon : shuffleButtonDisabledIcon}
        onClick={onShuffleClick}
        
      />
      <ImageButton
        src={prevButtonIcon}
        onClick={onPrevClick}
        
      />
      <ImageButton
        className="mr-2 ml-2"
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
        
      />
      <ImageButton
        src={nextButtonIcon}
        onClick={onNextClick}
        
      />
      <ImageButton
        src={repeat ? repeatButtonIcon : repeatButtonDisabledIcon}
        onClick={onRepeatClick}
        
      />
    </div>
  );
};

export default Controls;

const ImageButton = ({ onClick, src, className }) => {
  const buttonSize = 60;
  
  
  return (
    <button onClick={onClick}>
      <img
        src={src}
        width={buttonSize}
        height={buttonSize}
        // className="iconButton"
        // className={`drop-shadow-lg ${className ?? ""}`}
        className={`drop-shadow-lg inset ${className ?? ""}`}
        alt="src"
      />
    </button>
  );
};



