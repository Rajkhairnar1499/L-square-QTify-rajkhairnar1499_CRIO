import trackOne from "./songs/Attention.mp3";
import trackTwo from "./songs/Dandelions (Violin).mp3";
import trackThree from "./songs/Hymn For The Weekend.mp3";
import trackFour from "./songs/Let Her Go.mp3";
import trackFive from "./songs/Unstoppable Sia.mp3";

import posterOne from "./songImage/Attention.jpg";
import posterTwo from "./songImage/Dandelions.png";
import posterThree from "./songImage/Hymn-For-The-Weekend.png";
import posterFour from "./songImage/Let-Her-Go.png";
import posterFive from "./songImage/UnStoppable.png";

const playlist = [
  {
    audioSrc: trackOne,
    metaData: {
      title: "Attention",
      artist: "Charlie Puth",
      coverArtSrc: posterOne,
    },
  },
  {
    audioSrc: trackTwo,
    metaData: {
      title: "Dandelions (Volin)",
      artist: "Joel Sunny",
      coverArtSrc: posterTwo,
    },
  },
  {
    audioSrc: trackThree,
    metaData: {
      title: "Hymn For The Weekend",
      artist: "ColdPlay",
      coverArtSrc: posterThree,
    },
  },
  {
    audioSrc: trackFour,
    metaData: {
      title: "Let Her Go",
      artist: "Passenger",
      coverArtSrc: posterFour,
    },
  },
  {
    audioSrc: trackFive,
    metaData: {
      title: "Unstoppable",
      artist: "Sia",
      coverArtSrc: posterFive,
    },
  },
];

export default playlist;
