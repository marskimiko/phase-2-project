import React from "react";
import MusicCard from './MusicCard'

function Home({ musics, setMusic, updateMusic }) {

  const styles = {
    main: {
      paddingTop: "100px",
      paddingBottom: "100px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "center"
    }
  }
    
  const renderMusicArray = musics.map((music) => {
    return <MusicCard
      key={music.id}
      music={music}
      musics={musics}
      setMusic={setMusic}
      updateMusic={updateMusic}
    />
  })
  
 
  return (
    <>
    <div id="music-collection" style={styles.main}>{renderMusicArray}</div>
    </>
  )
}

export default Home;
