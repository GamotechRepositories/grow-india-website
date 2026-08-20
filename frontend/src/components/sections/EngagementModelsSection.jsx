import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { engagementModels } from '../../data/engagementModels';

export default function EngagementModelsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200" id="engagement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Flexible Collaboration"
          badgeIcon={Layers}
          title="XVI. ENGAGEMENT MODELS"
          subtitle="GROW can structure engagements according to organizational requirements."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {engagementModels.map((model) => (
            <div
              key={model.number}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-100/60 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                    MODEL {model.number}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {model.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Button to="/contact" variant="outline" size="sm" className="w-full justify-between" icon={ArrowRight}>
                  Select Model
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
