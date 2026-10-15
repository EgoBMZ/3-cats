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
    <html lang="es">
      <head>
        <title>3Cats — Software Development & Project Delivery</title>
        <meta
          name="description"
          content="Proyectos que impulsan tu negocio. Estrategia + Personas + Tecnología = Resultados. Desarrollo de software enterprise, gestión de proyectos y consultoría tecnológica."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main style={{ paddingTop: '76px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
