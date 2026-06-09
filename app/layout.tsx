import type { ReactNode } from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Airport',
  description: 'Next.js project skeleton for the Airport workspace',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
