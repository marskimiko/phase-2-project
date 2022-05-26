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

  // function handleSubmit() {
  //   const newMusic = {
  //     artist: formData.artist,
  //     name: formData.name,
  //     image: formData.image,
  //   };

  //   fetch('http://localhost:3004/music', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newMusic),
  //   })
  //   .then(response => response())
  //   .then(onAddMusic);
  // }
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
    <div>
        <h2>Add a New Song</h2>
       <form onSubmit={handleSubmit} style={styles.form}>
       <div>
            <label>Artist:</label>
            <input type="text" name="artist" value={formData.artist} onChange={handleChange} />
           </div>
           <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
           </div>
           <div>
            <label>Image:</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
           </div>
            <input type="submit" value={formData.id ? "Update" : "Create"}/>
       </form>
    </div>
)
}

export default Form;