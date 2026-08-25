import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Sparkles, Video, ArrowRight, Film 
} from 'lucide-react';
import { reelVideos, videoCategories } from '../../data/videos';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ReelCard from '../ui/ReelCard';

export default function VideoReelsSection({
  title = "GROW IN ACTION: STRATEGIC VIDEO REELS & ADS",
  subtitle = "Watch high-impact insights on SOP structuring, regulatory risk shielding, marketing systems, and institutional growth frameworks.",
  showAllCta = true,
  maxItems
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeReelId, setActiveReelId] = useState(null);
  const [isGlobalMuted, setIsGlobalMuted] = useState(false);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  // Auto-pause whenever the entire section leaves the viewport
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setActiveReelId(null);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  // Filter videos based on category
  const filteredVideos = activeCategory === 'All'
    ? reelVideos
    : reelVideos.filter((v) => v.category === activeCategory);

  const displayedVideos = maxItems ? filteredVideos.slice(0, maxItems) : filteredVideos;

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleActivateReel = (id) => {
    setActiveReelId(id);
  };

  const handleDeactivateReel = () => {
    setActiveReelId(null);
  };

  const handleToggleMute = () => {
    setIsGlobalMuted((prev) => !prev);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200" 
      id="video-reels"
    >
      {/* Soft warm light ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionTitle
            badge="Video Insights & Shorts"
            badgeIcon={Film}
            title={title}
            subtitle={subtitle}
            theme="light"
            align="left"
            className="md:max-w-3xl"
          />

          {/* Carousel Arrows (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollCarousel('left')}
              className="p-3 rounded-full bg-white hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200/90 hover:border-slate-900 transition-all shadow-sm cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="p-3 rounded-full bg-white hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200/90 hover:border-slate-900 transition-all shadow-sm cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {videoCategories.map((category) => {
            const count = category === 'All' 
              ? reelVideos.length 
              : reelVideos.filter((v) => v.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveReelId(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md font-extrabold border border-slate-950 ring-1 ring-amber-400/40'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-slate-200 shadow-xs'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Direct Inline Video Reels Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-thin scroll-smooth snap-x snap-mandatory focus:outline-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {displayedVideos.map((video) => (
            <ReelCard
              key={video.id}
              video={video}
              isActive={activeReelId === video.id}
              isGlobalMuted={isGlobalMuted}
              onActivate={handleActivateReel}
              onDeactivate={handleDeactivateReel}
              onToggleMute={handleToggleMute}
            />
          ))}
        </div>

        {/* Bottom Highlights & Page CTA */}
        {showAllCta && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>20+ Strategic Video Ads & Educational Shorts</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Transform Your Business Operations with GROW's Systematic Methodologies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Watch all our case studies, SOP frameworks, GRC risk controls, and marketing scaling blueprints.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/reels" variant="gold" size="md" icon={ArrowRight}>
                Explore All 20 Videos
              </Button>
              <Button to="/contact" variant="outline" size="md" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
