import React, { useState } from 'react';
import Login from './Login'; // Import your Login component
import "./App.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);

  // Function to fetch tracks based on search keyword
  const getTracks = async () => {
    try {
      const encodedKeyword = encodeURIComponent(keyword);
      let response = await fetch(`https://v1.nocodeapi.com/shaurya0501/spotify/IzsXSgDpXzJfPWGk/search?q=${encodedKeyword}&type=track`);

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        setTracks([]);
        return;
      }

      let data = await response.json();

      if (data && data.tracks && Array.isArray(data.tracks.items)) {
        setTracks(data.tracks.items);
      } else {
        console.error("Unexpected API response structure:", data);
        setTracks([]);
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setTracks([]);
    }
  };

  // Show Login if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg cute-navbar">
        <div className="container-fluid">
          <a className="cute-brand" href="#">
            🎵 Saregama 🎵
          </a>
          <div className="d-flex w-100 align-items-center">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="cute-search-input me-2 flex-grow-1"
              type="search"
              placeholder="🎶 Search for your favorite songs..."
              aria-label="Search"
            />
            <button onClick={getTracks} className="cute-search-btn" type="button">
              ✨ Search ✨
            </button>
          </div>
        </div>
      </nav>

      <div className="cute-container">
        <div className="cute-grid">
          {tracks.map((track) => {
            if (
              !track.album ||
              !track.album.images ||
              !track.album.images[0] ||
              !track.album.artists ||
              !track.album.artists[0]
            ) {
              console.warn("Skipping malformed track:", track);
              return null;
            }
            return (
              <div key={track.album.id} className="cute-card">
                <img
                  src={track.album.images[0].url}
                  className="cute-card-img"
                  alt="Album cover"
                />
                <div className="cute-card-body">
                  <h5 className="cute-card-title">{track.name}</h5>
                  <p className="cute-card-text">🎤 Artist: {track.album.artists[0].name}</p>
                  <p className="cute-card-text">📅 Release Date: {track.album.release_date}</p>
                  <audio src={track.preview_url} controls className="cute-audio" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
