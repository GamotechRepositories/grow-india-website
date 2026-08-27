import { useState } from 'react';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function SocialShareBar({
  shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://grow-india-website.onrender.com/audit',
  title = 'GROW Free Organizational Health Audit Questionnaire',
  description = 'Take this 2-minute free organizational health check to identify strengths, detect operational gaps, and improve systems for sustainable growth.'
}) {
  const [copied, setCopied] = useState(false);
  const [showCaptionModal, setShowCaptionModal] = useState(false);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareText = encodeURIComponent(`${title}\n\n${description}\n\n👉 Complete your audit here: ${shareUrl}`);
  const encodedUrl = encodeURIComponent(shareUrl);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      color: 'bg-[#0A66C2] hover:bg-[#084e96] text-white',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-[#25D366] hover:bg-[#1da851] text-white',
      url: `https://wa.me/?text=${shareText}`
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      color: 'bg-[#1877F2] hover:bg-[#145dbf] text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90',
      action: () => setShowCaptionModal(true)
    },
    {
      name: 'Twitter / X',
      icon: TwitterIcon,
      color: 'bg-black hover:bg-slate-900 text-white',
      url: `https://twitter.com/intent/tweet?text=${shareText}`
    }
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
            <Share2 className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              Share Audit Link With Your Network
              <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Direct Link
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Post on LinkedIn, Instagram bio, Facebook, or WhatsApp groups for clients & leaders.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
            title="Copy audit questionnaire URL"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              if (social.url) {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 ${social.color}`}
                    title={`Share on ${social.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              }

              return (
                <button
                  key={social.name}
                  type="button"
                  onClick={social.action}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer ${social.color}`}
                  title={`Share on ${social.name}`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Instagram Bio/Caption Helper Modal */}
      {showCaptionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-lg w-full text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display text-sm font-bold">Instagram Bio & Story Setup</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCaptionModal(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Instagram doesn’t support direct clickable links in post captions. Here is how to share your audit form:
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Step 1: Put Link in Bio or Story Link Sticker
                </span>
                <code className="text-xs text-emerald-400 font-mono break-all">{shareUrl}</code>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Step 2: Recommended Instagram Post/Reel Caption
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  🚨 Is your business system-dependent or person-dependent? Take the GROW 2-Minute Free Organizational Health Audit Check!
                  <br /><br />
                  🔍 Evaluate your Governance, SOPs, Cash Controls, KPIs, Legal Risks & Continuous Growth.
                  <br /><br />
                  📥 Instant downloadable PDF Audit Certificate + customized debrief report.
                  <br /><br />
                  👉 Click the link in our bio to fill out the audit now! 🚀
                  <br />
                  #BusinessAudit #GROWIndia #SOPs #Governance #MSMEIndia #BusinessGrowth
                </p>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(`🚨 Is your business system-dependent or person-dependent? Take the GROW 2-Minute Free Organizational Health Audit Check!\n\n🔍 Evaluate your Governance, SOPs, Cash Controls, KPIs, Legal Risks & Continuous Growth.\n\n📥 Instant downloadable PDF Audit Certificate + customized debrief report.\n\n👉 Click the link in our bio to fill out the audit now! 🚀\n#BusinessAudit #GROWIndia #SOPs #Governance #MSMEIndia #BusinessGrowth\n\n${shareUrl}`);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? 'Caption Copied!' : 'Copy Instagram Caption'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
