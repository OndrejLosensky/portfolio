// components/ClientLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/loaders/loader';

const ClientLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ClientLoader;
