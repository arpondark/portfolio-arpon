import Navbar from '@/components/Navbar';
import HeroEnhanced from '@/components/HeroEnhanced';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectShowcase3D from '@/components/ProjectShowcase3D';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Background layers */}
      <div className="fixed inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroEnhanced />
          <AboutSection />
          <SkillsSection />
          <ProjectShowcase3D />
        </main>
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}
