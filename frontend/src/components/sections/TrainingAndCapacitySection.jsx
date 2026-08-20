import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { trainingAndCapacityData } from '../../data/engagementModels';

export default function TrainingAndCapacitySection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800" id="training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Capability Development"
          badgeIcon={GraduationCap}
          title={`XVII. ${trainingAndCapacityData.title}`}
          subtitle={trainingAndCapacityData.subtitle}
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mt-14 mb-12">
          {trainingAndCapacityData.topics.map((topic, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3 hover:border-amber-500/40 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                {topic}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/contact" variant="gold" size="md" icon={ArrowRight}>
            Request Customized Training Program
          </Button>
        </div>
      </div>
    </section>
  );
}
