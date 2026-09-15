import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/portfolioData.js';

export default function ServicesOffered() {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>04 / SERVICES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Services Offered
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            From product ideas to polished digital experiences — I design, build and bring them to life.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.number}
              className="group p-8 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-extrabold font-heading text-neutral-400 dark:text-neutral-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {svc.number}
                </span>

                <h3 className="text-xl font-bold font-heading text-neutral-900 dark:text-white mt-2 mb-3">
                  {svc.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              {/* Deliverable pills */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2">
                {svc.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <Check className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200 text-center sm:text-left">
            Have an idea in mind? Let's turn it into something people can experience.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-sm transition-all shadow-sm active:scale-95 whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
