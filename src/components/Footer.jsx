import { ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <footer className="py-14 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/80 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-2">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-2xl font-bold font-heading tracking-tight text-neutral-950 dark:text-white"
            >
              <span>Himanshu</span>
              
            </a>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {personalInfo.role}
            </p>
            <p className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Links & Social Col */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© 2026 Himanshu Tamrakar. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5 font-medium">
            <span>Designed & Built with AI</span>
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
