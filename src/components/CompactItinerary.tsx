import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { MapPin, Clock, Calendar, ExternalLink, Check, Copy } from 'lucide-react';
import { downloadIcsCalendar } from '../utils/calendar';

interface CompactItineraryProps {
  lang: Language;
}

export const CompactItinerary: React.FC<CompactItineraryProps> = ({ lang }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const t = translations[lang];

  const nikkahUrl = 'https://maps.app.goo.gl/cT3y3uiiMhnhAhvy9';
  const valimaUrl = 'https://maps.app.goo.gl/RBRaTLX11wjGg14Z8';

  const copyUrl = (url: string, key: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="w-full rounded-2xl apple-glass-card p-4 sm:p-5 border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
      {/* Date Header Strip */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-cinzel text-xs sm:text-sm font-bold text-[#FDE68A] tracking-wider uppercase">
              {t.weddingDateHeader}
            </h3>
          </div>
        </div>

        {/* Quick Add to Calendar button */}
        <button
          onClick={downloadIcsCalendar}
          className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-[11px] font-medium text-neutral-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          title={t.addToCalendar}
        >
          <Calendar className="w-3 h-3 text-[#D4AF37]" />
          <span className="hidden sm:inline">{t.addToCalendar}</span>
        </button>
      </div>

      {/* Two Compact Event Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Nikkah Block */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between hover:border-[#10B981]/30 transition-colors">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
                  {t.nikkahTitle}
                </span>
              </div>
              <p className="font-playfair text-sm sm:text-base font-bold text-white">
                {t.nikkahTime}
              </p>
            </div>

            <button
              onClick={() => copyUrl(nikkahUrl, 'nikkah')}
              className="p-1 text-neutral-400 hover:text-white rounded"
              title="Copy location link"
            >
              {copiedLink === 'nikkah' ? (
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <a
            href={nikkahUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-8 px-3 rounded-lg bg-gradient-to-r from-[#10B981]/20 to-[#10B981]/10 hover:from-[#10B981]/30 hover:to-[#10B981]/20 border border-[#10B981]/40 text-[#6EE7B7] font-medium text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-[#10B981]" />
            <span>{t.getDirections}</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </a>
        </div>

        {/* Valima Block */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-medium">
                  {t.valimaTitle}
                </span>
              </div>
              <p className="font-playfair text-sm sm:text-base font-bold text-white flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#D4AF37]" />
                <span>12:00 PM</span>
                <span className="text-[10px] text-neutral-400 font-normal ml-1">
                  (After Zuhar)
                </span>
              </p>
            </div>

            <button
              onClick={() => copyUrl(valimaUrl, 'valima')}
              className="p-1 text-neutral-400 hover:text-white rounded"
              title="Copy location link"
            >
              {copiedLink === 'valima' ? (
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <a
            href={valimaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-8 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37]/25 to-[#D4AF37]/15 hover:from-[#D4AF37]/35 hover:to-[#D4AF37]/25 border border-[#D4AF37]/50 text-[#FDE68A] font-medium text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            <span>{t.getDirections}</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};
