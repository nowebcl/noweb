import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05050b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noweb.cl"),
  title: "Diseño de Páginas Web en Puerto Montt | Noweb Labs",
  description: "Agencia de diseño y desarrollo de páginas web en Puerto Montt, Puerto Varas y Región de Los Lagos. Creamos sitios web ultra rápidos, tiendas online e-commerce y SEO local.",
  keywords: [
    "Diseño de páginas web en Puerto Montt",
    "Páginas web Puerto Montt",
    "Diseño web Puerto Montt",
    "Desarrollo web Puerto Montt",
    "Creación de páginas web Puerto Montt",
    "Páginas web Puerto Varas",
    "Diseño web Puerto Varas",
    "Páginas web Frutillar",
    "Páginas web Osorno",
    "Páginas web Chiloé",
    "Región de Los Lagos",
    "Tiendas online Puerto Montt",
    "E-commerce Puerto Montt",
    "SEO Puerto Montt",
    "Posicionamiento web Puerto Montt",
    "Agencia digital Puerto Montt",
    "Noweb Labs",
  ],
  icons: {
    icon: "/icon.png?v=2",
    apple: "/apple-icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
  authors: [{ name: "Noweb Labs", url: "https://www.noweb.cl" }],
  creator: "Noweb Labs",
  publisher: "Noweb Labs",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.noweb.cl",
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
    title: "Diseño de Páginas Web en Puerto Montt | Noweb Labs",
    description: "Agencia de diseño de páginas web, tiendas online y posicionamiento SEO en Puerto Montt, Puerto Varas y Región de Los Lagos. Entrega rápida y soporte local.",
    url: "https://www.noweb.cl",
    siteName: "Noweb Labs - Diseño Web Puerto Montt",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diseño de Páginas Web en Puerto Montt - Noweb Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño de Páginas Web en Puerto Montt | Noweb Labs",
    description: "Agencia de páginas web y tiendas online en Puerto Montt, Puerto Varas y Región de Los Lagos.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "CL-LL",
    "geo.placename": "Puerto Montt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.noweb.cl/#website",
        "url": "https://www.noweb.cl",
        "name": "Noweb Labs | Diseño de Páginas Web en Puerto Montt",
        "description": "Agencia líder en diseño de páginas web, tiendas online e-commerce y posicionamiento SEO en Puerto Montt, Puerto Varas y Región de Los Lagos.",
        "inLanguage": "es-CL",
        "publisher": {
          "@id": "https://www.noweb.cl/#organization"
        }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.noweb.cl/#organization",
        "name": "Noweb Labs",
        "alternateName": ["Noweb", "Noweb Labs Puerto Montt", "Diseño Web Puerto Montt"],
        "url": "https://www.noweb.cl",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.noweb.cl/logo.png",
          "width": 220,
          "height": 70
        },
        "image": "https://www.noweb.cl/og-image.jpg",
        "telephone": "+56987843957",
        "priceRange": "$$",
        "currenciesAccepted": "CLP",
        "paymentAccepted": "Transferencia bancaria, Webpay Plus, Mercado Pago, Tarjeta de Crédito, Débito",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Puerto Montt",
          "addressRegion": "Región de Los Lagos",
          "addressCountry": "CL"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Puerto Montt",
            "sameAs": "https://www.wikidata.org/wiki/Q36214"
          },
          {
            "@type": "City",
            "name": "Puerto Varas",
            "sameAs": "https://www.wikidata.org/wiki/Q51605"
          },
          {
            "@type": "City",
            "name": "Frutillar",
            "sameAs": "https://www.wikidata.org/wiki/Q10006"
          },
          {
            "@type": "City",
            "name": "Llanquihue",
            "sameAs": "https://www.wikidata.org/wiki/Q14470"
          },
          {
            "@type": "City",
            "name": "Osorno",
            "sameAs": "https://www.wikidata.org/wiki/Q51061"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Chiloé",
            "sameAs": "https://www.wikidata.org/wiki/Q192931"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Región de Los Lagos",
            "sameAs": "https://www.wikidata.org/wiki/Q2179"
          },
          {
            "@type": "Country",
            "name": "Chile",
            "sameAs": "https://www.wikidata.org/wiki/Q298"
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "10:00",
            "closes": "14:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "99",
          "reviewCount": "99"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Planes de Diseño y Desarrollo de Páginas Web en Puerto Montt",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web One Shot para Pymes",
                "description": "Presencia web ágil, profesional y lista en 1 día hábil con hosting y dominio incluido."
              },
              "price": "89990",
              "priceCurrency": "CLP"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Administrable",
                "description": "Sitio web autoadministrable con panel fácil de usar para control de servicios y productos."
              },
              "price": "149980",
              "priceCurrency": "CLP"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tienda Online Fast Shop E-commerce",
                "description": "Tienda en línea ultrarrápida tipo Shopify con pasarela Webpay Plus / Mercado Pago sin comisiones mensuales."
              },
              "price": "249980",
              "priceCurrency": "CLP"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Página Web para Inmobiliarias",
                "description": "Plataforma especializada en gestión y publicación de propiedades en Puerto Montt y el sur de Chile."
              },
              "price": "350000",
              "priceCurrency": "CLP"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tienda Online Full Profesional",
                "description": "Solución de e-commerce completa y escalable con productos ilimitados, gestión de stock e integración de pagos."
              },
              "price": "460000",
              "priceCurrency": "CLP"
            }
          ]
        },
        "sameAs": [
          "https://www.instagram.com/noweb.dev/"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.noweb.cl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo demora crear mi página web en Puerto Montt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El tiempo mínimo de entrega es de 1 a 2 días hábiles en planes para pymes (Web One Shot). En proyectos más grandes, tiendas online o desarrollo a medida, los tiempos van de 4 a 15 días hábiles."
            }
          },
          {
            "@type": "Question",
            "name": "¿Tengo que pagar mensualidad por mi página web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Nuestros planes son de pago único. El primer año incluye dominio y hosting; a partir del segundo año solo renuevas los costos directos de servidor y dominio."
            }
          },
          {
            "@type": "Question",
            "name": "¿Incluyen hosting y dominio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Incluimos dominio (.cl o .com) y hosting por el primer año en todos nuestros planes."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo actualizar el contenido yo mismo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Entregamos sitios web autoadministrables con paneles modernos e intuitivos, y te capacitamos para que puedas cambiar textos, fotos y productos sin depender de nadie."
            }
          },
          {
            "@type": "Question",
            "name": "¿Mi página web se verá bien en celulares y tablets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Todos los sitios se desarrollan con arquitectura 100% responsive, optimizados para velocidad en celulares y con botones directos de contacto por WhatsApp y llamada."
            }
          },
          {
            "@type": "Question",
            "name": "¿Tienen atención para clientes en Puerto Montt y otras regiones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, brindamos atención y soporte personalizado por WhatsApp y reuniones virtuales vía Google Meet o presenciales coordinadas para clientes de Puerto Montt, Puerto Varas, Frutillar, Osorno, Chiloé y todo Chile."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className={`${raleway.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

