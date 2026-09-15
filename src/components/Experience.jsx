import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { experiencesData } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>07 / TRAJECTORY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Internship & Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Real-world experiences that strengthened my design, collaboration and technical skills.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-8">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-xs"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-neutral-950 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.status === 'In Progress' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>In Progress</span>
                      </span>
                    )}
                  </div>
                  <p className="text-base font-semibold text-violet-600 dark:text-violet-400">
                    {exp.company}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description or Bullets */}
              {exp.bullets ? (
                <ul className="space-y-2.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-6">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {exp.description}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
