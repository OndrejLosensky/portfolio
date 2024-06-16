import Image from "next/image";
import { FaGithub, FaDev, FaLinkedin} from "react-icons/fa";

export default function Footer() {
  const currentYear = GetCurrentYear();
  return (
    <div className='max-w-screen w-full mx-auto border-t dark:border-shark-800 bg-transparent h-14 gap-x-3 pb-1 rounded-t-xl md:rounded-t-3xl flex flex-col md:flex-row items-center justify-between px-6 border-shark-300/80 '>
          <div className="flex flex-row items-center gap-x-2 my-3 md:my-0">
            <Image src="/logo.svg" height={30} width={30} alt="Logo"/>
            <span className="text-sm pt-1"> © {currentYear} <strong>Losenský </strong></span>
          </div>
          <div className="flex flex-row justify-between gap-x-4 md:pb-0 pb-8">
            <div className="flex flex-row items-center gap-x-4">
                <FaGithub className="w-5 h-5 hover:scale-110 cursor-pointer duration-200"/>
                <FaLinkedin className="w-5 h-5 hover:scale-110 cursor-pointer duration-200"/>
                <FaDev className="w-5 h-5 hover:scale-110 cursor-pointer duration-200"/>
            </div>
            <p className="text-sm font-thin pt-1"> Všechna práva vyhrazena.  </p>
          </div>
    </div>
  );
}

function GetCurrentYear() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return currentYear;
}