import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perlify - Open Source Analytics Platform",
  description: "Your fun and insightful window into the world of open source. Discover repository analytics, contributor stories, and development trends like never before.",
  metadataBase: new URL('https://perlify.club'),
  keywords: ['github analytics', 'open source metrics', 'repository analytics', 'code insights', 'github statistics'],
  authors: [
    { name: 'Shadev Kumar', url: 'https://x.com/shadevkumarr' },
    { name: 'Sourabh Rathour', url: 'https://x.com/sourabhrathourr' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://perlify.club',
    siteName: 'Perlify',
    title: 'Perlify - Open Source Analytics Platform',
    description: 'Your fun and insightful window into the world of open source. Discover repository analytics like never before.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Perlify - Open Source Analytics Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@perlifyapp',
    creator: '@perlifyapp',
    title: 'Perlify - Open Source Analytics Platform',
    description: 'Your fun and insightful window into the world of open source. Discover repository analytics like never before.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
