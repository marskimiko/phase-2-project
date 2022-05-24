import React from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MusicCard({ music }) {
  const {  id, artist, name, image, likes } = music;
  const styles = {
    img: {
      height: '210px',
      width: '210px'
    }
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img 
            src={image} 
            alt={name} 
            style={styles.img} 
          />
        </div>
        <h2>{name}</h2>
        <div className="content">
          <div className="header">{artist}</div>
        </div>
        <div className="extra content">
          <Button>Likes {likes}</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </Card>
  )
}

export default MusicCard;
