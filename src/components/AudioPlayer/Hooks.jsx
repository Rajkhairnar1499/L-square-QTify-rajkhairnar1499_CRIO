import { useEffect, useRef, useState } from "react";
import { InitialPlayerState } from "./PlayerState";
import { createAudioPlayer } from "./createAudioPlayer";

const useAudioPlayer = (playlist) => {
  const [playerState, setPlayerState] = useState(InitialPlayerState);
  const playerRef = useRef(null);

  useEffect(() => {
    const newPlayer = createAudioPlayer(playlist, setPlayerState);
    playerRef.current = newPlayer;

    return () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  const setPlaybackPosition = (position) => {
    playerRef.current?.setPlaybackPosition(position);
  };

  const toggleShuffle = () => {
    playerRef.current?.toggleShuffle();
  };
  const toggleRepeat = () => {
    playerRef.current?.toggleRepeat();
  };
  const togglePlayPause = () => {
    playerRef.current?.togglePlayPause();
  };
  const playNextTrack = () => {
    playerRef.current?.playNextTrack();
  };
  const playPreviousTrack = () => {
    playerRef.current?.playPreviousTrack();
  };
  const cleanup = () => {
    playerRef.current?.cleanup();
  };

  return {
    setPlaybackPosition,
    playerState,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    cleanup,
  };
};

export default useAudioPlayer;
