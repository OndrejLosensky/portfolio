import Header from "@/components/nav/header-copy";

import React from "react";
import { projectsDataAll } from "@/lib/projects";
import Project from "@/components/layout/single-project";
import Footer from "@/components/nav/footer-2";
import Link from "next/link";

import { RiArrowGoBackFill } from "react-icons/ri";

export default function MoreProjectsPage () {
    return (
        <div className="scroll-mt-28 overflow-x-hidden relative max-w-screen w-screen h-screen flex flex-col">
            <div className="bg-[#8af8eb] absolute top-[0rem] md:top-[-12rem] -z-10  right-[2rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56b595]"></div>
            <Header/>
            <div className="mt-32 mx-auto w-3/4">
                <div className="flex flex-col gap-x4">
                    <Link href="/" className="w-24 my-4 rounded-md justify-center gap-x-2 py-2 px-4 bg-main/20 dark:bg-white/15 flex flex-row items-center"> <RiArrowGoBackFill/> <span>Zpět</span> </Link>
                    <span className="text-3xl font-bold">
                        Všechny projekty
                    </span>
                </div>
                <div className="mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {projectsDataAll.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))}              
                </div>
            </div>    
            <Footer/>        
        </div>
    )
}