import { X, ArrowUpRight, CheckCircle, Sparkles, Layers, Search, Cpu } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose }) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-10">
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
        <div className="space-y-3 mb-8 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
              {caseStudy.badge}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Case Study Breakdown
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-950 dark:text-white">
            {caseStudy.title}
          </h2>
          <p className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Process Strip */}
        <div className="mb-8 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
            Methodology & Flow
          </p>
          <p className="text-sm font-semibold text-neutral-900 dark:text-white">
            {caseStudy.approach}
          </p>
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <div>
            <h4 className="text-base font-bold font-heading text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-600"></span>
              <span>Project Context</span>
            </h4>
            <p className="bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
              {caseStudy.details?.context}
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold font-heading text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>The Problem & User Friction</span>
            </h4>
            <p className="bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
              {caseStudy.details?.problem}
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold font-heading text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Research & Key Findings</span>
            </h4>
            <p className="bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
              {caseStudy.details?.research}
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold font-heading text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>The Solution & Implementation</span>
            </h4>
            <p className="bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
              {caseStudy.details?.solution}
            </p>
          </div>

          {/* Measurable Outcomes */}
          {caseStudy.details?.outcomes && (
            <div>
              <h4 className="text-base font-bold font-heading text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                <span>Measurable Outcomes & Learnings</span>
              </h4>
              <ul className="space-y-2 bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
                {caseStudy.details.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((t) => (
              <span key={t} className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {caseStudy.links.demo && (
              <a
                href={caseStudy.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all shadow-sm"
              >
                <span>Live Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
