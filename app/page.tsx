"use client";  // Mark this file as a client component

import { useState, useEffect } from 'react';
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/footer";
import Content from "./content";
import CircularLoader from "@/components/action/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or perform actual data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 120000); // 2 seconds for demonstration purposes

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
        </div>
      )}
    </main>
  );
}
