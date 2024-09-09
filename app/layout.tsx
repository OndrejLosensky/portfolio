// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import ThemeContextProvider from "@/context/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section";
import ClientLoader from "@/components/loaders/client-loader";
import { LanguageProvider } from "@/context/language-context";
import { TextsProvider } from "@/context/texts-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ondřej Losenský",
  description:
    "Ondřej Losenský - Vývojář webových stránek a dalších technologií",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-sora max-w-screen bg-gray-100 text-shark-950 dark:bg-shark-950 dark:text-shark-50`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ClientLoader>
              <LanguageProvider>
                <TextsProvider>{children}</TextsProvider>
              </LanguageProvider>
            </ClientLoader>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
