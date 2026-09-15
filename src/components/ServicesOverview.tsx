import { Link } from 'react-router-dom';
import { SERVICES_LIST } from '../constants/data';
import { Rocket, Briefcase, Lightbulb, FlaskConical, Activity, Megaphone, Scale, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Rocket': return Rocket;
    case 'Briefcase': return Briefcase;
    case 'Lightbulb': return Lightbulb;
    case 'FlaskConical': return FlaskConical;
    case 'Activity': return Activity;
    case 'Megaphone': return Megaphone;
    case 'Scale': return Scale;
    default: return FlaskConical;
  }
};

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FCFCFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
              <Sparkles className="w-3.5 h-3.5 text-[#FEB21A]" />
              End-to-End R&D Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
              Scientific Food Services Engine
            </h2>
            <p className="text-base text-[#6B7280] mt-3 font-body">
              Seven core capabilities spanning formulation, lab testing, regulatory, and go-to-market strategy.
            </p>
          </div>

          <Link
            to="/services"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-xs border border-[#FEB21A]/40 shadow-md transition-all group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 text-[#FEB21A] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_LIST.map((srv) => {
            const Icon = getIcon(srv.iconName);
            return (
              <Link
                key={srv.id}
                to={`/services/${srv.id}`}
                className="group bg-white rounded-3xl p-6 border border-[#E5E7EB] hover:border-[#FEB21A] shadow-sm hover:shadow-lg transition-all flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center border border-[#FEB21A]/30 shadow-md shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-[10px] font-extrabold text-[#004B84] font-number uppercase tracking-wider">
                    {srv.badge}
                  </span>
                  <h3 className="text-sm font-heading font-extrabold text-[#1F2937] leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] font-body leading-relaxed line-clamp-2">
                    {srv.shortDesc}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#004B84] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FEB21A]" />
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
