import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
        <AboutSection />
        <Timeline />
      </main>
      <main className="projects-main sm:px-6">
        <ProjectsSection />
      </main>
    </div>
  );
}
