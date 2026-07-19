interface TestimonialProps {
  quote: string;
  name?: string;
  descriptor: string;
}

export function Testimonial({ quote, name, descriptor }: TestimonialProps) {
  return (
    <blockquote className="max-w-2xl my-10 relative">
      <span
        aria-hidden="true"
        className="absolute -top-6 -left-2 font-playfair text-5xl text-gold/25 select-none"
      >
        &ldquo;
      </span>
      <p className="font-playfair text-xl md:text-2xl text-navy leading-relaxed relative">
        {quote}
      </p>
      <p className="font-sans text-sm text-navy/60 mt-4 tracking-wide">
        {name ? `${name} — ${descriptor}` : descriptor}
      </p>
    </blockquote>
  );
}
