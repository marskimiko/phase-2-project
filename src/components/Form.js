import React, { useState } from 'react';

function Form({ musics, setMusic }) {
  const [name, setName] = useState("")
  const [album, setAlbum] = useState("")
  const [image, setImage] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name, album, image};

    fetch('http://localhost:3004/music', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(newMusic => setMusic([...musics, newMusic]));
  }
  return (
    <div className="container">
      <form className="add-music-form" onSubmit={handleSubmit}>
        <h3>Add Music!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter artist's name..."
          className="input-text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter album name..."
          className="input-text"
          value={album}
          onChange={e => setAlbum(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter album art image URL..."
          className="input-text"
          value={image}
          onChange={e => setImage(e.target.value)}
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