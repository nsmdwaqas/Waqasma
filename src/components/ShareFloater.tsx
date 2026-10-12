import React from 'react';
import { Share2, QrCode } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ShareFloaterProps {
  onClick: () => void;
  lang: Language;
}

export const ShareFloater: React.FC<ShareFloaterProps> = ({ onClick, lang }) => {
  const t = translations[lang];

  const isUrdu = lang === 'ur';
  const isTamil = lang === 'ta';
  const fontClass = isUrdu ? 'font-urdu text-sm' : isTamil ? 'font-tamil text-xs' : 'font-apple text-xs';

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full apple-glass-pill hover:bg-white/[0.12] transition-all duration-150 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer group active:scale-95 border border-[#25D366]/40 touch-manipulation"
        aria-label={t.shareInvite}
        title={t.shareInvite}
      >
        {/* WhatsApp & Share icon badge */}
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366]">
          <Share2 className="w-3.5 h-3.5" />
        </span>
        <div className={`flex items-center font-semibold text-white ${fontClass}`}>
          <span>{t.shareBtnLabel}</span>
        </div>
      </button>
    </div>
  );
};
