// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import ThemeContextProvider from "@/context/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section";
import ClientLoader from "@/components/loaders/client-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ondřej Losenský",
  description: "Personal web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sora max-w-screen bg-shark-50 text-shark-950 dark:bg-shark-950 dark:text-shark-50`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ClientLoader>
              {children}
            </ClientLoader>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
