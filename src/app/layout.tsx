import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:'Sharoon Masih',
    template:' %s | Sharoon Masih'
  },
  description: "I'm Sharoon Masih, Co-Founder, JamStack & ChatGpt Developer at Techverse51. My professional experience spans over 11 months, with a strong background in various technologies including Next.js, Tailwind CSS, TypeScript, HTML, CSS, MongoDB, Supabase, Sanity, CustomGpt and Zapier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[#E5E5E5] overflow-x-hidden`}>{children}
       
      </body>
    </html>
  );
}
