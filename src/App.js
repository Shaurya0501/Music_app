import { useState } from 'react';
import './App.css';

function App() {
  const [tracks,setTracks]=useState([]);
  const getTracks=async()=>{
    let data=await fetch("https://v1.nocodeapi.com/shaurya0501/spotify/IzsXSgDpXzJfPWGk/search?q=iris&type=track");
    let convertedData=await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items)
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Saregama
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <input
          className="form-control me-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search" 
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
    </div>
  </div>
</nav>
<div className='col'> 
      <button className='btn btn-primary' onClick={getTracks}>get Data</button>
      </div>
<div className='container'>
  <div className='row'>
  {
  tracks.map((element, index) => {
    return <div  key={element.album.id} className='col'>
      <div className="card">
  <img src={element.album.images[0].url}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist:{element.album.artists[0].name}
    </p>
     <p className="card-text">
      Release Date:{element.album.release_date}
    </p>
    <audio src={element.preview_url} controls className='w-100'></audio>
  </div>
</div>
    </div>;
  })
}
</div>
</div>
    </>
  );
}

export default App;
