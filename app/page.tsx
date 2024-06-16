"use client";
import { useState, useEffect } from 'react';
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/footer";
import Content from "./content";
import CircularLoader from "@/components/action/loader";
import CookiesForm from './cookies/CookiesForm';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col mx-auto min-h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <CircularLoader />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-between w-[80%] mx-auto">
          <Header />
          <Content />
          <Footer />
          <CookiesForm/>
        </div>
      )}
    </main>
  );
}
