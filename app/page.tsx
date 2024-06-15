import { Button } from "@/components/ui/button";
import AboutSection from "@/components/view/about";
import HeroSection from "@/components/view/hero";
export default function Home() {
  return (
    <main className="flex flex-col mx-auto">
      <HeroSection/>
      <AboutSection/>
    </main>
  );
}
