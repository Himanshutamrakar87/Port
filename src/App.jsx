import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MarqueeStrip from './components/MarqueeStrip.jsx';
import AboutEducation from './components/AboutEducation.jsx';
import Philosophy from './components/Philosophy.jsx';
import SkillsEcosystem from './components/SkillsEcosystem.jsx';
import ServicesOffered from './components/ServicesOffered.jsx';
import SelectedProjects from './components/SelectedProjects.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Experience from './components/Experience.jsx';
import Hackathons from './components/Hackathons.jsx';
import Highlights from './components/Highlights.jsx';
import Certificates from './components/Certificates.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

import CaseStudyModal from './components/CaseStudyModal.jsx';
import CertificateModal from './components/CertificateModal.jsx';
import ProjectPreviewModal from './components/ProjectPreviewModal.jsx';
import ContactModal from './components/ContactModal.jsx';
import AIAssistant from './components/AIAssistant.jsx';

import { personalInfo } from './data/portfolioData.js';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Initialize theme from preference or system
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const handleOpenResume = (e) => {
    if (e) e.preventDefault();
    window.open(personalInfo.resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-200">
      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Marquee Continuous Strip */}
        <MarqueeStrip />

        {/* Section 01: About & Education */}
        <AboutEducation />

        {/* Section 02: Why Work With Me? (Philosophy) */}
        <Philosophy />

        {/* Section 03: Skills Ecosystem */}
        <SkillsEcosystem />

        {/* Section 04: Services Offered */}
        <ServicesOffered />

        {/* Section 05: Selected Projects */}
        <SelectedProjects onOpenProjectPreview={(proj) => setSelectedProject(proj)} />

        {/* Section 06: Case Studies */}
        <CaseStudies onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

        {/* Section 07: Internship & Experience */}
        <Experience />

        {/* Section 08: Hackathons & Competitions */}
        <Hackathons onOpenCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Section 09: Highlights */}
        <Highlights />

        {/* Section 10: Certificates */}
        <Certificates onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Section 11: My Resume (Minimal) */}
        <ResumeSection onOpenResume={handleOpenResume} />

        {/* Section 12: Initiate Collaboration (Contact) */}
        <ContactSection onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Floating AI Portfolio Assistant */}
      <AIAssistant onOpenContactModal={() => setContactModalOpen(true)} />
    </div>
  );
}
