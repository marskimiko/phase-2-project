import React, { useState, useEffect } from "react";
import MusicCard from './MusicCard'

function Home({ musics, setMusic, onUpdateMusic }) {

  const handleDelete= (id) => {
    let updatedMusics = musics.filter(music => music.id !== id)
    setMusic(updatedMusics)
    const config = {
      method: "DELETE",
    }
    fetch(`http://localhost:3004/music/${id}`, config)
  }
  
  const renderMusicArray = musics.map((music) => {
    return <MusicCard
      key={music.id}
      music={music}
      onUpdateMusic={onUpdateMusic}
      handleDelete={handleDelete}
    />
  })
  
 
  return (
    <div id="music-collection">{renderMusicArray}</div>
  )
}

export default Home;
