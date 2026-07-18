'use client';

import { useEffect, useState } from 'react';

interface Circle {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
}

export function DecorativeCircles({ count = 8 }: { count?: number }) {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const generatedCircles: Circle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 150 + 80, // 80-230px
      opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2 opacity (very subtle)
    }));
    setCircles(generatedCircles);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full border-2 border-gold"
          style={{
            left: circle.left,
            top: circle.top,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            opacity: circle.opacity,
          }}
        />
      ))}
    </div>
  );
}
