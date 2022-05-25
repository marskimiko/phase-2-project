import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MusicCard from './MusicCard'
import MusicDescription from "./MusicDescription"

function Home({ musics, setMusic, onUpdateMusic }) {
  const match = useRouteMatch();

  const styles = {
    
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
    <div>
    <Route exact path={match.url}>
        <h3>Click album for description</h3>
      </Route>
      
      <Route path={`${match.url}/:movieId`}>
        <MusicDescription musics={musics} />
      </Route>
    </div>
    <div id="music-collection">{renderMusicArray}</div>
    </>
  )
}

export default Home;
