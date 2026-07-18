import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-md hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-white border border-gold/20 rounded-sm p-8 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
