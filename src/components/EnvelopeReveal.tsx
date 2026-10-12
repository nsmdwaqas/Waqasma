import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playUnboxChime } from '../utils/audio';
import { Language, translations } from '../data/translations';
import { Sparkles, Heart } from 'lucide-react';

interface EnvelopeRevealProps {
  onOpen: () => void;
  lang: Language;
}

export const EnvelopeReveal: React.FC<EnvelopeRevealProps> = ({ onOpen, lang }) => {
  const [isOpening, setIsOpening] = useState(false);
  const t = translations[lang];

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play celestial unbox chime
    playUnboxChime();

    // Fire golden celebration confetti & petals
    const count = 70;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#FDE68A', '#10B981', '#FFFFFF', '#AA771C'],
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.6),
      spread: 60,
      startVelocity: 45,
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.4),
      spread: 100,
      startVelocity: 35,
      decay: 0.92,
      scalar: 1.2,
    });

    // Complete reveal after animation
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-1000">
      {/* Background ambient lighting */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#10B981]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Main Envelope Card */}
      <div
        className={`relative w-full max-w-sm sm:max-w-md transition-all duration-1000 ${
          isOpening
            ? 'scale-105 opacity-0 blur-sm -translate-y-8 pointer-events-none'
            : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* Outer Frosted Glass Envelope Container */}
        <div className="relative rounded-3xl p-6 sm:p-8 apple-glass border border-[#D4AF37]/30 shadow-[0_30px_90px_rgba(0,0,0,0.85)] text-center overflow-hidden">
          {/* Subtle gold foil border shimmer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-[#10B981]/5 pointer-events-none" />

          {/* Top Royal Crest & Calligraphy */}
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="font-arabic text-2xl sm:text-3xl gold-gradient-text tracking-wide mb-1">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent my-2" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37]/80 font-cinzel font-medium">
              Royal Wedding Invitation
            </p>
          </div>

          {/* Couple Monogram Banner */}
          <div className="my-6">
            <h1 className="font-playfair text-2xl sm:text-3xl text-white font-semibold tracking-tight">
              Mohammed Waqas
            </h1>
            <p className="font-cinzel text-xs text-[#D4AF37] my-1 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[#D4AF37]/40" />
              <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="w-8 h-px bg-[#D4AF37]/40" />
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl text-white font-semibold tracking-tight">
              Asma Shajer
            </h2>
            <p className="text-xs text-neutral-400 mt-2 font-cinzel tracking-wider">
              31 · 12 · 2026
            </p>
          </div>

          {/* Interactive Wax Seal Button */}
          <div className="my-8 flex flex-col items-center justify-center">
            <button
              onClick={handleOpenEnvelope}
              disabled={isOpening}
              aria-label="Open wedding invitation"
              className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-full p-2"
            >
              {/* Outer pulsing gold halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 to-[#10B981]/20 blur-md group-hover:scale-125 transition-transform duration-500 animate-pulse-subtle" />

              {/* Royal Gold Wax Seal */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#F9E79F] via-[#D4AF37] to-[#8C6212] p-1 shadow-[0_12px_30px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-105 active:scale-95 flex items-center justify-center">
                {/* Inner Seal Circle with engraved border */}
                <div className="w-full h-full rounded-full border-2 border-[#8C6212]/50 flex flex-col items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#A2771E]">
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#3B2606] tracking-tighter drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
                    W & A
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#4A320A] font-semibold mt-0.5">
                    Nikkah
                  </span>
                </div>
              </div>
            </button>

            {/* Instruction Prompt */}
            <p className="mt-4 text-xs sm:text-sm text-[#D4AF37]/90 font-medium tracking-wide flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.tapToOpen}</span>
            </p>
          </div>

          {/* Bottom Family Note */}
          <div className="pt-4 border-t border-white/[0.06] text-neutral-400 text-[11px] leading-relaxed">
            <p>
              Janab Natamkar Saifullah &amp; Janab Asghar Ali
            </p>
            <p className="text-[10px] text-neutral-500 mt-0.5">
              cordially request the honour of your presence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
