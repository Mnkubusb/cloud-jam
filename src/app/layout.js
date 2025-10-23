import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Google Cloud Study Jams 25-26 | GDG GECB",
  description: "Live leaderboard for Google Cloud Study Jams 2025-26. Track skill badges, arcade games, and participant progress at MLR Institute of Technology.",
  keywords: ["Google Cloud", "Study Jams", "GCCP", "GDGC MLRIT", "Leaderboard", "Cloud Skills"],
  authors: [{ name: "GDG GECB" }],
  creator: "GDG GECB",
  publisher: "GDG GECB",
  robots: "index,follow",
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Google Cloud Study Jams 25-26 | GDG GECB",
    description: "Live leaderboard for Google Cloud Study Jams 2025-26. Track skill badges, arcade games, and participant progress.",
    url: "https://googlecloudjamleaderboard.vercel.app",
    siteName: "Cloud Jam GECB Leaderboard",
    images: [
      {
        url: "https://github.com/Mnkubusb/cloud-jam/blob/main/public/assets/Screenshot.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Google Cloud Study Jams Leaderboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  
  twitter: {
    card: "summary_large_image",
    title: "Google Cloud Study Jams 25-26 | GDG GECB",
    description: "Live leaderboard for Google Cloud Study Jams 2025-26. Track skill badges, arcade games, and participant progress.",
    images: ["https://github.com/Mnkubusb/cloud-jam/blob/main/public/assets/Screenshot.png?raw=true"],
    creator: "@gdgecb",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head>
        
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
