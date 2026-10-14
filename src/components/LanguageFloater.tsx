import React from 'react';
import { Language } from '../data/translations';
import { Globe } from 'lucide-react';

interface LanguageFloaterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LanguageFloater: React.FC<LanguageFloaterProps> = ({ currentLang, onSelectLang }) => {
  const languages: {
    code: Language;
    label: string;
    englishName: string;
    fontClass: string;
  }[] = [
    {
      code: 'en',
      label: 'English',
      englishName: 'English',
      fontClass: 'font-apple text-xs',
    },
    {
      code: 'ur',
      label: 'اردو',
      englishName: 'Urdu',
      fontClass: 'font-urdu text-[13px] leading-tight font-semibold pt-0.5',
    },
    {
      code: 'ta',
      label: 'தமிழ்',
      englishName: 'Tamil',
      fontClass: 'font-tamil text-xs font-semibold',
    },
  ];

  return (
    <aside aria-label="Language selection" className="fixed top-4 right-4 z-50">
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
                className={`px-3 py-1.5 rounded-full font-medium transition-all duration-150 cursor-pointer touch-manipulation active:scale-95 flex items-center justify-center ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#1F1404] font-semibold shadow-md scale-100'
                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                } ${l.fontClass}`}
                aria-pressed={isActive}
                aria-label={`Switch to ${l.englishName} (${l.label})`}
                title={`${l.label} (${l.englishName})`}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
