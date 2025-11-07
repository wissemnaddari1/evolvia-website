import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const carouselData = [
  {
    title: "Together for a Cleaner, Greener Future",
    description: "Evolvia empowers communities to protect Tunisia's coasts and environment through innovative conservation programs and community engagement.",
    background: "/images/caro1.jpg",
  },
  {
    title: "Protecting Our Marine Ecosystems",
    description: "Join us in preserving the beauty and biodiversity of Tunisia's Mediterranean waters for future generations.",
    background: "/images/caro2.jpg",
  },
  {
    title: "Community-Driven Conservation",
    description: "Building a sustainable future through local action, education, and global impact initiatives.",
    background: "/images/caro3.jpg",
  }
];

function HeroSection() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const length = carouselData.length;

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      {carouselData.map((slide, index) => (
        <div 
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          key={index}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 140, 134, 0.7) 0%, rgba(0, 168, 181, 0.6) 100%), url(${slide.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button 
              className="hero-cta"
              onClick={() => navigate('/involved')}
            >
              Join Our Mission
              <span className="button-shine"></span>
            </button>
          </div>
        </div>
      ))}
      
      <div className="carousel-nav">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button 
        className="carousel-arrow prev" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        className="carousel-arrow next" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>
    </section>
  );
}

export default HeroSection;