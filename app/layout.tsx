import type { Metadata } from "next";
import { Rokkitt, Roboto } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";

const rokkitt = Rokkitt({
  variable: "--font-rokkitt",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japan: Immersion in the Land of the Rising Sun",
  description:
    "From the electric bustle of Shibuya to the secret alleyways of Kyoto, explore the many facets of Japan. Between myth and reality, discover what makes this culture so fascinating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* ✅ Explicit link fallback (optional, Next will auto inject from metadata too) */}
        <link rel="icon" href="/icons/japan-logo.webp" type="image/webp" />
      </head>
      <body className={`${rokkitt.variable} ${roboto.variable} antialiased`}>
        <div className="hidden lg:block">
          <Loader />
        </div>
        {children}
      </body>
    </html>
  );
}
