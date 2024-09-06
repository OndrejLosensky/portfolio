import Image from "next/image";
import Link from "next/link";

import { useTexts } from "@/context/texts-context";

export default function Footer() {
  const { texts } = useTexts();

  const currentYear = GetCurrentYear();
  return (
    <div className="relative max-w-screen w-[100%] mx-auto border-t dark:border-shark-800 bg-transparent h-14 gap-x-3 pb-1 rounded-t-xl md:rounded-t-3xl flex flex-col lg:flex-row md:flex-row items-center justify-between lg:items-center lg:justify-between px-6 border-shark-300/80 ">
      <Link
        href="/"
        className="flex flex-row group items-center gap-x-2 my-3 md:my-0"
      >
        <Image src="/logo.svg" height={30} width={30} alt="Logo" />
        <span className="text-sm pt-1">
          {" "}
          © {currentYear} <strong>{texts["name"]} </strong>
        </span>
      </Link>

      <p className="text-xs md:text-sm hidden md:flex font-thin">
        {" "}
        {texts["footerAllRightReserved"]}{" "}
      </p>

      <div className="md:hidden flex flex-row w-full justify-between mt-2 md:mt-0 md:pb-0 pb-8">
        <p className="text-xs md:text-sm font-thin text-center mx-auto">
          {" "}
          {texts["footerAllRightReserved"]}{" "}
        </p>
        <div className="flex flex-row "></div>
      </div>
    </div>
  );
}

function GetCurrentYear() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return currentYear;
}
