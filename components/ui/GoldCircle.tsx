import Image from 'next/image';

interface GoldCircleProps {
  size?: number;
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export function GoldCircle({ 
  size = 150, 
  className = '',
  position = 'top-right'
}: GoldCircleProps) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none z-10 ${className}`}
      aria-hidden="true"
      style={{ opacity: 0.5 }}
    >
      <Image
        src="/images/pause-gold-circle.png"
        alt=""
        width={size}
        height={size}
        className="w-full h-full"
        loading="lazy"
        priority={false}
      />
    </div>
  );
}
