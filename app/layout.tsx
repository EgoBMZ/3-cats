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
        <title>3CATS — Software Development & Project Delivery</title>
        <meta
          name="description"
          content="Ingeniería tecnológica para transformar negocios. Automatización de procesos, agentes de IA, datos e inteligencia de negocios, arquitectura cloud, software a la medida y gestión de proyectos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#02050F" />
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
