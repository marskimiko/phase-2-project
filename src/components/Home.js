import React from "react";
import MusicCard from './MusicCard'

function Home({ musics, setMusic, updateMusic }) {

  const styles = {
    main: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "center"
    }
  }
  
  // function updateMusic(updatedMusic) {
  //   const updatedMusics = musics.map((music) =>
  //     music.id === updatedMusic.id ? updatedMusic : music
  //   );
  //   setMusic(updatedMusics);
  // }

  const handleDelete = (id) => {
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
      updateMusic={updateMusic}
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
