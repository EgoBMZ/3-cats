"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>3Cats - Technology, Strategy and Innovation</title>
        <meta name="description" content="A consolidated team of specialists in software development, AI, marketing, and consulting." />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main style={{ paddingTop: '80px', flex: 1 }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
