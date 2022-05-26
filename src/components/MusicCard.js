import React from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function MusicCard({ music, updateMusic, handleDelete }) {
  const {  id, artist, name, image, likes } = music;
  
  const styles = {
    img: {
      height: '210px',
      width: '210px',
    },
    likeButton: {
      backgroundColor: 'white',
      color: 'black',
      width: "40%",
      marginLeft: "30%",
      marginRight: "30%"
    }, 
    trashButton: {
      backgroundColor: 'white',
      width: "40%",
      marginLeft: "30%",
      marginRight: "30%"
    },
    center: {
      textAlign: "center",
    }
  }


  function handleLikeClick() {
    
    fetch(`http://localhost:3004/music/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: likes + 1})
    })
      .then((r) => r.json())  
      .then(data => {
        updateMusic(data);
      })
  }

  function onHandleClickDelete() {
    handleDelete(music.id)
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
        <h2  
          style={styles.center}
          >{name}
        </h2>
        <div className="content">
          <div 
            className="header" 
            style={styles.center}
            >{artist}
          </div>
        </div>
        <div className="extra content">
          <Button 
            onClick={handleLikeClick} 
            style={styles.likeButton}
            >💗 {likes}
          </Button>
          <Button 
            style={styles.trashButton}
            onClick={onHandleClickDelete}
            >🗑
          </Button>
          <Link to={`/${id}/edit`}><button>EDIT</button></Link>
        </div>
      </div>
    </Card>
  )
}

export default MusicCard;
