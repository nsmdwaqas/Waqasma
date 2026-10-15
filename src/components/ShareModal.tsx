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

  const getPublicShareUrl = (): string => {
    if (typeof window === 'undefined') return 'https://ais-dev-fwru2o6zrcaaozjoec3zxz-933593385806.asia-east1.run.app';
    let url = window.location.href;
    try {
      const u = new URL(url);
      u.search = '';
      u.hash = '';
      return u.toString().replace(/\/$/, '');
    } catch {
      return url;
    }
  };

  const currentUrl = getPublicShareUrl();
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(currentUrl, {
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
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleNativeShare = async () => {
    if (!canNativeShare) return;
    try {
      await navigator.share({
        title: '💍 Mohammed Waqas & Asma Shajer — Wedding Invitation',
        text: 'We cordially solicit your gracious presence, blessings & prayers at the Nikkah & Valima celebration on Thursday, 31st December 2026.',
        url: currentUrl,
      });
    } catch (err) {
      // User cancelled share or not supported
      console.log('Share dismissed', err);
    }
  };

  const handleWhatsAppShare = () => {
    const message = t.whatsappMessage.includes('{link}')
      ? t.whatsappMessage.replace('{link}', currentUrl)
      : `${t.whatsappMessage}\n\n🔗 ${currentUrl}`;
    const text = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const isUrdu = lang === 'ur';
  const isTamil = lang === 'ta';
  const titleFont = isUrdu ? 'font-urdu font-bold' : isTamil ? 'font-tamil font-bold' : 'font-playfair font-bold';

  return (
    <div
      dir={isUrdu ? 'rtl' : 'ltr'}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 ${
        isUrdu ? 'font-urdu' : isTamil ? 'font-tamil' : ''
      }`}
    >
      <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl apple-glass border border-[#D4AF37]/30 p-6 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-center max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/[0.05] transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mb-2.5">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className={`${titleFont} text-xl sm:text-2xl text-white`}>
            {t.shareInvite}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs leading-relaxed">
            {t.shareModalDesc}
          </p>
        </div>

        {/* QR Code Canvas Frame */}
        <div className="my-3 flex justify-center">
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#F5E6C8] to-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.2)]">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="QR Code for Wedding Invitation"
                className="w-40 h-40 sm:w-44 sm:h-44 rounded-xl object-contain"
              />
            ) : (
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-xl bg-neutral-900 flex items-center justify-center text-xs text-neutral-400">
                Generating QR...
              </div>
            )}
          </div>
        </div>

        <p className="text-[11px] text-[#D4AF37] font-medium tracking-wide uppercase mb-3">
          {t.scanQrInstruction}
        </p>

        {/* Link URL Display */}
        <div className="mb-3 px-3 py-2 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between text-left">
          <span className="text-[11px] text-neutral-400 truncate max-w-[220px] font-mono select-all">
            {currentUrl}
          </span>
          <button
            onClick={handleCopyLink}
            className="text-[11px] text-[#D4AF37] font-semibold hover:underline shrink-0 ml-2 cursor-pointer"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        {/* Preview Readiness Badge */}
        <div className="mb-3 p-2 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[10px] text-neutral-300 text-left flex items-start gap-2">
          <span className="text-[#10B981] text-xs">●</span>
          <p className="leading-tight">
            <span className="text-[#D4AF37] font-semibold">Meta Preview Active:</span> Invitation image, title & ceremony details will appear automatically when shared on WhatsApp, Instagram, Telegram & iMessage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Native iOS / Android Share Sheet (If supported on device) */}
          {canNativeShare && (
            <button
              onClick={handleNativeShare}
              className="w-full h-11 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:opacity-95 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-transform active:scale-[0.98] cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-black" />
              <span>Share via iPhone / Device Sheet</span>
            </button>
          )}

          {/* WhatsApp Direct Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="w-full h-11 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-transform active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.shareOnWhatsappBtn}</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="w-full h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
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
