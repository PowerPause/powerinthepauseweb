'use client';

import { useEffect, useRef, useState } from 'react';

export interface Testimonial {
  quote: string;
  name: string;
}

const ROTATE_INTERVAL_MS = 8000;

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current || items.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const goTo = (index: number) => {
    setActiveIndex(((index % items.length) + items.length) % items.length);
  };

  const active = items[activeIndex];

  return (
    <div
      className="max-w-3xl mx-auto text-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      <div className="min-h-[220px] md:min-h-[180px] flex items-center justify-center px-4">
        <blockquote key={activeIndex} className="motion-safe:animate-[fadein_0.6s_ease-out]">
          <p className="font-serif text-2xl md:text-3xl text-navy italic leading-relaxed">
            &ldquo;{active.quote}&rdquo;
          </p>
          <p className="font-sans text-navy/70 mt-6">— {active.name}</p>
        </blockquote>
      </div>

      {items.length > 1 && (
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous testimonial"
            className="text-navy hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded p-2"
          >
            <svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-gold' : 'bg-navy/20'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next testimonial"
            className="text-navy hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded p-2"
          >
            <svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
