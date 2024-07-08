"use client";

import SectionTitle from "../layout/section-title";

import React from "react";
import { projectsData } from "@/lib/projects";
import Project from "@/components/layout/single-project";
import { useSectionInView } from "@/lib/hooks";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projekty", 0.5);

  return (
    <section ref={ref} id="projekty" className="scroll-mt-28  mx-auto mt-32 mb-28">
      <SectionTitle heading='Projekty' subHeading='Zde se nachází přehled nějakých mých projektů, které lze najít většinou najít i na mém GitHubu' />
      <div className="mx-auto max-w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
