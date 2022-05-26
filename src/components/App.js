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


  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path="/add">
          <Form 
            musics={musics}
            setMusic={setMusic} 
            onAddMusic={handleAddMusic}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/:id/edit">
          <Form />
        </Route>
        <Route exact path="/">
          <Home 
            musics={musics}
            setMusic={setMusic}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
