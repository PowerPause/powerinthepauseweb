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
    'top-left': '-top-8 -left-8',
    'top-right': '-top-8 -right-8',
    'bottom-left': '-bottom-8 -left-8',
    'bottom-right': '-bottom-8 -right-8',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none opacity-60 ${className}`}
      aria-hidden="true"
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
