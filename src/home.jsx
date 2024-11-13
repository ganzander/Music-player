import React, { useEffect, useState } from "react";
import SongCard from "./components/SongCard";
import Sidebar from "./components/Sidebar";
import SongsQueue from "./components/SongsQueue";

const songs = [
  {
    title: "Not Afraid",
    playing_time: "4:08",
    album: "Recovery",
    author: "Michael Jackson",
    audio: "./Eminem.mp3",
    img: "./not-afraid.jpg",
    thumbnail: "./recovery.jpeg",
    plays: 572638,
  },
  {
    title: "Mockingbird",
    playing_time: "4:11",
    album: "Encore",
    author: "Eminem",
    audio: "./mocking.mp3",
    img: "./bird.jpg",
    thumbnail: "./encore.jpg",
    plays: 127612,
  },
  {
    title: "Despacito",
    playing_time: "3:48",
    album: "Vida",
    author: "Luis Fonsi",
    audio: "./Luis.mp3",
    img: "./depacito.png",
    thumbnail: "./vida.jpeg",
    plays: 82632,
  },
  {
    title: "Dance Monkey",
    playing_time: "3:29",
    album: "The Kids Are Coming",
    author: "Tones and I",
    audio: "./dance.mp3",
    img: "./dance-monkey.jpg",
    thumbnail: "./kids.jpg",
    plays: 867676,
  },
];

const Home = () => {
  const [activeSong, setActiveSong] = useState(songs[0]);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {}, [activeSong]);

  return (
    <>
      <div className="home flex w-screen h-screen text-[#F6F6F6] ">
        <div className="home-left w-[25%] bg-black">
          <Sidebar />
        </div>
        <div className="home-2 flex w-[75%]">
          <div className="home-mid w-[70%] gradient-2">
            <SongsQueue
              activeSong={activeSong}
              setActiveSong={setActiveSong}
              songs={songs}
              sound={sound}
              setSound={setSound}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
            />
          </div>
          <div className="home-right w-[30%] py-5 px-6 flex items-end gradient">
            <SongCard
              setActiveSong={setActiveSong}
              songs={songs}
              sound={sound}
              setSound={setSound}
              activeSong={activeSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
