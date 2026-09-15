import { Users, ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react';
import { highlightsData } from '../data/portfolioData.js';

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>09 / LEADERSHIP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Highlights
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            The communities, collaborations and experiences that continue to shape my journey.
          </p>
        </div>

        {/* Featured Community Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  Featured Community
                </span>
                <h3 className="text-2xl font-bold font-heading text-neutral-950 dark:text-white">
                  {highlightsData.community}
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 w-fit border border-neutral-200 dark:border-neutral-700">
              <HeartHandshake className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>{highlightsData.role}</span>
            </span>
          </div>

          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 max-w-3xl">
            {highlightsData.contribution}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-wrap gap-2">
              {highlightsData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <a
              href={highlightsData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <span>View LinkedIn Post</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Motto banner */}
        <div className="mt-8 text-center">
          <p className="text-sm font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase font-heading">
            {highlightsData.motto}
          </p>
        </div>
      </div>
    </section>
  );
}
