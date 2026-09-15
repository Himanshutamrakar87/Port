import { Palette, Code2, Server, Database, Bot, Wrench, ArrowRight } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData.js';

export default function SkillsEcosystem() {
  const iconMap = {
    Palette,
    Code2,
    Server,
    Database,
    Bot,
    Wrench,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>03 / CAPABILITIES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Skills Ecosystem
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            The tools, technologies and creative skills I use to think, design and build.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-xs"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-neutral-900 dark:text-white">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
