import React, { useState, useEffect } from "react";
import '../App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import NavBar from "./NavBar";
import Form from './Form';
import About from './About'
// import { Form } from "react-bootstrap";

function App() {
  const [musics, setMusic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/music")
    .then(r => r.json())
    .then((allMusic) => setMusic(allMusic))
  }, []);

  function handleAddMusic(newMusic) {
    setMusic([...musics, newMusic]);
  }

  // function updateMusic(updatedMusic) {
  //   const updatedMusics = musics.map((music) =>
  //     music.id === updatedMusic.id ? updatedMusic : music
  //   );
  //   setMusic(updatedMusics);
  // }

  function updateMusic(updatedMusic) {
    const updatedMusicArray = musics.map((music) => {
      if (music.id === updatedMusic.id) {
        return updatedMusic;
      } else {
        return music;
      }
    });
    setMusic(updatedMusicArray);
  }

  // const updateMusic = (updatedMusic) => {
  //   const newMusicArray = musics.map((music) => {
  //     if (music.id === updatedMusic.id) {
  //       return updatedMusic;
  //     } else {
  //       return music;
  //     }
  //   });
  //   setMusic(newMusicArray);
  // }


  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path="/add">
          <Form 
            setMusic={setMusic} 
            onAddMusic={handleAddMusic}
            updateMusic={updateMusic}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/:id/edit">
          <Form 
          musics={musics}
          updateMusic={updateMusic}
          />
        </Route>
        <Route exact path="/">
          <Home 
            musics={musics}
            setMusic={setMusic}
            updateMusic={updateMusic}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
