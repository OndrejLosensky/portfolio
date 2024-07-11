// types/global.d.ts
export {};

declare global {
  interface Window {
    gtag: (type: string, trackingId: string, options: Record<string, any>) => void;
  }
}
