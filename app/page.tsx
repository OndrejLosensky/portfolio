"use client";

import dynamic from 'next/dynamic';
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/footer";
import CookiesForm from './cookies/CookiesForm';
import Loader from '@/components/loaders/loader';
import Content from './content';


export default function Home() {

  return (
    <main className="flex flex-col mx-auto min-h-screen">
        <div className="min-h-screen flex flex-col justify-between w-[80%] mx-auto">
          <Header />
          <Content />
          <Footer />
          <CookiesForm/>
        </div>
    </main>
  );
}
