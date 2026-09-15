import { useState } from 'react';
import { Mail, MapPin, ArrowRight, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function ContactSection({ onOpenContactModal }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Initiate Collaboration</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight leading-tight">
          Let’s Build Something Meaningful.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Have an idea, project or opportunity? Let’s turn it into a digital experience.
        </p>

        {/* Quick Contact Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Email badge with copy action */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <Mail className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>{personalInfo.email}</span>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="p-1 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <MapPin className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}?subject=Project%20Inquiry%20from%20Portfolio`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all shadow-md active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all active:scale-95"
          >
            <span>Quick Message</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
          <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
          <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-12">
          <p className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase font-heading">
            {personalInfo.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
