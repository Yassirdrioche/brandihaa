import {
  Manrope,
  Inter,
  Space_Grotesk,
  Bruno_Ace_SC,
  Cormorant_Garamond,
} from "next/font/google";
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
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace-sc",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: "italic",
});

export const metadata = {
  title: "Brandiha",
  description: "Crafting Digital Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark no-scrollbar">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}
        ${brunoAceSC.variable} ${cormorant.variable}
        antialiased bg-[#1b1b1b] text-white no-scrollbar relative overflow-x-hidden`}
      >
        {/* ================= GRID BACKGROUNDS ================= */}

        {/* Primary Line Grid */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.40) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.40) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Micro Grid Overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.40) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.40) 0.5px, transparent 0.5px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Subtle Vignette (optional but 🔥) */}
        <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)]" />

        {/* ================= APP CONTENT ================= */}
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
