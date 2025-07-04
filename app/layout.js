import { Geist, Geist_Mono, Albert_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import Head from "next/head";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Strategic Business Consulting for Scalable Growth | YourName",
  icons: {
    icon: "/sitefavicon.ico",
  },
  description:
    "Helping founders and executives untangle complex business challenges with strategic planning, operational focus, and execution that drives scalable growth.",
  openGraph: {
    title: "Strategic Business Consulting for Scalable Growth",
    description:
      "Helping founders and executives untangle complex business challenges with strategic planning, operational focus, and execution that drives scalable growth.",
    url: "https://yourdomain.com",
    siteName: "YourName Business Consulting",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YourName Business Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${albertSans.variable} ${inter.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
