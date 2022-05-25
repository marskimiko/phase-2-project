import React from "react";
import { Route } from "react-router-dom";
import MusicCard from './MusicCard'

function Home({ musics, setMusic, onUpdateMusic }) {

  const styles = {
    main: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  } 

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
    <>
    <div id="music-collection" style={styles.main}>{renderMusicArray}</div>
    </>
  )
}

export default Home;
