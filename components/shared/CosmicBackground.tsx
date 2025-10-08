'use client';

import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function CosmicBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
}

