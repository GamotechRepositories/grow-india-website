import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown, 
  Share2, MessageCircle, ExternalLink, Check, Sparkles, Layers,
  Maximize2, RotateCcw
} from 'lucide-react';
import { contactDetails } from '../../data/contact';
import Button from './Button';

export default function ReelPlayerModal({
  isOpen,
  onClose,
  videos = [],
  initialVideoIndex = 0
}) {
  const [currentIndex, setCurrentIndex] = useState(initialVideoIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialVideoIndex);
      setIsPlaying(true);
      setProgress(0);
    }
  }, [isOpen, initialVideoIndex]);

  const currentReel = videos[currentIndex] || videos[0];

  // Auto-play and handle source change
  useEffect(() => {
    if (videoRef.current && isOpen) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            // Autoplay with sound might be blocked, fallback to muted play
            if (!isMuted) {
              setIsMuted(true);
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            } else {
              setIsPlaying(false);
            }
          });
      }
    }
  }, [currentIndex, isOpen]);

  // Keyboard navigation & controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, videos.length, isMuted, isPlaying]);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentReel) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    setDuration(total);
    setProgress((current / total) * 100);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && duration) {
      videoRef.current.currentTime = pos * duration;
      setProgress(pos * 100);
    }
  };

  const handleVideoEnded = () => {
    // Auto advance to next reel
    handleNext();
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/reels?id=${currentReel.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello GROW India team,\nI just watched your video reel: "${currentReel.title}" (${currentReel.division || 'GROW Systems'}).\nI would like to explore this consultation/system for our business.`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-0 sm:p-4 md:p-6 transition-all duration-300"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-4xl md:max-w-5xl bg-slate-900 border-0 sm:border border-slate-800 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Mobile/Desktop */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700/60 shadow-lg transition-all"
          title="Close (Esc)"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left / Center: 9:16 Video Player Stage */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[55vh] md:min-h-[600px] select-none overflow-hidden group">
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src={currentReel.videoUrl}
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onClick={togglePlayPause}
            className="w-full h-full max-h-[75vh] md:max-h-[85vh] object-contain cursor-pointer"
          />

          {/* Quick Play/Pause Center Indicator on Click */}
          <button
            onClick={togglePlayPause}
            className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-slate-950/60 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-80' : 'opacity-100 scale-110'
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 text-amber-400 fill-amber-400 ml-1" />
            )}
          </button>

          {/* Up / Down Float Navigation Arrows for Desktop */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-20">
            <button
              onClick={handlePrev}
              disabled={videos.length <= 1}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-slate-700 shadow-xl transition-all disabled:opacity-30 cursor-pointer"
              title="Previous Reel (Up Arrow)"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <div className="text-center text-[10px] font-bold text-slate-400 bg-slate-950/80 px-2 py-1 rounded-md border border-slate-800">
              {currentIndex + 1} / {videos.length}
            </div>
            <button
              onClick={handleNext}
              disabled={videos.length <= 1}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-slate-700 shadow-xl transition-all disabled:opacity-30 cursor-pointer"
              title="Next Reel (Down Arrow)"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Video Bottom Overlaid Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 pt-10 z-20 flex flex-col gap-2">
            {/* Interactive Progress Bar */}
            <div 
              className="w-full h-2 bg-slate-700/60 rounded-full overflow-hidden cursor-pointer relative group/progress"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-100 rounded-full relative"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlayPause}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                  )}
                  <span className="text-[11px] font-medium hidden sm:inline">
                    {isMuted ? 'Muted' : 'Sound On'}
                  </span>
                </button>
                <span className="text-[11px] text-slate-400 font-mono">
                  {formatTime(currentTime)} / {formatTime(duration || 45)}
                </span>
              </div>

              {/* Mobile next/prev controls */}
              <div className="flex items-center gap-2 md:hidden">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-slate-800/80 text-white hover:bg-slate-700"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-bold text-amber-400">
                  {currentIndex + 1}/{videos.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-slate-800/80 text-white hover:bg-slate-700"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right / Bottom Details & Action Sidebar */}
        <div className="w-full md:w-[380px] lg:w-[420px] bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-none">
          <div className="space-y-4">
            {/* Badges & Tags */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                {currentReel.division || 'GROW INDIA'}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                {currentReel.category}
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-snug">
                {currentReel.title}
              </h3>
              {currentReel.tagline && (
                <p className="text-xs font-semibold text-amber-400/90 mt-1 uppercase tracking-wider">
                  ✦ {currentReel.tagline}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
              {currentReel.description}
            </p>

            {/* Keyword Chips */}
            {currentReel.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentReel.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Conversion CTAs */}
          <div className="pt-6 space-y-3 border-t border-slate-800 mt-4">
            {/* Direct WhatsApp Consultation */}
            <a
              href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp</span>
            </a>

            {/* Action Row: Book Audit / Share */}
            <div className="flex gap-2">
              <Button
                to="/audit"
                variant="gold"
                size="sm"
                className="flex-1 text-xs py-2.5"
                onClick={onClose}
              >
                Free Diagnostic Audit
              </Button>
              <button
                onClick={handleShare}
                className="px-3.5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer"
                title="Copy shareable link"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
