import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, ChevronRight } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';

export default function PlaceholderPage({
  title = 'Practice Area',
  category = 'GROW India Practice',
  description = 'Detailed modular content and full presentation for this section is prepared in the architecture and ready for section-by-section development in subsequent phases.'
}) {
  return (
    <PageLayout
      title={`${title} | GROW India – Govind Raadhaa Organizational Wonders`}
      description={description}
    >
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-400">{category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400 font-semibold">{title}</span>
          </nav>

          <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
            {category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6 text-amber-600">
            <Construction className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Routing Foundation Verified
          </span>

          <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
            {title} Foundation Ready
          </h2>

          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
              Return to Home
            </Button>
            <Button to="/contact" variant="gold" size="md">
              Inquire About {title}
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
