import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

function Form({ musics, setMusic, onAddMusic }) {
  // const [name, setName] = useState("")
  // const [album, setAlbum] = useState("")
  // const [image, setImage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    album: "",
    image: "",
  });
  
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

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    const newMusic = {
      name: formData.name,
      album: formData.album,
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
          type="text"
          name="name"
          placeholder="Enter artist's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter album name..."
          className="input-text"
          value={formData.album}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter album art image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
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