import BentoGrid from "@/components/layout/bento-grid";
import AboutSection from "@/components/view/about";
import HeroSection from "@/components/view/hero";

export default function Content() {
  return (
    <main className="flex flex-col mx-auto">
      <HeroSection/>
      <AboutSection/>
      <BentoGrid/>
    </main>
  );
}
