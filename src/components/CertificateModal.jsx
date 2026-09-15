import { X, Award, CheckCircle, Calendar, ArrowUpRight, ExternalLink } from 'lucide-react';
import { certificatesData } from '../data/portfolioData.js';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  // Find full certificate data if partial passed
  const fullCert = certificatesData.find((c) => c.id === certificate.id) || certificate;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Display Card */}
        <div className="text-center pt-2 pb-4">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-violet-500/20 text-violet-600 dark:text-violet-400 mb-4 border border-violet-200/60 dark:border-violet-800/60">
            <Award className="w-10 h-10" />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>Verified Certificate of Completion</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-neutral-950 dark:text-white mb-2">
            {fullCert.title}
          </h3>

          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-1">
            Issued by {fullCert.issuer}
          </p>

          <div className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
            <Calendar className="w-3.5 h-3.5" />
            <span>{fullCert.date || 'Verified'}</span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 text-left text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            <p className="font-semibold text-neutral-900 dark:text-white mb-1">
              Credential Overview:
            </p>
            <p>
              {fullCert.description ||
                'This credential authenticates verified practical competencies, academic project excellence, and validated problem-solving capabilities.'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {fullCert.credentialUrl && (
              <a
                href={fullCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all shadow-sm active:scale-95"
              >
                <span>Verify Issuer Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
