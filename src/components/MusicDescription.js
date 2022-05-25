import React from "react";
import { useParams } from "react-router-dom";

function MusicDescription({ musics }) {

  const params = useParams();
  console.log(params);

  return (
    <div>
      <h3>{musics[params.movieId].name}</h3>
    </div>
  );
}

export default MusicDescription;