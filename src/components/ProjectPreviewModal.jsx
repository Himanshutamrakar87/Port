import { X, ArrowUpRight, Github, ExternalLink, Sparkles, Figma } from 'lucide-react';

export default function ProjectPreviewModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
              {project.badge}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold font-heading text-neutral-950 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Interactive Simulated Interface Card */}
        <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 mb-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-700 mx-auto flex items-center justify-center text-violet-600 dark:text-violet-400 mb-3 shadow-xs">
            {project.badge === 'UI/UX' ? <Figma className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
          </div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
            {project.badge === 'UI/UX' ? 'High-Fidelity Figma Prototype' : 'Interactive Web Application'}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
            {project.badge === 'UI/UX'
              ? 'Complete component system, user journey maps, and interactive wireframes crafted by Himanshu.'
              : 'Full responsive application featuring real-time API integrations and clean component architecture.'}
          </p>
        </div>

        {/* Stack & Tags */}
        <div className="space-y-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
              Technology & Craft
            </p>
            <div className="flex flex-wrap gap-2">
              {(project.tech || project.tools || []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all shadow-sm"
              >
                <span>Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.design && (
              <a
                href={project.links.design}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all shadow-sm"
              >
                <span>Figma Workspace</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
