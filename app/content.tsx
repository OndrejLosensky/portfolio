import dynamic from "next/dynamic";

import HeroSection from "@/components/view/hero";

const BentoGrid = dynamic(() => import("@/components/layout/bento-grid"), {
  ssr: false,
  loading: () => <p className="text-center">Načítání sekce...</p>,
});
const ContactSection = dynamic(() => import("@/components/view/Contact"), {
  ssr: false,
  loading: () => <p className="text-center">Načítání sekce...</p>,
});
const ProjectsSection = dynamic(() => import("@/components/view/Projects"), {
  ssr: false,
  loading: () => <p className="text-center">Načítání sekce...</p>,
});

const WorkWithMeSection = dynamic(
  () => import("@/components/view/working-with-me"),
  {
    ssr: false,
    loading: () => <p className="text-center">Načítání sekce...</p>,
  }
);
const AboutSection = dynamic(() => import("@/components/view/about"), {
  ssr: false,
  loading: () => <p className="text-center">Načítání sekce...</p>,
});

export default function Content() {
  return (
    <main className="flex flex-col mx-auto">
      <HeroSection />
      <AboutSection />
      <BentoGrid />
      <ProjectsSection />
      <WorkWithMeSection />
      <ContactSection />
    </main>
  );
}
