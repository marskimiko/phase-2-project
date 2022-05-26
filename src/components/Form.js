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
      backgroundColor: '',
      maxWidth: "420px",
      margin: "50px auto",
      padding: "0px",
      borderSize: "border box",
      // display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }

  function handleSubmit(e){
    e.preventDefault()

    const newMusic = {...formData, likes: 0}

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMusic)
    }
    fetch('http://localhost:3004/music', configObj)
    .then(r => r.json())
    .then(data => {
        onAddMusic(data)
        setFormData(defaultFormData)
    })
}

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(params.id && musics.length > 0) {
      const musicWeWantToEdit = musics.find(music => music.id === parseInt(params.id))
      setFormData(musicWeWantToEdit);
    } else {
      setFormData(defaultFormData);
    }

  }, [params, musics])

  return (
    <div>
        <h2 style={styles.form}>Add a New Song</h2>
        <form class="form-inline"onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label>Artist:</label>
            <input 
              type="text" 
              name="artist" 
              value={formData.artist} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label>Album:</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
          </div>
          <div>
            <label>Image:</label>
              <input 
                type="text" 
                name="image" 
                value={formData.image} 
                onChange={handleChange} 
              />
          </div>
            <input 
              type="submit" 
              value={formData.id ? "Update" : "Create"}
            />
        </form>
    </div>
)
}

export default Form;