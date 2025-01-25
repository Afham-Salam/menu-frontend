import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const oswaldFont = Oswald({
  variable: "--font-oswald", // Custom CSS variable
 
  weight: ["400", "700"], // Specify the font weights (adjust as needed)
});

export const metadata: Metadata = {
  title: "DeepNet Soft",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswaldFont.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
