import { Trophy, ArrowUpRight, Users, Award, ShieldCheck } from 'lucide-react';
import { hackathonsData } from '../data/portfolioData.js';

export default function Hackathons({ onOpenCertificate }) {
  return (
    <section id="hackathons" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>08 / ARENA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            Hackathons & Competitions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Pushing creativity and engineering agility in high-velocity collaborative settings.
          </p>
        </div>

        {/* 4 Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathonsData.map((hack) => (
            <div
              key={hack.id}
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                    {hack.type} Hackathon
                  </span>
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{hack.team}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-neutral-950 dark:text-white">
                  {hack.title}
                </h3>

                {/* Project & Role Info */}
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  <p>
                    <span className="font-semibold text-neutral-900 dark:text-white">Project: </span>
                    <span className="text-violet-600 dark:text-violet-400 font-medium">{hack.project}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900 dark:text-white">Role: </span>
                    <span>{hack.role}</span>
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">Challenge: </span>
                    {hack.problem}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">Contribution: </span>
                    {hack.contribution}
                  </p>
                </div>
              </div>

              {/* Achievement & Actions */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Trophy className="w-4 h-4 shrink-0" />
                  <span>{hack.achievement}</span>
                </div>

                <div className="flex items-center gap-3">
                  {hack.links.certificate && (
                    <button
                      type="button"
                      onClick={() => onOpenCertificate({ id: 'cert2', title: 'NITS Hack 8.0' })}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Certificate</span>
                    </button>
                  )}
                  {hack.links.post && (
                    <a
                      href={hack.links.post}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <span>View Post</span>
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
