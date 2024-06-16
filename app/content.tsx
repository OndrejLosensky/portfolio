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
      {/*
      <BentoGrid/>
      <ProjectsSection/>
      <ExperienceSection/>
      <ContactSection/>
       */}
    </main>
  );
}
