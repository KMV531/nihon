import type { Metadata } from "next";
import { Rokkitt, Roboto } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader/Loader";
import ScrollToTop from "@/components/ScrollToTop";
import SakuraCanvas from "@/components/SakuraCanvas";

const rokkitt = Rokkitt({
  variable: "--font-rokkitt",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

// URL canonique - à adapter selon l'environnement
const canonicalUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nihon-alpha.vercel.app";

export const metadata: Metadata = {
  title: "Japan: Immersion in the Land of the Rising Sun",
  description:
    "From the electric bustle of Shibuya to the secret alleyways of Kyoto, explore the many facets of Japan. Between myth and reality, discover what makes this culture so fascinating.",
  creator: "Vinny Brayan",
  publisher: "Vinny Brayan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(canonicalUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Japan: Immersion in the Land of the Rising Sun",
    description:
      "From the electric bustle of Shibuya to the secret alleyways of Kyoto, explore the many facets of Japan. Between myth and reality, discover what makes this culture so fascinating.",
    url: canonicalUrl,
    siteName: "JAPAN",
    locale: "en_EN",
    type: "website",
    images: [
      {
        url: `${canonicalUrl}/images/Thumbnail.png`, // Créez une image optimisée pour les réseaux sociaux
        width: 1200,
        height: 630,
        alt: "Japan: Immersion in the Land of the Rising Sun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan: Immersion in the Land of the Rising Sun",
    description:
      "From the electric bustle of Shibuya to the secret alleyways of Kyoto, explore the many facets of Japan. Between myth and reality, discover what makes this culture so fascinating.",
    images: [`${canonicalUrl}/images/Thumbnail.png`], // Image spécifique pour Twitter
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/icons/japan-logo.webp" type="image/webp" />
      </head>
      <body className={`${rokkitt.variable} ${roboto.variable} antialiased`}>
        <div className="hidden lg:block">
          <Loader />
        </div>
        <SakuraCanvas />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
