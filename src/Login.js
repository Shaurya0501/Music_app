import React, { useState, useEffect } from 'react';

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
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Chewy&family=Comfortaa:wght@300;400;700&display=swap');
        
        .carousel-container {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }
        
        .carousel-slide {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        
        .carousel-image.active {
          opacity: 1;
        }
        
        .carousel-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,182,193,0.8) 0%, rgba(255,218,185,0.7) 50%, rgba(221,160,221,0.8) 100%);
          z-index: 2;
        }
        
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          z-index: 10;
        }
        
        .brand-title {
          font-family: 'Chewy', cursive;
          font-size: 4rem;
          font-weight: 400;
          color: #fff;
          text-align: center;
          margin-bottom: 3rem;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
          background: linear-gradient(45deg, #ff69b4, #87ceeb, #98fb98, #ffb6c1, #dda0dd);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite, bounce 2s ease-in-out infinite;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .music-icon {
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
          fill: #ff69b4;
          animation: wiggle 3s ease-in-out infinite;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        .login-form {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          border: 3px solid rgba(255, 192, 203, 0.6);
          border-radius: 25px;
          padding: 3rem;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 15px 35px rgba(255, 182, 193, 0.3);
        }
        
        .form-input {
          width: 100%;
          padding: 1rem 1.5rem;
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(255, 192, 203, 0.5);
          border-radius: 20px;
          font-family: 'Fredoka', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition: all 0.3s ease;
          outline: none;
          color: #333;
        }
        
        .form-input:focus {
          background: rgba(255, 255, 255, 1);
          border-color: #ff69b4;
          box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.2);
          transform: translateY(-2px) scale(1.02);
        }
        
        .form-input::placeholder {
          color: #999;
          font-weight: 400;
        }
        
        .login-button {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #ff69b4 0%, #87ceeb 50%, #98fb98 100%);
          border: none;
          border-radius: 20px;
          color: white;
          font-family: 'Fredoka', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: none;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        
        .login-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 25px rgba(255, 105, 180, 0.6);
          background: linear-gradient(135deg, #98fb98 0%, #87ceeb 50%, #ff69b4 100%);
        }
        
        .login-button:active {
          transform: translateY(-1px);
        }
        
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 192, 203, 0.8);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 20;
        }
        
        .carousel-nav:hover {
          background: rgba(255, 192, 203, 1);
          transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-nav-prev {
          left: 2rem;
        }
        
        .carousel-nav-next {
          right: 2rem;
        }
        
        .nav-arrow {
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .brand-title {
            font-size: 3rem;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .login-form {
            padding: 2rem;
            margin: 1rem;
          }
          
          .carousel-nav {
            width: 40px;
            height: 40px;
          }
          
          .carousel-nav-prev {
            left: 1rem;
          }
          
          .carousel-nav-next {
            right: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .brand-title {
            font-size: 2.2rem;
          }
          
          .login-form {
            padding: 1.5rem;
          }
        }
      `}</style>
      
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