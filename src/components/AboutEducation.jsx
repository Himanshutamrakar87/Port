import { GraduationCap, Award, Compass, Sparkles } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData.js';

export default function AboutEducation() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2">
            <span>01 / FOUNDATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white tracking-tight">
            About & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: About Me */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-heading text-neutral-900 dark:text-white mb-2">
                A Little About Me
              </h3>
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                Designer by mindset. Developer by craft. Product thinker by nature.
              </p>
            </div>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
              <p>
                I am an AI Product Designer and MERN Stack Developer driven by the challenge of bridging aesthetic fidelity with production-grade engineering. Rather than treating design and software as isolated phases, I treat code as a medium of craft and interfaces as dynamic, living software systems.
              </p>
              <p>
                My process balances deep product empathy with modern generative AI tooling, building rapid interactive prototypes in Figma, synthesizing them with robust React architectures, and integrating autonomous services with Gemini API pipelines.
              </p>
            </div>

            {/* Metric / Credential Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-2xl font-extrabold font-heading text-neutral-900 dark:text-white">
                    9.23
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  Academic CGPA (Current)
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  AKS University · BCA Honors
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-2xl font-extrabold font-heading text-neutral-900 dark:text-white">
                    100%
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  End-to-End Craft
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  From Figma UX to React Production
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-heading text-neutral-900 dark:text-white mb-2">
                Education
              </h3>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Building a strong foundation for what I want to create next.
              </p>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{edu.badge}</span>
                    </span>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-neutral-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                    {edu.degree}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      Academic Score
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
