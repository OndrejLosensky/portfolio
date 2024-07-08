import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = GetCurrentYear();
  return (
    <div className='max-w-screen w-[100%] mx-auto border-t dark:border-shark-800 bg-transparent h-14 gap-x-3 pb-1 rounded-t-xl md:rounded-t-3xl flex flex-col lg:flex-row md:flex-row items-center justify-between lg:items-center lg:justify-between px-6 border-shark-300/80 '>
          <Link href="/" className="flex flex-row group items-center gap-x-2 my-3 md:my-0">
            <Image src="/logo.svg" height={30} width={30} alt="Logo"/>
            <span className="text-sm pt-1"> © {currentYear} <strong>Losenský </strong></span>
          </Link>
          
          <div className="hidden lg:flex opacity-80">
            <Link href="/cookies" className="hover:text-text-dark dark:hover:text-text-light text-text-dark/60 dark:text-text-light/60 duration-200"> Cookies</Link>
            <span className="opacity-40 px-2"> | </span>
            <Link href="/gdpr" className="hover:text-text-dark dark:hover:text-text-light text-text-dark/60 dark:text-text-light/60 duration-200"> G.D.P.R</Link>
          </div>

          <p className="text-xs md:text-sm hidden lg:flex font-thin"> Všechna práva vyhrazena.  </p>


          <div className="lg:hidden flex flex-row w-full justify-between mt-2 md:mt-0 md:pb-0 pb-8">
            <p className="text-xs md:text-sm font-thin"> Všechna práva vyhrazena.  </p>
            <div className="flex flex-row *:lg:hidden ">
              <Link href="/cookies" className="px-0 hover:text-text-dark text-xs dark:hover:text-text-light text-text-dark/60 border-r border-text-dark/70 dark:border-text-light/70 pr-2 dark:text-text-light/60 duration-200"> Cookies</Link>
              <Link href="/gdpr" className="pl-2 hover:text-text-dark dark:hover:text-text-light text-xs text-text-dark/60 dark:text-text-light/60 duration-200"> G.D.P.R</Link>
            </div>
          </div>
    </div>
  );
}

function GetCurrentYear() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return currentYear;
}