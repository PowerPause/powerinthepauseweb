import { ReactNode } from 'react';

type SectionBackground = 'cream' | 'white' | 'navy';

interface SectionProps {
  background?: SectionBackground;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  background = 'cream',
  children,
  className = '',
  id,
}: SectionProps) {
  const backgroundStyles = {
    cream: 'bg-cream',
    white: 'bg-white',
    navy: 'bg-navy text-cream',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-6 ${backgroundStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
