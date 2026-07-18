'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  animationDelay: string;
}

export function Stars({ count = 30 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      animationDelay: `${Math.random() * 3}s`,
    }));
    setStars(generatedStars);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L10.7841 6.78885L15.8779 2.93893L12.3647 9.13176L19 10L12.3647 10.8682L15.8779 17.0611L10.7841 13.2112L10 20L9.21585 13.2112L4.12215 17.0611L7.63525 10.8682L1 10L7.63525 9.13176L4.12215 2.93893L9.21585 6.78885L10 0Z"
              fill="#C6A55C"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
