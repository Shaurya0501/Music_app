import React, { useState, useEffect } from 'react';
import "./Login.css";
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "https://cdn.pixabay.com/photo/2020/06/29/19/26/piano-5353974_1280.jpg",
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'NaN' || password === 'NaN')
      alert('Invalid username or invalid password!');
    else
      onLogin();
  }
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <>
      
      <div className="carousel-container">
        <div className="carousel-slide">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
              alt={`Background ${index + 1}`} 
            />
          ))}
          <div className="carousel-overlay"></div>
          
          <div className="login-container">
            <h1 className="brand-title">
              Welcome to Saregama
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="80px" 
                viewBox="0 -960 960 960" 
                width="80px" 
                className="music-icon"
              >
                <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/>
              </svg>
            </h1>
            
            <div className="login-form">
              <input
                type="text"
                placeholder="Enter your username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="login-button" type="button" onClick={handleLogin}>
                🎵 Let's Go! 🎵
              </button>
            </div>
          </div>
          
          <button className="carousel-nav carousel-nav-prev" type="button" onClick={prevSlide}>
            <span className="nav-arrow">‹</span>
          </button>
          <button className="carousel-nav carousel-nav-next" type="button" onClick={nextSlide}>
            <span className="nav-arrow">›</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;