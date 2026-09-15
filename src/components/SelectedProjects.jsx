import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData.js';

export default function SelectedProjects({ onOpenProjectPreview }) {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>05 / SHOWCASE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Ideas I’ve transformed into functional and meaningful digital experiences.
          </p>
        </div>

        {/* 4 Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between shadow-xs"
            >
              {/* Project Card Header / Preview Area */}
              <div className={`p-6 sm:p-7 bg-gradient-to-br ${project.accentColor} border-b border-neutral-200/60 dark:border-neutral-800/60 relative overflow-hidden flex flex-col justify-between`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shadow-xs">
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-neutral-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-4">
                  {project.title}
                </h3>

                {/* Project Thumbnail Visual */}
                {project.thumbnail && (
                  <div className="relative w-full aspect-[16/7] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs bg-neutral-100 dark:bg-neutral-800/60">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech / Tools Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(project.tech || project.tools || []).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {project.badge === 'Web' ? (
                      <>
                        <button
                          type="button"
                          onClick={() => onOpenProjectPreview(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-full transition-all active:scale-95"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full transition-all border border-neutral-200 dark:border-neutral-700 active:scale-95"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onOpenProjectPreview(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-full transition-all active:scale-95"
                      >
                        <span>View Design</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
