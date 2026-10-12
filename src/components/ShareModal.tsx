import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Language, translations } from '../data/translations';
import { X, Share2, Copy, Check, MessageSquare } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, lang }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    if (isOpen) {
      const inviteUrl = window.location.href;
      QRCode.toDataURL(inviteUrl, {
        width: 320,
        margin: 2,
        color: {
          dark: '#050505',
          light: '#F5E6C8',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('Failed to generate QR code', err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `${t.whatsappMessage}\n\n💍 *Mohammed Waqas & Asma Shajer*\n🗓️ *31st December 2026*\n📍 Nikkah & Valima Celebrations\n\n🔗 ${currentUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl apple-glass border border-[#D4AF37]/30 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/[0.05] transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mb-3">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
            {t.shareInvite}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs">
            Circulate this sacred invitation to family and friends via WhatsApp or scan the QR code.
          </p>
        </div>

        {/* QR Code Canvas Frame */}
        <div className="my-5 flex justify-center">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-[#F5E6C8] to-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.2)]">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="QR Code for Wedding Invitation"
                className="w-48 h-48 rounded-xl object-contain"
              />
            ) : (
              <div className="w-48 h-48 rounded-xl bg-neutral-900 flex items-center justify-center text-xs text-neutral-400">
                Generating QR...
              </div>
            )}
          </div>
        </div>

        <p className="text-[11px] text-[#D4AF37] font-medium tracking-wide uppercase mb-6 font-cinzel">
          Scan with any camera or WhatsApp
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* WhatsApp Direct Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 transition-transform active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Share directly on WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="w-full h-11 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#10B981] font-semibold">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>{t.copyLink}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
