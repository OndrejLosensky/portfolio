import Loader  from "@/components/action/loader";
import BentoGrid from "@/components/layout/bento-grid";
import AboutSection from "@/components/view/about";
import HeroSection from "@/components/view/hero";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto">
      <HeroSection/>
      <AboutSection/>
      <BentoGrid/>
      <Loader/>
    </main>
  );
}
