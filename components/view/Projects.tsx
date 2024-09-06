"use client";

import React from "react";
import { projectsData, sideProjectsData } from "@/lib/projects";
import Project from "@/components/layout/single-project";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "../ui/button";
import Link from "next/link";

import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projekty", 1);

  return (
    <section id="projekty" className="scroll-mt-28 w-full mx-auto mt-48 mb-28">
      <div>
        <div ref={ref} className="text-center mt-20 mb-16">
          <p className="uppercase text-xs lg:text-md font-medium pb-4">
            {" "}
            Skutečné použití{" "}
          </p>
          <h2 className="text-2xl lg:text-5xl  font-bold pb-2"> Projekty </h2>
          <p className="font-light text-black/70 dark:text-white/50">
            {" "}
            Podívejte se na weby, které jsem vyvinul nebo se na nich z části
            podílel{" "}
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mt-32">
          <p className="uppercase text-xs lg:text-md font-medium pb-4">
            {" "}
            Pár příkladů{" "}
          </p>
          <h2 className="text-2xl lg:text-5xl font-bold pb-2">
            {" "}
            Vedlejší projekty{" "}
          </h2>
          <p className="font-light text-black/70 dark:text-white/50">
            {" "}
            Podívejte se na některé mé osobní projekty vytvořené ve volném čase{" "}
          </p>
        </div>

        <div className="mx-auto flex flex-col mt-8 gap-4">
          {sideProjectsData.map((project, index) => (
            <div
              key={index}
              className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row justify-between bg-shark-100 dark:bg-shark-800 rounded-xl shadow-md dark:border-white/40 min-h-72 overflow-hidden"
            >
              <div className="flex-1 p-8 w-full lg:w-1/2">
                <h2 className="text-xl flex flex-col mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-br dark:from-bermuda-300 dark:to-malibu-500 from-bermuda-300-500/85 to-bermuda-800 bg-opacity-50">
                  <span>2024</span>
                </h2>
                <h2 className="text-3xl font-black pb-2">{project.title}</h2>
                <p className="border-b text-sm md:text-md pb-4 border-black/40 dark:border-white/40 opacity-70">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 text-xs md:grid-cols-2 lg:grid-cols-3  mt-4 gap-2 opacity-60">
                  {project.tags.map((tag, idx) => (
                    <span
                      className="bg-shark-300 dark:bg-shark-950 rounded-full py-1 text-center"
                      key={idx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={project.githubLink} target="_blank">
                  <Button
                    size="lg"
                    className="mt-8 px-8 text-white dark:bg-black flex flex-row items-center gap-x-2 mr-4 group"
                  >
                    <span>Podívat se</span>
                    <RxArrowTopRight className="transform transition-transform duration-300 group-hover:rotate-45" />
                  </Button>
                </Link>
              </div>
              <div className="relative overflow-hidden w-full lg:w-1/2 mt-4 lg:mt-0">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} project image`}
                  fill
                  quality={100}
                  className="absolute right-0 top-16 object-top lg:translate-x-8 lg:translate-y-10 dark:border-white rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*
      <div className="w-full flex items-center">
        <Link href="/dalsi-projekty" className="mt-12 mx-auto active:scale-90 duration-200" > 
          <Button size="custom" variant="outline"  className="flex flex-row gap-x-3 items-center" >
              <FaLaptopCode className="w-5 h-5"/> 
              <span>{texts['moreProjectsBtn']}</span>
          </Button> 
        </Link>              
      </div>
      */}
    </section>
  );
}
