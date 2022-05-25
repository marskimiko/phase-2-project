import React, { useState, useEffect } from "react";
import '../App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import NavBar from "./NavBar";
import Form from './Form';
// import { Form } from "react-bootstrap";

function App() {
  const [musics, setMusic] = useState([]);

  const styles = {
    body: {
      backgroundColor: 'black'
    }
  }

  useEffect(() => {
    fetch("http://localhost:3004/music")
    .then(r => r.json())
    .then((allMusic) => setMusic(allMusic))
  }, []);

  function handleUpdateMusic(updatedMusic) {
    const updatedMusics = musics.map((music) =>
      music.id === updatedMusic.id ? updatedMusic : music
    );
    setMusic(updatedMusics);
  }


  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path="/add">
          <Form 
            musics={musics}
            setMusic={setMusic} 
          />
        </Route>
        <Route exact path="/">
          <Home 
            musics={musics}
            setMusic={setMusic}
            onUpdateMusic={handleUpdateMusic}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
