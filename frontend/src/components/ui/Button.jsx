import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5 font-semibold tracking-wide',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2 font-semibold tracking-wide',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5 font-bold tracking-wide shadow-sm'
  };

  const variantStyles = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 focus-visible:ring-slate-900 border border-slate-800 shadow-sm',
    gold: 'bg-amber-500 text-slate-950 hover:bg-amber-400 active:bg-amber-600 focus-visible:ring-amber-500 font-bold border border-amber-400 shadow-sm',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-slate-400 border border-slate-200',
    outline: 'bg-transparent text-slate-900 border border-slate-300 hover:bg-slate-100/80 active:bg-slate-200/80 focus-visible:ring-slate-400',
    outlineDark: 'bg-transparent text-white border border-slate-700 hover:bg-slate-900 active:bg-slate-800 focus-visible:ring-amber-500',
    outlineGold: 'bg-transparent text-amber-600 border border-amber-500/60 hover:bg-amber-500/10 active:bg-amber-500/20 focus-visible:ring-amber-500',
    outlineGoldDark: 'bg-transparent text-amber-300 border border-amber-400/60 hover:bg-amber-400/10 active:bg-amber-400/20 focus-visible:ring-amber-500 font-bold',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200/60 focus-visible:ring-slate-400',
    ghostDark: 'bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white active:bg-slate-800 focus-visible:ring-slate-400'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`.trim();

  const iconElement = Icon ? <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} aria-hidden="true" /> : null;

  const content = (
    <>
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
