import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { MapPin, Clock, Calendar, ExternalLink, Check, Copy } from 'lucide-react';
import { downloadIcsCalendar } from '../utils/calendar';

interface EventCardProps {
  type: 'nikkah' | 'valima';
  title: string;
  time: string;
  description: string;
  mapUrl: string;
  lang: Language;
}

export const EventCard: React.FC<EventCardProps> = ({
  type,
  title,
  time,
  description,
  mapUrl,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mapUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-3xl apple-glass-card p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40 group">
      {/* Ambient gradient top aura */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none ${
          type === 'nikkah'
            ? 'bg-gradient-to-br from-[#10B981]/20 to-transparent'
            : 'bg-gradient-to-br from-[#D4AF37]/20 to-transparent'
        }`}
      />

      {/* Header with Badge & Event Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                type === 'nikkah' ? 'bg-[#10B981]' : 'bg-[#D4AF37]'
              }`}
            />
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-cinzel">
              {type === 'nikkah' ? 'Ceremony · Solemnization' : 'Reception · Banquet'}
            </span>
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>

        {/* Time Badge in Apple Glass styling */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-[#D4AF37] self-start sm:self-auto">
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{time}</span>
        </div>
      </div>

      {/* Event Details and Vector Venue Accent */}
      <div className="my-5 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
        <p className="text-sm text-neutral-300 leading-relaxed max-w-lg">
          {description}
        </p>

        {/* Architectural Mosque/Banquet Motif */}
        <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] flex items-center justify-center p-3 text-[#D4AF37]/80">
          {type === 'nikkah' ? (
            /* Dome & Minaret Arch SVG */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M12 3v2" />
              <path d="M12 5c-4 2-6 5.5-6 10v6h12v-6c0-4.5-2-8-6-10z" />
              <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
              <path d="M3 21h18" />
            </svg>
          ) : (
            /* Celebration Royal Banquet Arch SVG */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M12 2l3 5h5l-4 4 2 6-6-3-6 3 2-6-4-4h5z" />
              <path d="M4 22h16" />
              <path d="M7 22v-4a5 5 0 0 1 10 0v4" />
            </svg>
          )}
        </div>
      </div>

      {/* Interactive Action Buttons */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
        {/* Main 1-tap Google Maps Button */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[180px] h-11 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B48A1E] hover:from-[#E5C158] hover:to-[#C59B2E] text-[#1E1303] font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/15 transition-all active:scale-[0.98] cursor-pointer"
        >
          <MapPin className="w-4 h-4 fill-current text-[#1E1303]" />
          <span>{t.getDirections}</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>

        {/* Add to Calendar Button */}
        <button
          onClick={downloadIcsCalendar}
          className="h-11 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-medium text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
          title={t.addToCalendar}
        >
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="hidden sm:inline">{t.addToCalendar}</span>
        </button>

        {/* Copy Maps Link Button */}
        <button
          onClick={handleCopyLink}
          className="h-11 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-medium text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
          title={copied ? t.copied : t.copyLink}
          aria-label="Copy location link"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#10B981]" />
          ) : (
            <Copy className="w-4 h-4 text-neutral-400" />
          )}
        </button>
      </div>
    </div>
  );
};
