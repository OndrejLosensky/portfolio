import dynamic from 'next/dynamic';

import Image from 'next/image';

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
      <h2 className={`dark:text-shark-200 text-shark-600 pb-2 text-center text-sm font-light`}> Tento web byl vytvořen pomocí těchto technologií </h2>
      <div className="mb-16 flex flex-row items-center gap-x-6 scale-75 opacity-75 w-full justify-center">
          <div className="group relative">
            <Image src="/icons/ts.svg" width={64} height={64} alt="TypeScript icon"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">TypeScript</span>
          </div>

          <div className="group relative">
            <Image src="/icons/next.js.svg" width={64} height={64} alt="Nextjs icon"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Next.js</span>
          </div>
          <div className="group relative">
            <Image src="/icons/tailwind.svg" width={64} height={64} alt="TailwindCSS icon"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">TailwindCSS</span>
          </div>
      </div>
    </main>
  );
}
