import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Ngifent by Adi Muhamad Firmansyah',
  description: 'Ngifent, buat ngipen',
  openGraph: {
    title: 'Ngifent by Adi Muhamad Firmansyah',
    description: 'Ngifent, buat ngipen',
    url: 'https://ngifent.com',
    siteName: 'Ngifent',
    images: [
      {
        url: 'https://ngifent.com/ogimage.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
