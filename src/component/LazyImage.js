import React, { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    // Use Intersection Observer for better control
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading earlier for smoother experience
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    // Delay hiding placeholder for smoother transition
    setTimeout(() => {
      setShowPlaceholder(false);
    }, 200);
  };

  return (
    <div className={`lazy-image-container ${className}`} ref={imgRef}>
      {showPlaceholder && (
        <div className={`image-placeholder ${isLoaded ? 'fade-out' : ''}`}>
          <div className="image-skeleton"></div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={handleLoad}
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;

