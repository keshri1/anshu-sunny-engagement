import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anshu & Sunny — Ring Ceremony · 20 August 2026',
  description: 'You are cordially invited to celebrate the Engagement of Anshu Kumari & Sunny Keshri on 20th August 2026 at Emerald Garden Banquet Hall, Patna.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&family=Dancing+Script:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#0a0208' }}>{children}</body>
    </html>
  );
}
