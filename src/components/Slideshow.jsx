import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    text: "",
    lyric: "Tu, tu hai wahi, dil ne jise apna kaha...",
    gradient: "linear-gradient(135deg, #ff6b9d, #ff8fab)",
    image: "/peanut2/memory1.jpg"
  },
  {
    id: 2,
    text: "", 
    lyric: "Tu hai jahan, main hoon wahan...",
    gradient: "linear-gradient(135deg, #a8e6cf, #dcedc1)",
    image: "/peanut2/memory2.jpg"
  },
  {
    id: 3,
    text: "",
    lyric: "Ab toh yeh jeena tere bin hai saza.",
    gradient: "linear-gradient(135deg, #ffd3b6, #ffaaa5)",
    image: "/peanut2/memory3.JPG"
  },
  {
    id: 4,
    text: "",
    lyric: "Ohhh mil jaaye iss tarah...",
    gradient: "linear-gradient(135deg, #e8b4f3, #f8d7da)",
    image: "/peanut2/memory4.JPG"
  },
  {
    id: 5,
    text: "",
    lyric: " Doh lehre jis tarah...",
    gradient: "linear-gradient(135deg, #c9e4ca, #87ceeb)",
    image: "/peanut2/memory5.JPG"
  },
  {
    id: 6,
    text: "",
    lyric: "phir ho naah judaa, Haan ye vaada raha...",
    gradient: "linear-gradient(135deg, #f4c4bc, #d8bfd8)",
    image: "/peanut2/memory6.JPG"
  }
];

function Slideshow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  // Preload next image
  useEffect(() => {
    if (currentSlide < slides.length - 1) {
      const nextImage = new Image();
      nextImage.src = slides[currentSlide + 1].image;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentSlide < slides.length) {
      const timer = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowFinal(true);
    }
  }, [currentSlide, isPlaying]);

  const startSlideshow = () => {
    setIsPlaying(true);
    setCurrentSlide(0);
  };

  return (
    <section className="screen intro">

      {!isPlaying && (
        <div className="intro-content">
          <div className="heart">❤️</div>
          <h1>I made something for you...</h1>
          <p>Click the button to see our memories</p>

          <button className="click-btn" onClick={startSlideshow}>
            Click Me
          </button>
        </div>
      )}

      {isPlaying && currentSlide < slides.length && (
        <div className="photo-show">

          <div className="photo-slide active">
            <span className="heart-bg">❤️</span>
            <span className="heart-bg">💕</span>
            <span className="heart-bg">💖</span>
            <span className="heart-bg">💗</span>
            <span className="heart-bg">💝</span>
            <span className="heart-bg">💞</span>
            <span className="heart-bg">💓</span>
            <span className="heart-bg">❤️</span>

            <div
              className="photo-placeholder"
              style={{ 
                background: slides[currentSlide].gradient,
                position: 'relative'
              }}
            >
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].text}
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
                onError={(e) => {
                  console.log('Image failed to load:', slides[currentSlide].image);
                  e.target.style.display = 'none';
                }}
              />
              <div className="placeholder-text">
                {slides[currentSlide].text}
              </div>
            </div>

            <p className="lyric">{slides[currentSlide].lyric}</p>

          </div>

        </div>
      )}

      {showFinal && (
        <div className="final-message">
          <span className="heart-bg">❤️</span>
          <span className="heart-bg">💕</span>
          <span className="heart-bg">💖</span>
          <span className="heart-bg">💗</span>
          <span className="heart-bg">💝</span>
          <span className="heart-bg">💞</span>
          <span className="heart-bg">💓</span>
          <span className="heart-bg">❤️</span>
          
          <h4>Sanu, from the moment you came into my life, everything started feeling brighter and more meaningful. You are the calm in my chaos, the smile that appears on my face even on the hardest days, and the warmth that makes every moment feel special. Being with you has taught me what love truly means, not just the beautiful moments, but the small everyday things that make life worth living. Every memory we create, every laugh we share, and every promise we keep adds another page to the story I want to keep writing with you forever. You are not just someone I love; you are someone who makes my world feel complete. No matter where life takes us, I want you to always remember that you are deeply cherished, endlessly appreciated, and loved more than words can ever fully express. Thank you for being you, for standing beside me, and for filling my life with a kind of happiness that I never knew I was missing. My heart will always choose you, again and again, today, tomorrow, and for all the days that are yet to come. I love you so much, Sanu.</h4>
          <h1>Iloveyousomuch PEANUT.</h1>
        </div>
      )}

    </section>
  );
}

export default Slideshow;