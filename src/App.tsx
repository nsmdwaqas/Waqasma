import React, { useState, useRef, useEffect } from 'react';
import { Language, translations } from './data/translations';
import { FloralBackground } from './components/FloralBackground';
import { EnvelopeReveal } from './components/EnvelopeReveal';
import { CountdownFloater } from './components/CountdownFloater';
import { LanguageFloater } from './components/LanguageFloater';
import { ShareFloater } from './components/ShareFloater';
import { ShareModal } from './components/ShareModal';
import { startAmbientSound, stopAmbientSound, playFlipSound } from './utils/audio';
import {
  Volume2,
  VolumeX,
  Heart,
  RotateCcw,
  Calendar,
  MapPin,
  ExternalLink,
  Clock,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchStartTime = useRef<number>(0);
  const isTouchSwiping = useRef<boolean>(false);
  const t = translations[lang];

  const handleOpenEnvelope = () => {
    setHasOpenedEnvelope(true);
    startAmbientSound();
    setIsAudioPlaying(true);
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      stopAmbientSound();
      setIsAudioPlaying(false);
    } else {
      startAmbientSound();
      setIsAudioPlaying(true);
    }
  };

  const flipCard = (targetState?: boolean) => {
    const nextState = targetState !== undefined ? targetState : !isFlipped;
    if (nextState !== isFlipped) {
      playFlipSound();
      setIsFlipped(nextState);
    }
  };

  // Keyboard navigation for flipping (Arrow keys / Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!hasOpenedEnvelope || isShareModalOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        flipCard(true);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        flipCard(false);
      } else if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        flipCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasOpenedEnvelope, isFlipped, isShareModalOpen]);

  // Touch gesture handling - ultra smooth, prevents browser address bar jumping & layout shift
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    isTouchSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = Math.abs(currentX - touchStartX.current);
    const deltaY = Math.abs(currentY - touchStartY.current);

    if (deltaX > 8 || deltaY > 8) {
      isTouchSwiping.current = true;
    }

    // Prevent vertical page rubber-banding / browser bar jumping
    if (e.cancelable) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const elapsed = Date.now() - touchStartTime.current;

    // Direct tap on card face (outside buttons / links)
    if (absX < 14 && absY < 14 && elapsed < 350) {
      const target = e.target as HTMLElement;
      if (!target.closest('button, a, input, select, textarea')) {
        flipCard();
        return;
      }
    }

    // Smooth horizontal swipe detection
    if (absX > 20 && (absX > absY * 0.5 || elapsed < 400)) {
      if (deltaX < 0) {
        // Swiped Left
        flipCard(!isFlipped ? true : false);
      } else {
        // Swiped Right
        flipCard(isFlipped ? false : true);
      }
    }
  };

  // Tap-to-flip handler on card background
  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Don't flip if user clicked an explicit link or button
    if (target.closest('button, a, input, select, textarea')) return;
    flipCard();
  };

  const copyUrl = (url: string, key: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const nikkahUrl = 'https://maps.app.goo.gl/cT3y3uiiMhnhAhvy9';
  const valimaUrl = 'https://maps.app.goo.gl/RBRaTLX11wjGg14Z8';
  const isRtl = lang === 'ur';

  // Dynamic typography classes to ensure Urdu and Tamil render with their native high-legibility Google fonts
  const displayHeadingFont = lang === 'ur' ? 'font-urdu font-bold' : lang === 'ta' ? 'font-tamil font-bold' : 'font-playfair font-bold';
  const displayKickerFont = lang === 'ur' ? 'font-urdu font-semibold' : lang === 'ta' ? 'font-tamil font-semibold' : 'font-cinzel font-semibold';
  const eventTitleFont = lang === 'ur' ? 'font-urdu font-bold' : lang === 'ta' ? 'font-tamil font-bold' : 'font-cinzel font-bold';
  const buttonFont = lang === 'ur' ? 'font-urdu text-xs font-semibold' : lang === 'ta' ? 'font-tamil text-xs font-semibold' : 'font-apple text-xs font-semibold';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`fixed inset-0 w-full h-full bg-[#050505] text-[#F3F4F6] overflow-hidden select-none overscroll-none no-scrollbar flex flex-col items-center justify-center p-3 sm:p-4 touch-manipulation ${
        lang === 'ur' ? 'font-urdu' : lang === 'ta' ? 'font-tamil' : 'font-apple'
      }`}
    >
      {/* Ambient Floral & Subtle AMOLED Background */}
      <FloralBackground />

      {/* Interactive Unboxing Envelope Gate */}
      {!hasOpenedEnvelope && (
        <EnvelopeReveal onOpen={handleOpenEnvelope} lang={lang} />
      )}

      {/* Persistent Floating Controls (4 Screen Corners) */}
      {hasOpenedEnvelope && (
        <>
          {/* Day Countdown Floater (Bottom Left) */}
          <CountdownFloater lang={lang} />

          {/* Quick Share / QR Floater (Bottom Right) */}
          <ShareFloater onClick={() => setIsShareModalOpen(true)} lang={lang} />

          {/* Multilingual Floater (Top Right) */}
          <LanguageFloater currentLang={lang} onSelectLang={setLang} />

          {/* Audio & Replay Floating Controls (Top Left) */}
          <div className="fixed top-4 left-4 z-40 flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full apple-glass-pill text-xs text-neutral-300 hover:text-white border border-white/[0.1] shadow-lg cursor-pointer transition-transform active:scale-95 touch-manipulation"
              aria-label={isAudioPlaying ? t.audioOn : t.audioOff}
              title={isAudioPlaying ? t.audioOn : t.audioOff}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[11px] hidden sm:inline">{t.audioOn}</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-[11px] hidden sm:inline">{t.audioOff}</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setHasOpenedEnvelope(false);
                setIsFlipped(false);
              }}
              className="p-2 rounded-full apple-glass-pill text-neutral-400 hover:text-white border border-white/[0.1] shadow-lg cursor-pointer transition-transform active:scale-95 touch-manipulation"
              title={t.replayOpening}
              aria-label={t.replayOpening}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}

      {/* Main 3D Screen-Fitting Interactive Card Stage */}
      {hasOpenedEnvelope && (
        <main
          className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] flex flex-col items-center justify-center my-auto perspective-1500"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 3D Card Flipping Canvas with Rock-Solid Fixed Height */}
          <div
            className={`relative w-full h-[540px] max-h-[calc(100svh-5rem)] min-h-[460px] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-3d ${
              isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
            }`}
          >
            {/* ========================================================== */}
            {/* FACE 1 (FRONT): ROYAL COUPLE & SACRED UNION               */}
            {/* ========================================================== */}
            <div
              onClick={handleCardClick}
              className="absolute inset-0 w-full h-full backface-hidden rounded-3xl apple-glass border border-[#D4AF37]/35 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer touch-manipulation"
            >
              {/* Ambient Radial Golden Shimmer */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[90px] pointer-events-none" />

              {/* Top Inscription Header */}
              <div className="text-center shrink-0">
                <p className="font-arabic text-lg sm:text-xl gold-gradient-text tracking-wide mb-0.5">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#D4AF37]/80 ${displayKickerFont}`}>
                  {t.invitationTitle}
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 max-w-xs mx-auto leading-relaxed">
                  {t.togetherWithFamilies}
                </p>
              </div>

              {/* Middle Centerpiece: Prominent Couple Names with Fixed Spacing */}
              <div className="my-auto py-1 text-center space-y-2 relative z-10">
                {/* Groom */}
                <div className="space-y-0.5">
                  <span className={`text-[10px] uppercase tracking-widest text-[#D4AF37] block ${displayKickerFont}`}>
                    {t.groomTitle}
                  </span>
                  <h1 className={`${displayHeadingFont} text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md leading-tight`}>
                    {t.groomName}
                  </h1>
                  <p className="text-xs text-neutral-300">
                    <span className="text-neutral-400">{t.groomSonOf} </span>
                    <span className="font-semibold text-white">{t.groomFatherName}</span>
                  </p>
                </div>

                {/* Interlocking Monogram / Heart Motif */}
                <div className="flex items-center justify-center gap-2.5 py-0.5">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
                  <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner">
                    <Heart className="w-3 h-3 fill-[#D4AF37]" />
                  </div>
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
                </div>

                {/* Bride */}
                <div className="space-y-0.5">
                  <span className={`text-[10px] uppercase tracking-widest text-[#D4AF37] block ${displayKickerFont}`}>
                    {t.brideTitle}
                  </span>
                  <h2 className={`${displayHeadingFont} text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md leading-tight`}>
                    {t.brideName}
                  </h2>
                  <p className="text-xs text-neutral-300">
                    <span className="text-neutral-400">{t.brideDaughterOf} </span>
                    <span className="font-semibold text-white">{t.brideFatherName}</span>
                  </p>
                </div>

                {/* Auspicious Wedding Date (Above the Divider Line) */}
                <div className="pt-2 pb-0.5">
                  <p className={`${displayKickerFont} text-xs sm:text-sm font-bold text-[#FDE68A] tracking-wider`}>
                    {t.weddingDateHeader}
                  </p>
                </div>
              </div>

              {/* Quranic Verse Inscription (Below the Divider Line) */}
              <div className="shrink-0 text-center pt-2.5 pb-0.5 border-t border-white/[0.08] space-y-1">
                <p className="font-arabic text-xs sm:text-sm text-[#E8C568] leading-relaxed">
                  {t.quranicVerseArabic}
                </p>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 italic line-clamp-2 leading-relaxed">
                  &ldquo;{t.quranicVerseTranslation}&rdquo;
                </p>
              </div>

              {/* Bottom Flip Trigger Action */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  flipCard(true);
                }}
                className={`mt-2 w-full py-2.5 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-[#D4AF37]/30 text-[#FDE68A] flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] touch-manipulation group shrink-0 ${buttonFont}`}
                aria-label="Flip to Itinerary and Venues"
              >
                <span>{t.flipToItinerary}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* ========================================================== */}
            {/* FACE 2 (BACK): CEREMONIAL ITINERARY & VENUE MAPS           */}
            {/* ========================================================== */}
            <div
              onClick={handleCardClick}
              className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] rounded-3xl apple-glass border border-[#D4AF37]/35 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer touch-manipulation"
            >
              {/* Ambient Emerald & Gold Shimmer */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[90px] pointer-events-none" />

              {/* Header: Auspicious Day */}
              <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08] shrink-0">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className={`${eventTitleFont} text-xs sm:text-sm text-[#FDE68A] tracking-wider uppercase`}>
                    {t.weddingDateHeader}
                  </h3>
                  <p className="text-[10px] text-neutral-400">
                    {t.sameDayCelebrations}
                  </p>
                </div>
              </div>

              {/* Event Itinerary Blocks: Nikkah and Valima Filled Elegantly */}
              <div className="my-auto py-1 space-y-2.5 shrink-0">
                {/* Event 1: Nikkah Ceremony Block */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#10B981]/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className={`text-[10px] sm:text-xs uppercase tracking-wider text-emerald-400 font-semibold ${displayKickerFont}`}>
                        {t.nikkahTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-white bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{t.nikkahTime}</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-2.5">
                    {t.nikkahDesc}
                  </p>

                  {/* 1-Tap Google Maps Button & Copy Link */}
                  <div className="flex items-center gap-2">
                    <a
                      href={nikkahUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-1 h-8 sm:h-9 px-3 rounded-xl bg-gradient-to-r from-[#10B981]/25 to-[#10B981]/15 hover:from-[#10B981]/35 hover:to-[#10B981]/25 border border-[#10B981]/45 text-[#6EE7B7] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-95 touch-manipulation ${buttonFont}`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{t.getDirections}</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyUrl(nikkahUrl, 'nikkah');
                      }}
                      className="h-8 sm:h-9 px-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs text-neutral-300 flex items-center justify-center transition-colors cursor-pointer active:scale-95 touch-manipulation"
                      title="Copy Nikkah location link"
                    >
                      {copiedLink === 'nikkah' ? (
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Event 2: Valima Reception Block */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className={`text-[10px] sm:text-xs uppercase tracking-wider text-[#FDE68A] font-semibold ${displayKickerFont}`}>
                        {t.valimaTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-white bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>12:00 PM</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-2.5">
                    {t.valimaDesc}
                  </p>

                  {/* 1-Tap Google Maps Button & Copy Link */}
                  <div className="flex items-center gap-2">
                    <a
                      href={valimaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-1 h-8 sm:h-9 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]/15 hover:from-[#D4AF37]/40 hover:to-[#D4AF37]/25 border border-[#D4AF37]/50 text-[#FDE68A] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-95 touch-manipulation ${buttonFont}`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{t.getDirections}</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyUrl(valimaUrl, 'valima');
                      }}
                      className="h-8 sm:h-9 px-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs text-neutral-300 flex items-center justify-center transition-colors cursor-pointer active:scale-95 touch-manipulation"
                      title="Copy Valima location link"
                    >
                      {copiedLink === 'valima' ? (
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Family Host Tribute - Prominently Displayed where Calendar was */}
              <div className="pt-2 pb-0.5 border-t border-white/[0.08] text-center shrink-0">
                <p className={`text-xs font-bold text-[#FDE68A] tracking-wider ${displayHeadingFont}`}>
                  {t.fathersCombinedNames}
                </p>
                <p className="text-[10px] text-neutral-300 mt-0.5 leading-normal">
                  {t.solicitBlessings}
                </p>
              </div>

              {/* Bottom Flip Trigger Action (Back to Front) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  flipCard(false);
                }}
                className={`mt-2 w-full py-2.5 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-[#D4AF37]/30 text-[#FDE68A] flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] touch-manipulation group shrink-0 ${buttonFont}`}
                aria-label="Flip back to Couple Details"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover:-translate-x-1" />
                <span>{t.flipToCouple}</span>
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Share / WhatsApp & QR Code Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
