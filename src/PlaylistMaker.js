import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlaylistMaker.css';

function PlaylistMaker() {
  const [playlistName, setPlaylistName] = useState('');
  const [song, setSong] = useState('');
  const [songs, setSongs] = useState([]);

  const handleAddSong = () => {
    if (song.trim()) {
      setSongs([...songs, song.trim()]);
      setSong('');
    }
  };

  const handleRemoveSong = (index) => {
    const updatedSongs = songs.filter((_, i) => i !== index);
    setSongs(updatedSongs);
  };

  const handleSavePlaylist = () => {
    alert(`🎉 Playlist "${playlistName}" saved with ${songs.length} songs!`);
    setPlaylistName('');
    setSongs([]);
  };

  return (
    <div className="playlist-wrapper">
      <h2>Create Your Playlist 🎶</h2>

      <input
        type="text"
        placeholder="Enter playlist name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="playlist-input"
      />

      <div className="add-song-row">
        <input
          type="text"
          placeholder="Add a song title"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          className="song-input"
        />
        <button onClick={handleAddSong} className="add-btn">➕</button>
      </div>

      <ul className="song-list">
        {songs.map((title, index) => (
          <li key={index}>
            {title}
            <button onClick={() => handleRemoveSong(index)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <button
          onClick={handleSavePlaylist}
          disabled={!playlistName || songs.length === 0}
        >
          💾 Save Playlist
        </button>

        <Link to="/">
          <button className="back-btn">🔙 Back to Search</button>
        </Link>
      </div>
    </div>
  );
}

export default PlaylistMaker;
