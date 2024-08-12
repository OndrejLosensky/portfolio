import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = GetCurrentYear();
  return (
    <div className='w-[80%] py-4 pb-4 mx-auto border-t dark:border-shark-800 bg-transparent h-14 gap-x-3 rounded-t-xl md:rounded-t-3xl flex flex-col md:flex-row items-center justify-between px-6 border-shark-300/80 '>
          <Link href="/" className="flex flex-row group items-center gap-x-2 my-3 md:my-0">
            <Image src="/logo.svg" height={30} width={30} alt="Logo"/>
            <span className="text-sm pt-1"> © {currentYear} <strong>Losenský </strong></span>
          </Link>         
          <div className="flex flex-row justify-between gap-x-4 md:pb-0 pb-8">
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