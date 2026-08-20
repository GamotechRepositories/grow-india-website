export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
  badgeIcon: BadgeIcon,
}) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';
  const isRight = align === 'right';

  const alignClasses = isCenter
    ? 'text-center items-center mx-auto'
    : isRight
    ? 'text-right items-end ml-auto'
    : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isDark
              ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
              : 'bg-amber-50 text-amber-700 border border-amber-200/80'
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" aria-hidden="true" />}
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2
          className={`font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
