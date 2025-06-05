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
<div className='container'>
  <div className='row'>
    <div className='col'>
      <button className='btn btn-primary' onClick={getTracks}>get Data</button>
      </div>
  </div>
</div>
    </>
  );
}

export default App;
