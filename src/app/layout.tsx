import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#05050b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noweb.cl"),
  title: "Noweb Labs | Diseño y Páginas Web Puerto Montt | SEO y E-commerce",
  description: "Tu agencia de desarrollo web en Puerto Montt. Creamos páginas, e-commerce y soluciones SEO de alto rendimiento para Pymes en la Región de Los Lagos.",
  keywords: [
    "Diseño web Puerto Montt",
    "Páginas web Puerto Montt",
    "Desarrollo web Puerto Montt",
    "Agencia digital Puerto Montt",
    "SEO Puerto Montt",
    "Marketing digital Puerto Montt",
    "Creación tiendas online",
    "E-commerce Puerto Montt",
    "Mantenimiento web",
    "Puerto Varas",
    "Región de Los Lagos",
    "Pymes Chile",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  authors: [{ name: "Noweb Labs" }],
  creator: "Noweb Labs",
  publisher: "Noweb Labs",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YRSyqkg95tHwAWE3vdOjq8OJUUavzL9NgGenhUTlI8c",
  },
  openGraph: {
    title: "Noweb Labs | Diseño y Páginas Web Puerto Montt | SEO y E-commerce",
    description: "Tu agencia de desarrollo web en Puerto Montt. Creamos páginas web, e-commerce y soluciones SEO de alto rendimiento para Pymes de la Región de Los Lagos.",
    url: "https://www.noweb.cl",
    siteName: "Noweb Labs",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diseño Web Puerto Montt - Noweb Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noweb Labs | Diseño y Páginas Web Puerto Montt",
    description: "Expertos en desarrollo web y SEO local en Puerto Montt y la Región de Los Lagos.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Noweb Labs",
    "image": "https://www.noweb.cl/logo.png",
    "@id": "https://www.noweb.cl",
    "url": "https://www.noweb.cl",
    "telephone": "+56987843957",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Austral 1795 (Kingdom Coffee)",
      "addressLocality": "Puerto Montt",
      "addressRegion": "Región de Los Lagos",
      "postalCode": "5480000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -41.4689,
      "longitude": -72.9411
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Puerto Montt" },
      { "@type": "AdministrativeArea", "name": "Puerto Varas" },
      { "@type": "AdministrativeArea", "name": "Región de Los Lagos" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/noweb.labs/"
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
