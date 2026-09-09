import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Enzo Amadei | Coach de vida y conferencista", description: "Acompaño a personas a transformar sus experiencias en aprendizaje y crear una vida con propósito." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
