import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  rotation: number;
}

export const FloralBackground: React.FC = () => {
  // Generate random floating gold and white jasmine/rose petals
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 16,
      size: 14 + Math.random() * 16,
      opacity: 0.2 + Math.random() * 0.45,
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep Space Black AMOLED glow orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/10 via-[#10B981]/5 to-transparent rounded-full blur-[130px] animate-pulse-subtle" />
      <div className="absolute top-[40%] -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#10B981]/8 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#D4AF37]/8 to-transparent rounded-full blur-[140px]" />

      {/* Floating floral petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-40px',
            animation: `fallPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            }}
          >
            {/* Elegant petal curve */}
            <path
              d="M12 2C7 8 4 14 12 22C20 14 17 8 12 2Z"
              fill={petal.id % 2 === 0 ? '#E8C568' : '#F9E79F'}
              fillOpacity={0.65}
            />
            {/* Fine petal spine */}
            <path
              d="M12 4C11.5 9 11.5 15 12 20"
              stroke="#B48A1E"
              strokeWidth="0.5"
              strokeOpacity={0.4}
            />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes fallPetal {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(50vh) translateX(30px) rotate(180deg);
          }
          100% {
            transform: translateY(105vh) translateX(-20px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
