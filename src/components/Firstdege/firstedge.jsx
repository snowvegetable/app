import React, { useState, useEffect } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <button className="home_btn">
          <img src="/img/news_icon.svg" style={{ verticalAlign: 'middle' }} className="icon" />
          最新消息
        </button>
        <button className="home_btn">
          <img src="/img/quiz_icon.svg" style={{ verticalAlign: 'middle' }} className="icon" />
          簡答題評分系統
        </button>
        <button className="home_btn">
          <img src="/img/about_icon.svg" style={{ verticalAlign: 'middle' }} className="icon" />
          關於我們
        </button>
        <button className="home_btn">
          <img src="/img/contact_icon.svg" style={{ verticalAlign: 'middle' }} className="icon" />
          聯絡我們
        </button>
        <button className="home_btn" onClick={() => navigate("/login")}>
          <img src="/img/login_icon.svg" style={{ verticalAlign: 'middle' }} className="icon" />
          登入
        </button>
      </div>
      <ImageSlider />
    </div>
  );
}

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/img/image1.jpg",
    "/img/image2.jpg",
    "/img/image3.jpg",
    "/img/image4.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <div className="image-slider">
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index}`} style={{ display: index === currentSlide ? 'block' : 'none' }} />
          </div>
        ))}
      </div>
      <div className="dot-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default App;
