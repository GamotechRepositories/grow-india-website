import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  ShieldCheck,
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  BarChart3,
  Scale,
  Building2,
  Landmark,
  Factory,
  Workflow,
  GraduationCap,
  Handshake,
  Film
} from 'lucide-react';
import { mainNavLinks } from '../../data/navigation';
import { contactDetails } from '../../data/contact';
import { brandIdentity } from '../../data/brand';
import BrandLogo from '../common/BrandLogo';
import Button from '../ui/Button';

const iconMap = {
  ShieldCheck,
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  BarChart3,
  Scale,
  Building2,
  Landmark,
  Factory,
  Workflow,
  GraduationCap,
  Handshake,
  Film
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Corporate Top Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold truncate">
              <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{brandIdentity.positioning}</span>
            </span>
            <span className="hidden xl:inline text-slate-700">|</span>
            <span className="hidden xl:inline text-slate-400 font-medium truncate">
              {brandIdentity.officialName}
            </span>
          </div>

          <div className="flex items-center space-x-4 shrink-0 text-xs font-medium">
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{contactDetails.phoneDisplay}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href={`mailto:${contactDetails.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{contactDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Corporate Navigation Bar */}
      <nav
        className={`w-full bg-[#070D1E]/95 backdrop-blur-md transition-all duration-300 border-b border-amber-500/20 ${
          scrolled ? 'shadow-xl shadow-black/40 border-amber-500/30' : ''
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            
            {/* Official Brand Logo */}
            <BrandLogo variant="dark" size="md" onClick={closeMenu} />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {mainNavLinks.map((item) => {
                if (item.children) {
                  const isServices = item.label === 'Services';
                  const isActiveParent = item.children.some((child) => location.pathname === child.href);

                  return (
                    <div key={item.label} className="relative group">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                          isActiveParent
                            ? 'text-amber-400 bg-amber-500/10 font-bold border border-amber-500/30'
                            : 'text-slate-200 hover:text-amber-400 hover:bg-slate-900/80'
                        }`}
                        aria-expanded={openDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-transform duration-200 group-hover:rotate-180"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Dropdown Menu Canvas */}
                      <div
                        className={`absolute left-0 top-full pt-2 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50 ${
                          isServices ? 'w-[560px] -left-24' : 'w-80'
                        }`}
                      >
                        <div className="bg-[#0A1128] rounded-2xl shadow-2xl border border-amber-500/30 p-3.5 backdrop-blur-xl">
                          <div className="px-3 py-2 border-b border-slate-800 mb-2 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                              {item.description || item.label}
                            </span>
                            {item.href && (
                              <Link
                                to={item.href}
                                onClick={closeMenu}
                                className="text-[11px] font-semibold text-slate-400 hover:text-amber-400 transition-colors"
                              >
                                View All &rarr;
                              </Link>
                            )}
                          </div>

                          <div className={isServices ? 'grid grid-cols-2 gap-2' : 'space-y-1.5'}>
                            {item.children.map((child) => {
                              const isCurrent = location.pathname === child.href;
                              const IconComponent = iconMap[child.icon] || ShieldCheck;
                              return (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={closeMenu}
                                  className={`p-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 border ${
                                    isCurrent
                                      ? 'bg-amber-500/15 text-white border-amber-500/50'
                                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-amber-500/30 text-slate-200'
                                  }`}
                                >
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                      isCurrent
                                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                                        : 'bg-slate-800 text-amber-400'
                                    }`}
                                  >
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-white group-hover:text-amber-300">
                                      {child.label}
                                    </div>
                                    <span className="text-[10.5px] text-slate-400 block leading-tight mt-0.5">
                                      {child.subtitle}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                const isCurrent = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isCurrent
                        ? 'text-amber-400 bg-amber-500/10 font-bold border border-amber-500/30'
                        : 'text-slate-200 hover:text-amber-400 hover:bg-slate-900/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Consultation CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
                Schedule Diagnostic
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 border border-slate-800"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#070D1E] px-4 pt-4 pb-8 space-y-2 shadow-2xl max-h-[85vh] overflow-y-auto">
            {mainNavLinks.map((item) => {
              if (item.children) {
                const isOpenMobile = openDropdown === item.label;
                return (
                  <div key={item.label} className="border-b border-slate-800/80 pb-2">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-white rounded-lg hover:bg-slate-900"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${
                          isOpenMobile ? 'rotate-180 text-amber-400' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpenMobile && (
                      <div className="pl-2 pr-1 py-2 space-y-1.5 bg-slate-950 rounded-xl my-1 border border-slate-800">
                        {item.children.map((child) => {
                          const IconComponent = iconMap[child.icon] || ShieldCheck;
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={closeMenu}
                              className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors"
                            >
                              <IconComponent className="w-4 h-4 text-amber-400 shrink-0" />
                              <div>
                                <span className="text-white block">{child.label}</span>
                                <span className="text-[10px] text-slate-400 block font-normal">
                                  {child.subtitle}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isCurrent = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMenu}
                  className={`block px-3.5 py-2.5 text-sm font-semibold rounded-lg ${
                    isCurrent
                      ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2">
              <Button to="/contact" onClick={closeMenu} variant="gold" size="md" className="w-full" icon={ArrowRight}>
                Schedule Diagnostic Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
