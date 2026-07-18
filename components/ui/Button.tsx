import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  ariaLabel?: string;
}

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-magenta text-white rounded-full hover:bg-magenta/90',
    secondary: 'border-2 border-navy text-navy rounded-full hover:bg-navy hover:text-cream',
    text: 'text-navy underline-offset-4 hover:underline',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
