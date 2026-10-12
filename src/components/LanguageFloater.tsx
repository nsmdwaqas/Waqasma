import React from 'react';
import { Language } from '../data/translations';
import { Globe } from 'lucide-react';

interface LanguageFloaterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LanguageFloater: React.FC<LanguageFloaterProps> = ({ currentLang, onSelectLang }) => {
  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'ur', label: 'اردو', native: 'Urdu' },
    { code: 'ta', label: 'தமிழ்', native: 'Tamil' },
  ];

  return (
    <div className="fixed top-4 right-4 z-40">
      <div className="flex items-center p-1 rounded-full apple-glass-pill shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/[0.12]">
        <div className="pl-2 pr-1 text-[#D4AF37]" aria-hidden="true">
          <Globe className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center gap-1">
          {languages.map((l) => {
            const isActive = currentLang === l.code;
            return (
              <button
                key={l.code}
                onClick={() => onSelectLang(l.code)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer touch-manipulation active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#1F1404] font-semibold shadow-md scale-100'
                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                } ${l.code === 'ur' ? 'font-urdu text-[12px] leading-tight' : l.code === 'ta' ? 'font-tamil text-[11px]' : ''}`}
                aria-pressed={isActive}
                title={l.native}
              >
                {l.native}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
