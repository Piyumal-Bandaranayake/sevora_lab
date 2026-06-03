import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Metadata } from "next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sevoralab.studio"),
  title: {
    default: "Sevora Lab | Premium Web Development & Digital Studio in Sri Lanka",
    template: "%s | Sevora Lab",
  },
  description: "Sevora Lab is a premier software development and digital design studio in Sri Lanka specializing in high-performance websites, custom web apps, and creative branding solutions.",
  keywords: [
    "sevora lab",
    "sevoralab",
    "sevoralab.studio",
    "sevora lab studio",
    "web development sri lanka",
    "software development company sri lanka",
    "sri lanka tech developers",
    "web design agency sri lanka",
    "custom web applications",
    "next.js development sri lanka",
    "three.js developer",
    "creative digital agency",
    "logo design sri lanka",
    "branding agency",
    "videography & dronagraphy",
    "social media design"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sevoralab.studio",
    siteName: "Sevora Lab",
    title: "Sevora Lab | Premium Web Development & Digital Studio in Sri Lanka",
    description: "Sevora Lab is a premier software development and digital design studio in Sri Lanka specializing in high-performance websites, custom web apps, and creative branding solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sevora Lab - Premium Web Development & Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevora Lab | Premium Web Development & Digital Studio in Sri Lanka",
    description: "Sevora Lab is a premier software development and digital design studio in Sri Lanka specializing in high-performance websites, custom web apps, and creative branding solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${outfit.variable} ${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

