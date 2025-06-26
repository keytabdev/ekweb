import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";

const graphie = localFont({
  src: [
    {
      path: './fonts/Graphie-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/graphie-bold.otf',
      weight: '700',
      style: 'normal',
    },
    // Add more weights as needed
  ],
  variable: "--font-graphie",
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Eklavya Website",
  description: "Eklavya Website",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${graphie.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
