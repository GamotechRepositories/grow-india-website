import React, { useState } from 'react';
import { 
  Film, Sparkles, Search, Video, Layers, CheckCircle2, ArrowRight, MessageCircle 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ReelCard from '../components/ui/ReelCard';
import { reelVideos, videoCategories } from '../data/videos';
import { brandIdentity } from '../data/brand';
import { contactDetails } from '../data/contact';

export default function ReelsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReelId, setActiveReelId] = useState(null);
  const [isGlobalMuted, setIsGlobalMuted] = useState(false);

  // Filter and search
  const filteredVideos = reelVideos.filter((v) => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = 
      searchQuery === '' ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.division?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    <PageLayout
      title={`Video Insights & Strategic Reels – ${brandIdentity.shortName} | ${brandIdentity.officialName}`}
      description="Watch GROW India's library of 20+ short video ads and reels covering SOP development, GRC risk frameworks, business growth consulting, KPIs, and scale."
    >
      {/* Hero Header - Light & Crisp */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-200 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-amber-200/40 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Film className="w-3.5 h-3.5 text-amber-600" />
            <span>GROW Video Knowledge Hub</span>
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">VIDEO REELS & ADS</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore 20 practical video insights on building institutional SOPs, managing compliance risks, structuring executive MIS scorecards, and scaling your organization systematically.
          </p>

          {/* Quick Metrics */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Video className="w-4 h-4 text-amber-600" />
              <span>20 Educational Reels</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>7 Core Practice Divisions</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Direct In-Place Playback</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Video Gallery Section */}
      <section className="py-12 sm:py-16 bg-slate-50 text-slate-900 min-h-[600px] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar: Search & Category Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
              {videoCategories.map((category) => {
                const count = category === 'All' 
                  ? reelVideos.length 
                  : reelVideos.filter((v) => v.category === category).length;
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setActiveReelId(null);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-md font-extrabold border border-slate-950 ring-1 ring-amber-400/40'
                        : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-slate-200 shadow-xs'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search reels, SOPs, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-800 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Showing <strong className="text-slate-900">{filteredVideos.length}</strong> video{filteredVideos.length === 1 ? '' : 's'}</span>
            <span>Tap any reel to play directly with sound & controls</span>
          </div>

          {/* Video 9:16 Responsive Grid */}
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {filteredVideos.map((video) => (
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
          ) : (
            <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <Film className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No reels found</h3>
              <p className="text-sm text-slate-500">
                Try selecting a different category or clearing your search term.
              </p>
              <Button
                variant="outlineGold"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setActiveReelId(null);
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}

          {/* Bottom Consultation Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-white border border-amber-400/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Institutional Growth & Advisory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Ready to Implement These Systems in Your Company?
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Book a confidential 360° Diagnostic Audit or speak directly with our senior advisors over WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/audit" variant="gold" size="md" icon={ArrowRight}>
                Book 360° Systems Audit
              </Button>
              <a
                href={contactDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
