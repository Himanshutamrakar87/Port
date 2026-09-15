import { ArrowRight, ArrowUpRight, Sparkles, Layers, Figma } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Ambient Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-violet-400/10 dark:from-blue-600/10 dark:via-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse"></span>
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              <span>Turning Ideas</span>
              <br />
              <span>Into Digital </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Experiences.
              </span>
            </h1>

            {/* Role & Tagline */}
            <div className="space-y-1.5">
              <p className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {personalInfo.role}
              </p>
              <p className="text-xs font-bold tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-full transition-all shadow-md active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenResume) {
                    onOpenResume(e);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-full transition-all shadow-sm active:scale-95"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
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
          </div>

          {/* Right Image Composition Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              {/* Subtle Glowing Radial Backdrop */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-violet-500/20 blur-2xl animate-pulse-glow" />

              {/* Orbital Curved Rings */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 dark:border-violet-400/20" />
              <div className="absolute inset-3 rounded-full border border-dashed border-indigo-400/30 dark:border-indigo-500/30 animate-spin [animation-duration:60s]" />

              {/* Avatar Center Frame */}
              <div className="relative w-[270px] sm:w-[320px] h-[270px] sm:h-[320px] rounded-full p-2 bg-gradient-to-b from-neutral-200 via-neutral-100 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 shadow-xl border border-white/60 dark:border-neutral-800">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-2 border-white dark:border-neutral-800 relative">
                  <img
                    src={personalInfo.primaryPhoto}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = personalInfo.primaryPhoto;
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge 1: UI/UX Design (Top Right) */}
              <div className="absolute top-2 sm:top-4 right-0 sm:-right-4 z-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-lg flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                  <Figma className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">UI/UX Design</p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">Figma · Prototyping</p>
                </div>
              </div>

              {/* Floating Badge 2: MERN Stack (Bottom Right) */}
              <div className="absolute bottom-12 sm:bottom-16 -right-2 sm:-right-6 z-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-lg flex items-center gap-2.5 animate-float-slow [animation-delay:2s]">
                <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">MERN Stack</p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">React · Node.js</p>
                </div>
              </div>

              {/* Floating Badge 3: AI Products (Bottom Left) */}
              <div className="absolute bottom-2 sm:bottom-4 -left-2 sm:-left-6 z-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-lg flex items-center gap-2.5 animate-float-slow [animation-delay:4s]">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">AI Products</p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">Gemini · AI Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
