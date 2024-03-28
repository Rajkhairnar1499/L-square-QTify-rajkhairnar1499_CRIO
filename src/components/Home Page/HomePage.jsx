import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import {
  fetchTopAlbum,
  fetchNewAlbum,
  fetchSongs,
  fetchGenres,
} from "../../api/api";


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
    </>
  );
};

export default HomePage;
