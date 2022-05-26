import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Form({ onAddMusic, musics }) {
  // const [name, setName] = useState("")
  // const [album, setAlbum] = useState("")
  // const [image, setImage] = useState("")
  const defaultFormData = {
    artist:"",
    name: "",
    image: "",
    likes: 0
  }
  const [formData, setFormData] = useState(defaultFormData)
  
  const params = useParams()
  console.log(params)

  const styles = {
    img: {
      height: '210px',
      width: '210px',
    },
    form: { 
      backgroundColor: 'pink',
      maxWidth: "420px",
      margin: "50px auto",
      padding: "0px",
      borderSize: "border box",
      // display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }

  function handleSubmit() {
    const newMusic = {
      artist: formData.artist,
      name: formData.name,
      image: formData.image,
    };

    fetch('http://localhost:3004/music', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMusic),
    })
    .then(response => response())
    .then(onAddMusic);
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // useEffect(() => {
  //   if(params.id) {
  //     const musicWeWantToEdit = musics.find(music => music.id === parseInt(params.id))
  //     setFormData(musicWeWantToEdit);
  //   }

  // }, [params])

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = { name, album, image};

  //   fetch('http://localhost:3004/music', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   .then(r => r.json())
  //   .then(newMusic => setMusic([...musics, newMusic]));
  // }
  return (
    <div className="container">
      <form className="add-music-form" onSubmit={handleSubmit} style={styles.form}>
        <h3>Add Music!</h3>
        <input
            onChange={handleChange} 
            fluid label="Artist" 
            placeholder="Artist" 
            name="artist" 
            value={formData.artist} 
        />
        <br />
        <input
          onChange={handleChange} 
          fluid label="Album" 
          placeholder="Album" 
          name="Album" 
          value={formData.name} 
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter album art image URL..."
          className="input-text"
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Add"
          className="submit"
        />
      </form>
    </div>
  )
}

export default Form;