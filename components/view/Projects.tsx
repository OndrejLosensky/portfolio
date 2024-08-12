"use client";

import SectionTitle from "../layout/section-title";

import React from "react";
import { projectsData } from "@/lib/projects";
import Project from "@/components/layout/single-project";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "../ui/button";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

import { useLanguage } from '@/context/language-context';

export default function ProjectsSection() {
  const { data } = useLanguage();
  const { ref } = useSectionInView("Projekty", 0.5);

  return (
    <section ref={ref} id="projekty" className="scroll-mt-28 w-full mx-auto mt-48 mb-28">
      <SectionTitle heading={data.projectsTitle} className="" subHeading={data.projectsDescription} />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}        
      </div>
      <div className="w-full flex items-center">
        <Link href="/dalsi-projekty" className="mt-12 mx-auto active:scale-90 duration-200" > 
          <Button size="custom" variant="outline"  className="flex flex-row gap-x-3 items-center" >
              <FaLaptopCode className="w-5 h-5"/> 
              <span>{data.MoreProjectsBtn}</span>
          </Button> 
        </Link>              
      </div>
    </section>
  );
}
