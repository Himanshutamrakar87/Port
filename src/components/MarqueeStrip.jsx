import { Sparkles } from 'lucide-react';
import { marqueeItems } from '../data/portfolioData.js';

export default function MarqueeStrip() {
  // Double the list so it scrolls seamlessly
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-6">
            <span className="text-sm font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase font-heading">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-violet-500/70 fill-violet-500/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
