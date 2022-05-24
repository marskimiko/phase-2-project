import React, { useState, useEffect } from "react";
import '../App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import NavBar from "./NavBar";

function App() {
  const [musics, setMusic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/music")
    .then(r => r.json())
    .then((allMusic) => setMusic(allMusic))
  }, []);


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home 
            musics={musics}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
