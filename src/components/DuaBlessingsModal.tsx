import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { X, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DuaBlessingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onAddDua: (name: string, message: string) => void;
}

export const DuaBlessingsModal: React.FC<DuaBlessingsModalProps> = ({
  isOpen,
  onClose,
  lang,
  onAddDua,
}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    onAddDua(name.trim(), message.trim());
    setSubmitted(true);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#10B981', '#FFFFFF'],
    });

    setTimeout(() => {
      setName('');
      setMessage('');
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleUsePredefinedDua = () => {
    setMessage("بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ\nMay Allah shower His divine blessings upon both of you and unite you in goodness.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl apple-glass border border-[#D4AF37]/30 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/[0.05] transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-14 h-14 text-[#10B981] mb-3 animate-bounce" />
            <h4 className="font-playfair text-xl font-bold text-white mb-2">
              Jazakallah Khairan
            </h4>
            <p className="text-sm text-neutral-300">
              {t.blessingSentSuccess}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-5">
              <div className="w-10 h-10 mx-auto rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                {t.duaTitle}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
                {t.duaSubtitle}
              </p>
            </div>

            {/* Quick Sunnah Dua Shortcut */}
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left">
              <div className="flex items-center justify-between text-[11px] text-[#D4AF37] font-medium mb-1.5">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Sunnah Wedding Dua
                </span>
                <button
                  type="button"
                  onClick={handleUsePredefinedDua}
                  className="text-[10px] text-white hover:text-[#D4AF37] underline cursor-pointer"
                >
                  Insert Dua
                </button>
              </div>
              <p className="font-arabic text-xs sm:text-sm text-neutral-300 leading-relaxed text-right">
                بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
              </p>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                {t.yourNamePlaceholder}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tariq Ahmed & Family"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Dua / Message Area */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                {t.yourDuaPlaceholder}
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="May Allah bless this union with eternal love, barakah, and happiness..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B48A1E] hover:from-[#E5C158] hover:to-[#C59B2E] text-[#1E1303] font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/15 transition-transform active:scale-[0.98] cursor-pointer"
            >
              <span>{t.sendBlessingBtn}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
