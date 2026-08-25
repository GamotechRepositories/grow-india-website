import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Sparkles, Eye, 
  MessageCircle, Share2, Check, ArrowRight
} from 'lucide-react';
import { contactDetails } from '../../data/contact';

export default function ReelCard({
  video,
  isActive = false,
  isGlobalMuted = true,
  onActivate,
  onDeactivate,
  onToggleMute
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const videoRef = useRef(null);
  const cardRef = useRef(null);

  // Auto-pause when card scrolls out of viewport
  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.35) {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
            onDeactivate && onDeactivate();
          }
        }
      },
      { threshold: [0, 0.35, 0.7] }
    );

    observer.observe(cardEl);
    return () => observer.disconnect();
  }, [onDeactivate]);

  // Auto-pause when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Sync play/pause with isActive state
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.muted = isGlobalMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => {
              if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
              }
            });
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
        setProgress(0);
      }
    }
  }, [isActive]);

  // Sync audio mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isGlobalMuted;
    }
  }, [isGlobalMuted]);

  const handleCardClick = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;

    if (!isActive) {
      onActivate && onActivate(video.id);
    } else {
      togglePlayPause();
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
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
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && duration) {
      videoRef.current.currentTime = pos * duration;
      setProgress(pos * 100);
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleShare = (e) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/reels?id=${video.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello GROW India team,\nI watched your video reel: "${video.title}" (${video.division || 'GROW Systems'}).\nI would like to consult with your team for our business.`
  );

  // Cloudinary video poster thumbnail
  const posterUrl = video.videoUrl.replace(/\.mp4$/i, '.jpg');

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className={`group relative flex-none w-[270px] sm:w-[290px] md:w-[310px] aspect-[9/16] rounded-3xl overflow-hidden bg-slate-100 border transition-all duration-300 shadow-md cursor-pointer snap-start flex flex-col justify-between select-none ${
        isActive 
          ? 'border-amber-500 ring-4 ring-amber-400/20 shadow-2xl scale-[1.02]' 
          : 'border-slate-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Video & Poster Preview Stage */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        {/* Instant Bright Poster Preview (Guarantees no black screen on mobile) */}
        <img
          src={posterUrl}
          alt={video.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isActive && isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Video Element */}
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={posterUrl}
          preload="metadata"
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isActive && isPlaying ? 'opacity-100' : 'opacity-90'
          }`}
        />

        {/* Crisp Subtle Gradient (Only bottom text area, no dark haze over whole video) */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/30 pointer-events-none" 
        />
      </div>

      {/* Top Bar: Division Badge & Controls */}
      <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm">
          <Sparkles className="w-3 h-3 text-amber-600" />
          {video.division || 'GROW INDIA'}
        </span>

        <div className="flex items-center gap-1.5">
          {/* Sound Toggle */}
          {isActive && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleMute && onToggleMute();
              }}
              className="p-1.5 rounded-full bg-white/95 text-slate-800 hover:bg-amber-500 hover:text-slate-950 border border-slate-200 transition-all shadow-md cursor-pointer"
              title={isGlobalMuted ? "Unmute sound" : "Mute sound"}
              aria-label="Toggle sound"
            >
              {isGlobalMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-rose-500" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              )}
            </button>
          )}

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-700 border border-slate-200 transition-all cursor-pointer shadow-xs"
            title="Share reel"
            aria-label="Share reel"
          >
            {isCopied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
          </button>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/90 text-slate-700 backdrop-blur-sm border border-slate-200 shadow-xs">
            <Eye className="w-3 h-3 text-slate-500" />
            {video.views}
          </span>
        </div>
      </div>

      {/* Center Play Button */}
      <div className="relative z-10 self-center flex items-center justify-center pointer-events-none">
        {(!isActive || !isPlaying) && (
          <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/40 group-hover:scale-110 transition-all duration-300">
            <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
          </div>
        )}
      </div>

      {/* Bottom Content Card & Controls */}
      <div className="relative z-10 p-4 pt-6 space-y-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent text-white">
        {/* Progress Bar (when active) */}
        {isActive && (
          <div className="space-y-1 pb-1">
            <div 
              className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer relative"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration || 45)}</span>
            </div>
          </div>
        )}

        {/* Category & Duration */}
        <div className="flex items-center justify-between text-[11px] text-amber-300 font-bold uppercase tracking-wider">
          <span>{video.category}</span>
          <span className="text-slate-300 font-mono font-medium">{video.duration}</span>
        </div>

        {/* Title */}
        <h4 className="font-display font-bold text-sm text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
          {video.title}
        </h4>

        {/* Bottom CTA Row */}
        {isActive ? (
          <div className="pt-2 flex items-center gap-2">
            <a
              href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs border border-white/20 transition-all cursor-pointer backdrop-blur-sm"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          </div>
        ) : (
          <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-200 group-hover:text-amber-300">
            <span>Tap to Play Directly</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );
}
