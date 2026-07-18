'use client';

import { useEffect, useRef, useState } from 'react';

export interface Testimonial {
  quote: string;
  name?: string;
  descriptor: string;
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(activeIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(activeIndex + 1);
    }
  };

  return (
    <div
      className="max-w-3xl mx-auto text-center focus:outline-none"
      role="group"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      <div className="relative min-h-[260px] md:min-h-[220px] flex items-center justify-center px-6 md:px-12">
        <span
          aria-hidden="true"
          className="absolute -top-2 md:top-0 left-1/2 -translate-x-1/2 font-playfair text-6xl md:text-7xl text-gold/25 select-none"
        >
          &ldquo;
        </span>
        <blockquote key={activeIndex} className="motion-safe:animate-[fadein_0.9s_ease-out] relative">
          <p className="font-playfair text-2xl md:text-4xl text-navy leading-relaxed">
            {active.quote}
          </p>
          <p className="font-sans text-sm md:text-base text-navy/60 mt-8 tracking-wide">
            {active.name ? `${active.name} — ${active.descriptor}` : active.descriptor}
          </p>
        </blockquote>
      </div>

      {items.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          {items.map((item, index) => (
            <button
              key={item.descriptor + index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                index === activeIndex ? 'bg-gold' : 'bg-navy/15 hover:bg-navy/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
