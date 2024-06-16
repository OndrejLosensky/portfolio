import BentoGrid from "@/components/layout/bento-grid";
import ContactSection from "@/components/view/Contact";
import ProjectsSection from "@/components/view/Projects";
import ExperienceSection from "@/components/view/VerticalTimeline";
import AboutSection from "@/components/view/about";
import HeroSection from "@/components/view/hero";

export default function Content() {
  return (
    <main className="flex flex-col mx-auto">
      <HeroSection/>
      <AboutSection/>
      <span className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bermuda-300  to-bermuda-500 text-center drop-shadow-glow">
                  Přehled
                </span>
      <p className="text-center text-xl pt-1 font-light text-text-dark dark:text-text-light"> Najděte rychle vše co potřebujete </p>
      <BentoGrid/>
      <ProjectsSection/>
      <ExperienceSection/>
      <ContactSection/>
    </main>
  );
}
