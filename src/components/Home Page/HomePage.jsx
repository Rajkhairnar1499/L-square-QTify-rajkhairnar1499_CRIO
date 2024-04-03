import React from "react";
import Navbar from "../Navbar/Navbar";
import sectionStyles from "../Section/Section.module.css";
import Section from "../Section/Section";
import { useState, useEffect } from "react";
import {
  fetchTopAlbum,
  fetchNewAlbum,
  fetchSongs,
  fetchGenres,
} from "../../api/api";
import Hero from "../Hero/Hero";
import FAQs from "../FAQs/FAQs";
import MusicPlayer from "../MusicPlayer/MusicPlayer";


const HomePage = () => {
  let [topAlbum, setTopAlbum] = useState([]);
  let [newAlbum, setNewAlbum] = useState([]);
  let [songs, setSongs] = useState([]);
  let [genres, setGeneres] = useState([]);
  useEffect(() => {
    (async () => {
      let topAlbumData = await fetchTopAlbum();
      setTopAlbum(topAlbumData);

      let newAlbumData = await fetchNewAlbum();
      setNewAlbum(newAlbumData);

      let fetchSongsData = await fetchSongs();
      setSongs(fetchSongsData);

      let fetchSongsGenere = await fetchGenres();
      setGeneres(fetchSongsGenere.data);
    })();
  }, []);


  return (
    <>
      <Navbar data={topAlbum.concat(newAlbum)} page={"home"} />
      <Hero />
      <div className={sectionStyles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbum} type="album" />
        <Section title="New Albums" data={newAlbum} type="album" />
        <hr />
        <Section title="Songs" data={songs} type="songs" genres={genres} />{" "}
        <hr />
      </div>{" "}
      <FAQs />
      <hr style={{ backgroundColor: "gray", border: "1px solid gray" }} />{" "}
      
      {/* <AudioPlayer /> */}
      <MusicPlayer />
      <hr />
    </>
  );
};

export default HomePage;
