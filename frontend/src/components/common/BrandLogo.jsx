import { Link } from 'react-router-dom';
import growLogo from '../../assets/logo/grow-india-logo.png';
import { brandIdentity } from '../../data/brand';

export default function BrandLogo({
  variant = 'dark', // 'dark' (on dark background) or 'light'
  size = 'md', // 'sm', 'md', 'lg'
  onClick,
  showTagline = true,
  className = ''
}) {
  const sizeConfig = {
    sm: {
      imgHeight: 'h-10 sm:h-11',
      brandText: 'text-xl',
      subText: 'text-[8px]',
      gap: 'gap-2.5'
    },
    md: {
      imgHeight: 'h-12 sm:h-14',
      brandText: 'text-2xl',
      subText: 'text-[9.5px]',
      gap: 'gap-3'
    },
    lg: {
      imgHeight: 'h-16 sm:h-20',
      brandText: 'text-3xl sm:text-4xl',
      subText: 'text-[11px]',
      gap: 'gap-4'
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center ${currentSize.gap} group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label={`${brandIdentity.officialName} Home`}
    >
      {/* Official Golden GROW Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={growLogo}
          alt={brandIdentity.officialName}
          className={`${currentSize.imgHeight} w-auto object-contain rounded-xl transition-all duration-300 drop-shadow-md group-hover:scale-105`}
        />
      </div>

      {/* Brand Text Typography */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display font-extrabold ${currentSize.brandText} tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            GROW
          </span>
          <span className={`font-display font-bold ${currentSize.brandText} tracking-wider text-amber-500`}>
            INDIA
          </span>
        </div>

        {showTagline && (
          <span
            className={`font-sans uppercase tracking-[0.18em] font-bold ${currentSize.subText} mt-1 ${
              isDark ? 'text-slate-400 group-hover:text-amber-200/90' : 'text-slate-500'
            } transition-colors line-clamp-1`}
          >
            Govind Raadhaa Org Wonders
          </span>
        )}
      </div>
    </Link>
  );
}
