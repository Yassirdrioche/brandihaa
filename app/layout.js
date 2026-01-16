
import { Manrope, Inter, Space_Grotesk,Bruno_Ace_SC } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});


const brunoAceSC = Bruno_Ace_SC({
  weight: "400", // REQUIRED
  subsets: ["latin"],
  variable: "--font-bruno-ace-sc",
});

export const metadata = {
  title: "Brandiha",
  description: "Crafting Digital Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark no-scrollbar">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}
          ${brunoAceSC.variable} antialiased bg-obsidian text-white no-scrollbar`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
