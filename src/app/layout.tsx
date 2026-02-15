import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diseño de páginas web en Puerto Montt - Noweb Labs",
  description: "Diseño y Desarrollo de Páginas Web en Puerto Montt. Creamos sitios web profesionales, rápidos y optimizados para SEO que convierten visitantes en clientes.",
  keywords: ["diseño web puerto montt", "paginas web puerto montt", "desarrollo web puerto montt", "noweb labs"],
  openGraph: {
    title: "Diseño de páginas web en Puerto Montt - Noweb Labs",
    description: "Diseño y Desarrollo de Páginas Web en Puerto Montt. Sitios autoadministrables y rápidos.",
    url: "https://www.noweb.cl",
    siteName: "Noweb Labs",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

