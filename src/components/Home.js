import React, { useState, useEffect } from "react";
import MusicCard from './MusicCard'

function Home({ musics }) {

  const renderMusicArray = musics.map((music) => {
    return <MusicCard
      key={music.id}
      music={music}
    />
  })
 
  return (
    <div id="music-collection">{renderMusicArray}</div>
  )
}

export default Home;
