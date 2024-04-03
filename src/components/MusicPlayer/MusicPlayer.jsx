import React, { useState, useRef, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import "./MusicPlayer.css";


const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const MusicPlayer = () => {
  const theme = useTheme();
  const duration = 208; // seconds
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(true); // Start in a paused state

  const audioRef = useRef(null);

  useEffect(() => {
    // Trigger play when component mounts
    if (audioRef.current && !paused) {
      audioRef.current.play();
    }

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setPosition(audioRef.current.currentTime);
      });

      audioRef.current.addEventListener("canplaythrough", () => {
        // Check if the audio is loaded before playing
        if (!paused) {
          audioRef.current.play();
        }
      });
    }

    return () => {
      // Cleanup event listeners when the component unmounts
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", () => {
          setPosition(audioRef.current.currentTime);
        });

        audioRef.current.removeEventListener("canplaythrough", () => {
          if (!paused) {
            audioRef.current.play();
          }
        });
      }
    };
  }, [paused]);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const playPauseSong = () => {
    if (audioRef.current) {
      if (paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setPaused(!paused);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        overflow: "hidden",
        justifyContent: "space-between",
        padding: "20px",
        "@media (max-width: 750px)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",

          width: "20vw",
          "@media (max-width: 750px)": {
            display: "flex",
            flexDirection: "column",
            paddingBottom: "20px",
          },
        }}
      >
        <Box>
          <img
            className="musicimage"
            alt="Attention!"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Attention_%28Charlie_Puth_song%29_single_cover.svg/640px-Attention_%28Charlie_Puth_song%29_single_cover.svg.png"
          />
        </Box>

        <Box sx={{ ml: 1.5, minWidth: 0 }}>
          <Typography>
            <b>Attention! </b>
          </Typography>
          <Typography variant="caption" color="white" fontWeight={500}>
            Charlie Puth
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          paddingRight: "20px",
        }}
      >
        <Box
        //   sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     justifyContent: "space-around",
        //     mt: -1,
        //   }}
        >
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={playPauseSong}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: "3rem", color: "white" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "3rem", color: "white" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
        </Box>

        <Box className={{ display: "flex", flexDirection: "column" }}>
          <Slider
            className="slide"
            size="small"
            value={position}
            min={0}
            step={0.1}
            max={duration}
            onChange={(_, value) => {
              setPosition(value);
              audioRef.current.currentTime = value;
            }}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
              width: "60vw",
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.6s cubic-bezier(.47,1.64,.41,1.1)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              //   alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: -2,

              width: "60vw",
            }}
          >
            <TinyText className="songtime">{formatDuration(position)}</TinyText>
            <TinyText className="songtime">{formatDuration(duration)}</TinyText>
          </Box>
        </Box>
      </Box>

      <audio
        ref={audioRef}
        src="https://files.gospeljingle.com/uploads/music/2023/05/Charlie-Puth-Attention-(Gospeljingle.com).mp3"
      />
    </Box>
  );
};

export default MusicPlayer;
