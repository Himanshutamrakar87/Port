import { ArrowRight, Code2, Compass, Cpu, Rocket } from 'lucide-react';
import { philosophyCards } from '../data/portfolioData.js';

export default function Philosophy() {
  const icons = [Code2, Compass, Cpu, Rocket];

  return (
    <section className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>02 / PHILOSOPHY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Why Work With Me?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            More than designing screens or writing code — I think about the complete product experience.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyCards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={card.number}
                className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold font-heading text-neutral-300 dark:text-neutral-700 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {card.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-xs font-bold tracking-wider text-violet-600 dark:text-violet-400 uppercase">
                    {card.label}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-neutral-900 dark:text-white mt-1 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white dark:from-neutral-900/90 dark:via-neutral-900 dark:to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Think Beyond the Screen. Design for People. Build for Reality.
            </h3>
            <p className="text-sm text-neutral-400">
              Design Thinking × Technical Execution × AI
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-sm transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
