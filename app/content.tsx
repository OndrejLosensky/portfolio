import dynamic from 'next/dynamic';

import HeroSection from '@/components/view/hero';
import NewsletterForm from '@/components/newsletter/newsletter-section';

const BentoGrid = dynamic(() => import('@/components/layout/bento-grid'), {
  ssr: false,
  loading: () => <p>Načítání</p>,
});
const ContactSection = dynamic(() => import('@/components/view/Contact'), {
  ssr: false,
  loading: () => <p>Načítání</p>,
});
const ProjectsSection = dynamic(() => import('@/components/view/Projects'), {
  ssr: false,
  loading: () => <p>Načítání.</p>,
});

const ExperienceSection = dynamic(() => import('@/components/view/VerticalTimeline'), {
  ssr: false,
  loading: () => <p>Načítání</p>,
});
const AboutSection = dynamic(() => import('@/components/view/about'), {
  ssr: false,
  loading: () => <p>Načítání</p>,
});


export default function Content() {
  return (
    <main className="flex flex-col mx-auto">
      <HeroSection/>
      <AboutSection/>
      <BentoGrid/>
      <ProjectsSection/>
      {/* 
      <ExperienceSection/>
      */}
      <NewsletterForm/>
      <ContactSection/>
    </main>
  );
}
