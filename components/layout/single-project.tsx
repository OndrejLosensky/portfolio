import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaGithub, FaShoppingBasket } from "react-icons/fa";
import { projectsData, sideProjectsData } from "@/lib/projects";

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
  disabled, 
}: ProjectProps) {

  return (
    <div className={`bg-gray-200 border border-black/30 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-auto flex flex-col justify-between h-full`}>
      <section className={`flex flex-col flex-grow ${disabled ? 'grayscale' : ''}`}>
        <div className={`w-full ${disabled ? 'bg-gray-500' : 'bg-gradient-to-br from-green-500 via-malibu-500 to-rose-500'}`}>
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className="w-full p-4 aspect-video h-auto rounded-2xl hover:scale-[1.05] duration-200"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            {disabled ? (
              <h3 className="text-gray-400 text-xl font-semibold pt-4 pb-2 text-center">Brzy...</h3>
            ) : (
              <>
                <h3 className="dark:text-gray-100 text-gray-700 text-xl font-semibold pt-4 pb-2">{title}</h3>
                <p className="dark:text-gray-400 text-gray-500 text-sm mb-5">{description}</p>
              </>
            )}
          </div>
          {!disabled && (
            <>
              <ul className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="dark:bg-gray-700 bg-gray-300 dark:text-white text-black text-xs rounded-full px-3 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
                {websiteLink && (
                  <Button
                    variant="ghost"
                    className="bg-gray-400/40 dark:bg-black hover:bg-gray-400/80 dark:hover:bg-black/70 active:scale-90 duration-200"
                  >
                    <Link href={websiteLink} className="flex flex-row items-center space-x-2">
                      <CiGlobe className="w-5 h-5" /> <span>Web</span>
                    </Link>
                  </Button>
                )}

                {githubLink && (
                  <Button
                    variant="ghost"
                    className="bg-gray-400/40 dark:bg-black hover:bg-gray-400/80 dark:hover:bg-black/70 active:scale-90 duration-200"
                  >
                    <Link href={githubLink} className="flex flex-row items-center space-x-2">
                      <FaGithub className="w-5 h-5" /> <span>Github</span>
                    </Link>
                  </Button>
                )}

                {otherLink && (
                  <Button
                    variant="ghost"
                    className="bg-gray-400/40 dark:bg-black hover:bg-gray-400/80 dark:hover:bg-black/70 active:scale-90 duration-200"
                  >
                    <Link href={otherLink} className="flex flex-row items-center gap-x-2">
                      <FaShoppingBasket className="w-5 h-5" /> <span>Eshop</span>
                    </Link>
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
