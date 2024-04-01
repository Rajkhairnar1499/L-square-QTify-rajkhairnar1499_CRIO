export const createAudioPlayer = (playlist, onStateChange) => {
  let currentTrackIndex = 0;
  let repeat = false;
  let shuffle = false;
  const playbackHistory = [];
  const audioElement = new Audio();

  const emitCurrentPlayerState = () => {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  };

  const computeCurrentPlayerState = () => {
    return {
      currentTrackMetadata: getCurrentTrackMetadata(),
      currentTrackDuration: getCurrentTrackDuration(),
      currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
      playbackState: getPlaybackState(),
      repeat,
      shuffle,
    };
  };

  const getCurrentTrackMetadata = () => {
    if (currentTrackIndex < playlist.length) {
      return playlist[currentTrackIndex].metadata;
    } else {
      return null;
    }
  };
  const getCurrentTrackDuration = () => {
    return isNaN(audioElement.duration) ? null : audioElement.duration;
  };
  const getCurrentTrackPlaybackPosition = () => {
    return isNaN(audioElement.currentTime) ? null : audioElement.currentTime;
  };
  const getPlaybackState = () => {
    return audioElement.paused ? "PAUSED" : "PLAYING";
  };

  const setupAudioElementListeners = () => {
    audioElement.addEventListener("playing", emitCurrentPlayerState);
    audioElement.addEventListener("pause", emitCurrentPlayerState);
    audioElement.addEventListener("ended", onCurrentTrackEnded);
    audioElement.addEventListener("timeupdate", emitCurrentPlayerState);
    audioElement.addEventListener("loadeddata", emitCurrentPlayerState);
  };

  const removeAudioElementListeners = () => {
    audioElement.removeEventListener("playing", emitCurrentPlayerState);
    audioElement.removeEventListener("pause", emitCurrentPlayerState);
    audioElement.removeEventListener("ended", onCurrentTrackEnded);
    audioElement.removeEventListener("timeupdate", emitCurrentPlayerState);
    audioElement.removeEventListener("loadeddata", emitCurrentPlayerState);
  };

  const onCurrentTrackEnded = () => {
    if (repeat) {
      replayCurrentTrack();
    } else {
      playNextTrack();
    }
  };

  //#endregion

  /* === Track handling === */
  //#region
  const replayCurrentTrack = () => {
    audioElement.currentTime = 0;
    audioElement.play();
  };

  const loadTrack = (index) => {
    audioElement.src = playlist[index].audioSrc;
    audioElement.load();
    currentTrackIndex = index;
  };

  const computeNextTrackIndex = () => {
    return shuffle ? computeRandomTrackIndex() : computeSubsequentTrackIndex();
  };

  const computeSubsequentTrackIndex = () => {
    return (currentTrackIndex + 1) % playlist.length;
  };

  const computeRandomTrackIndex = () => {
    if (playlist.length === 1) return 0;
    const index = Math.floor(Math.random() * (playlist.length - 1));
    return index < currentTrackIndex ? index : index + 1;
  };
  //#endregion

  /* === Init & Cleanup === */
  //#region
  const init = () => {
    setupAudioElementListeners();
    loadTrack(0);
  };

  const cleanup = () => {
    removeAudioElementListeners();
    audioElement.pause();
  };
  //#endregion

  /* === Controls === */
  //#region
  const setPlaybackPosition = (position) => {
    if (isNaN(position)) return;
    audioElement.currentTime = position;
  };

  const toggleShuffle = () => {
    shuffle = !shuffle;
    emitCurrentPlayerState();
  };

  const toggleRepeat = () => {
    repeat = !repeat;
    emitCurrentPlayerState();
  };

  const playNextTrack = () => {
    playbackHistory.push(currentTrackIndex);
    const nextTrackIndex = computeNextTrackIndex();
    loadTrack(nextTrackIndex);
    audioElement.play();
  };

  const playPreviousTrack = () => {
    if (playbackHistory.length === 0 || audioElement.currentTime > 5) {
      replayCurrentTrack();
    } else {
      const previousTrackIndex = playbackHistory.pop();
      loadTrack(previousTrackIndex);
      audioElement.play();
    }
  };

  const togglePlayPause = () => {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };
  //#endregion

  init();

  return {
    setPlaybackPosition,
    toggleShuffle,
    toggleRepeat,
    playNextTrack,
    playPreviousTrack,
    togglePlayPause,
    cleanup,
  };
};
