import React from "react";
import useAudioPlayer from "../AudioPlayer/Hooks";
import playlist from "./Playlist";
import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import styles from "./AudioPlayer.module.css";

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  const setProgress = (value) => {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  };

  const computeProgress = () => {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;

    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  };

  return (
    <section className={styles.playerWrapper}>
      <SongInfo
        title={currentTrackMetadata?.title}
        artist={currentTrackMetadata?.artist}
        coverArtSrc={currentTrackMetadata?.coverArtSrc}
      />
      <div className={styles.play_pause}>
        <Controls
          shuffle={shuffle}
          repeat={repeat}
          onShuffleClick={toggleShuffle}
          onRepeatClick={toggleRepeat}
          onPrevClick={playPreviousTrack}
          onNextClick={playNextTrack}
          onPlayClick={togglePlayPause}
          isPlaying={playbackState === "PLAYING"}
        />
        <ProgressBar
          rightLabel={formatTime(currentTrackDuration)}
          leftLabel={formatTime(currentTrackPlaybackPosition)}
          onChange={setProgress}
          progress={computeProgress()}
        />
      </div>
    </section>
  );
};

export default AudioPlayer;

const formatTime = (timeInSeconds) => {
  if (timeInSeconds === null) return "";
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, "0");
  const seconds = `${numberOfSeconds}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
};
