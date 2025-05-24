import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectShowcase3D from '@/components/ProjectShowcase3D';
import Footer from '@/components/Footer';

const projects = [
  {
    title: "Love Proposal Platform",
    description: "A romantic web application for creating and sharing love proposals with interactive elements and animations.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Love+Proposal",
    liveDemo: "https://love-proposal.vercel.app",
    githubLink: "https://github.com/yourusername/love-proposal",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Barta Test",
    description: "A real-time messaging application with modern UI and instant message delivery.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Barta+Test",
    liveDemo: "https://barta-test.vercel.app",
    githubLink: "https://github.com/yourusername/barta-test",
    technologies: ["React", "Firebase", "Material-UI", "WebSocket"]
  },
  {
    title: "Blog Platform",
    description: "A full-featured blogging platform with rich text editing and user authentication.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Blog+Platform",
    liveDemo: "https://blog-platform.vercel.app",
    githubLink: "https://github.com/yourusername/blog-platform",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Love Me Fun",
    description: "An interactive dating application with gamification elements and real-time matching.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Love+Me+Fun",
    liveDemo: "https://love-me-fun.vercel.app",
    githubLink: "https://github.com/yourusername/love-me-fun",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    title: "Todo App",
    description: "A modern todo application with drag-and-drop functionality and real-time updates.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Todo+App",
    liveDemo: "https://todo-app.vercel.app",
    githubLink: "https://github.com/yourusername/todo-app",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"]
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <section id="projects" className="section-padding bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
              Featured Projects
            </h2>
            <ProjectShowcase3D projects={projects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
