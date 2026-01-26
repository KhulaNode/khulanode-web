'use client';

import { useState, useEffect } from 'react';

const videos = [
  '/videos/5585983-hd_1080_1920_30fps.mp4',
  '/videos/3253077-uhd_3840_2160_25fps.mp4',
  '/videos/7987514-uhd_3840_2160_25fps.mp4',
  '/videos/5585939-hd_1920_1080_25fps.mp4',
  '/videos/8523655-hd_1920_1080_25fps.mp4',
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 4000); // Change video every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <>
      {/* Videos */}
      {videos.map((video, index) => (
        <video
          key={video}
          src={video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
        />
      ))}

      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-brand-blue/70 mix-blend-multiply z-10 pointer-events-none"></div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'w-8 h-3 bg-white rounded-full'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
