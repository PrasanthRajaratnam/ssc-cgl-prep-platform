import '@/app/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SSC CGL Master Platform',
  description: 'Self‑study hub and mock‑test engine for SSC CGL',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}