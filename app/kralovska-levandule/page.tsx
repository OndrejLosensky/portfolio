"use client";

import Header from "@/components/nav/header-copy";
import Footer from "@/components/nav/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoMdHome } from "react-icons/io";
import CookiesForm from "../(cookies)/CookiesForm";

export default function KLPage() {
  return (
    <div className="w-3/4 mx-auto flex flex-col justify-between min-h-screen">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-36 lg:mt-20 ">
        <Image
          src="/mockups/kl-full.png"
          width={300}
          height={300}
          alt="Showcase image"
          className="hover:scale-110 hover:-rotate-2 duration-200 w-full  h-full rounded-lg drop-shadow-glow2"
        />
        <div className="flex flex-col justify-center ml-0 lg:ml-8 mt-4 lg:mt-0">
          <h2 className="text-3xl font-semibold text-primary pb-2">
            Královská levandule
          </h2>
          <p className="pt-4 block text-lg  text-text-dark/70 dark:text-text-light/70 ">
            {" "}
            Celý web je postavený na CMS platformě Wordpress. Dále je k webu
            dostupný i e-shop, který je vytvořet na platformě Shoptet.cz <br />{" "}
          </p>
          <h3 className="pt-8"> Zde můžete najít odkazy:</h3>
          <div className="flex flex-col gap-y-4 lg:gap-y-0 gap-x-0 lg:flex-row lg:gap-x-4 mt-2">
            <Link href="https://www.kralovskalevandule.cz">
              <Button className="w-full bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover active:bg-primary-active active:scale-90 duration-200">
                {" "}
                Web{" "}
              </Button>
            </Link>
            <Link href="https://obchod.kralovskalevandule.cz">
              <Button className="w-full bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover active:bg-primary-active active:scale-90 duration-200">
                {" "}
                E-shop{" "}
              </Button>
            </Link>
            <Button variant="ghost" className="mb-20" disabled>
              {" "}
              Zdrojový kód je soukromý{" "}
            </Button>
          </div>
        </div>
      </div>
      <Link href="/">
        <Button className="mx-auto mt-16 mb-32 flex items-center gap-x-2">
          <IoMdHome className="w-6 h-auto" />
          <span>Zpět na domovskou stránku</span>
        </Button>
      </Link>
      <CookiesForm />
      <Footer />
    </div>
  );
}
