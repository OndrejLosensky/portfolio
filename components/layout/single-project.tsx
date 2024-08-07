"use client";

import { projectsData } from "@/lib/projects";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaGithub, FaShoppingBasket } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  websiteLink,
  otherLink,
  gradient, 
}: ProjectProps) {

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-auto flex flex-col justify-between h-full">
      <section className="flex flex-col flex-grow">
        <div className={`w-full bg-gradient-to-br ${gradient}`}>
          <Image
            src={imageUrl}
            alt={title} 
            quality={90}
            className="w-full p-4 aspect-video h-auto rounded-2xl hover:scale-[1.05] duration-200"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-white text-xl font-semibold pt-4 pb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-5">{description}</p>
          </div>
          <div className="mt-auto">
            <ul className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <li key={index} className="bg-gray-700 text-white text-xs rounded-full px-3 py-1">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="space-x-2">
              {websiteLink ? (
                <Button variant="ghost">
                  <Link href={websiteLink} className="flex flex-row items-center gap-x-2">
                    <CiGlobe className="w-5 h-5" /> <span>Website</span>
                  </Link>
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  <span className="flex flex-row items-center gap-x-2">
                    <CiGlobe className="w-5 h-5" /> <span>Website</span>
                  </span>
                </Button>
              )}              

              {githubLink ? (
                <Button variant="ghost">
                  <Link href={githubLink} className="flex flex-row items-center gap-x-2">
                    <FaGithub className="w-5 h-5" /> <span>Github</span>
                  </Link>
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  <span className="flex flex-row items-center gap-x-2">
                    <FaGithub className="w-5 h-5" /> <span>Github</span>
                  </span>
                </Button>
              )}

              {otherLink ? (
                    <Button variant="ghost">
                      <Link href={otherLink} className="flex flex-row items-center gap-x-2">
                        <FaShoppingBasket className="w-5 h-5" /> <span>Eshop</span>
                      </Link>
                    </Button>
              ) : (
                <Button className="hidden"> 
                    <div>
                        Ostatní  
                    </div>  
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
