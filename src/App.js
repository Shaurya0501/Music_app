import { useState } from 'react';
import './App.css';
import Login from './Login'; // this file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [keyword,setKeyword]=useState("");
  const [tracks,setTracks]=useState([]);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const getTracks=async()=>{
    try {
      // Encode the keyword for safe URL usage
      const encodedKeyword = encodeURIComponent(keyword);
      let data = await fetch(`https://v1.nocodeapi.com/shaurya0501/spotify/IzsXSgDpXzJfPWGk/search?q=${encodedKeyword}&type=track`);

      if (!data.ok) {
        // Handle HTTP errors (e.g., 401, 403, 404, 500)
        console.error(`HTTP error! status: ${data.status}`);
        setTracks([]); // Clear tracks or set an error state
        return;
      }

      let convertedData = await data.json();

      // Check if convertedData and convertedData.tracks exist
      if (convertedData && convertedData.tracks && Array.isArray(convertedData.tracks.items)) {
        console.log(convertedData.tracks.items);
        setTracks(convertedData.tracks.items);
      } else {
        console.error("API response structure is not as expected or 'items' is not an array:", convertedData);
        setTracks([]); // Set tracks to an empty array to avoid rendering issues
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setTracks([]); // Clear tracks on error
    }
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
        <input value={keyword} onChange={(event)=>{setKeyword(event.target.value)}}
          className="form-control me-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search" 
        />
        <button onClick={getTracks} className="btn btn-outline-success" type="submit">
          Search
        </button>
    </div>
  </div>
</nav>
<div className='col'> 
      </div>
<div className='container'>
  <div className='row'>
  {tracks.map((element) => { // Removed index as it's not strictly needed for key when element.album.id is unique
    // Add a check for element.album and element.album.images[0] to prevent further errors if data is malformed
    if (!element.album || !element.album.images || !element.album.images[0] || !element.album.artists || !element.album.artists[0]) {
        console.warn("Skipping malformed track element:", element);
        return null; // Skip rendering this element
    }
    return <div key={element.album.id} className='col-lg-3 col-md-6 py-2'>
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