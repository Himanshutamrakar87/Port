import { ArrowRight, ArrowUpRight, Sparkles, Layers, Search, Eye } from 'lucide-react';
import { caseStudiesData } from '../data/portfolioData.js';

export default function CaseStudies({ onSelectCaseStudy }) {
  return (
    <section id="case-studies" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>06 / DEEP DIVES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Behind the problems, decisions and processes that shape the products I design.
          </p>
        </div>

        {/* 2 Detailed Case Study Cards */}
        <div className="space-y-8">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                      {study.badge}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {study.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-950 dark:text-white">
                    {study.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                    {study.description}
                  </p>

                  {/* Approach Flow */}
                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wider">
                      Process & Approach
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {study.approach}
                    </p>
                  </div>

                  {/* Tools only for ApniDukan - NEVER for HunarSangam per instructions */}
                  {study.tools && (
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        Tools:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-neutral-500 dark:text-neutral-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Column */}
                <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center h-full gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-100 dark:border-neutral-800">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm active:scale-95 whitespace-nowrap"
                  >
                    <span>{study.id === 'hunarsangam' ? 'View Design' : 'View Case Study'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {study.links.demo && (
                    <a
                      href={study.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
