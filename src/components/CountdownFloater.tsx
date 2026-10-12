import React, { useState, useEffect } from 'react';
import { Language, translations } from '../data/translations';
import { Calendar, ChevronDown, ChevronUp, Clock, Sparkles } from 'lucide-react';
import { downloadIcsCalendar } from '../utils/calendar';

interface CountdownFloaterProps {
  lang: Language;
}

export const CountdownFloater: React.FC<CountdownFloaterProps> = ({ lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = translations[lang];

  // Target: 31 Dec 2026, 11:45 AM IST (UTC+05:30)
  const targetTime = new Date('2026-12-31T11:45:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, targetTime - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.max(0, targetTime - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const isUrdu = lang === 'ur';
  const isTamil = lang === 'ta';
  const headerFont = isUrdu ? 'font-urdu font-bold' : isTamil ? 'font-tamil font-bold' : 'font-cinzel font-semibold';
  const unitLabelFont = isUrdu ? 'font-urdu text-[11px]' : isTamil ? 'font-tamil text-[11px]' : 'text-[10px] uppercase font-cinzel';

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] transition-all duration-300">
      {/* Expanded Details Card */}
      {isExpanded && (
        <div className="mb-2 p-4 rounded-2xl apple-glass-card border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-2 duration-200 w-80 max-w-[calc(100vw-2rem)]">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Clock className="w-4 h-4" />
              <span className={`text-xs tracking-wider uppercase ${headerFont}`}>
                {t.weddingDateHeader}
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg"
              aria-label="Collapse countdown"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Digit Units */}
          <div className="grid grid-cols-4 gap-2 text-center my-3">
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-white tabular-nums">
                {timeLeft.days}
              </span>
              <span className={`block text-neutral-400 tracking-wider mt-0.5 ${unitLabelFont}`}>
                {t.countdownDays}
              </span>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className={`block text-neutral-400 tracking-wider mt-0.5 ${unitLabelFont}`}>
                {t.countdownHours}
              </span>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className={`block text-neutral-400 tracking-wider mt-0.5 ${unitLabelFont}`}>
                {t.countdownMinutes}
              </span>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className={`block text-neutral-400 tracking-wider mt-0.5 ${unitLabelFont}`}>
                {t.countdownSeconds}
              </span>
            </div>
          </div>

          {/* Quick Action */}
          <button
            onClick={downloadIcsCalendar}
            className={`w-full mt-2 py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 to-[#10B981]/20 hover:from-[#D4AF37]/30 hover:to-[#10B981]/30 border border-[#D4AF37]/40 text-xs font-medium text-white flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              isUrdu ? 'font-urdu' : isTamil ? 'font-tamil' : ''
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.addToCalendar}</span>
          </button>
        </div>
      )}

      {/* Dynamic Floater Pill */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full apple-glass-pill hover:bg-white/[0.12] transition-all duration-150 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer group active:scale-95 border border-[#D4AF37]/30 touch-manipulation"
        aria-label="Toggle day countdown timer details"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <div className="flex items-baseline gap-1.5 text-left">
          <span className="font-cinzel text-base font-bold gold-gradient-text tabular-nums">
            {timeLeft.days}
          </span>
          <span className={`text-xs font-medium text-neutral-200 ${isUrdu ? 'font-urdu' : isTamil ? 'font-tamil' : ''}`}>
            {t.countdownDaysLeft}
          </span>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
        )}
      </button>
    </div>
  );
};
