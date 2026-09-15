import { FileText, ArrowUpRight, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="py-16 md:py-20 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Header */}
        <div className="inline-flex p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 mb-4">
          <FileText className="w-6 h-6 text-violet-600 dark:text-violet-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
          My Resume
        </h2>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Want to know more about my work, technical foundation, and academic journey?
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onOpenResume) {
                onOpenResume(e);
              }
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all shadow-md active:scale-95"
          >
            <Eye className="w-4 h-4" />
            <span>Open Resume in New Tab</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          Opens in the browser's native PDF reader with print & download options.
        </p>
      </div>
    </section>
  );
}
