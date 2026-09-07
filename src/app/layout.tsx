import type { Metadata } from "next";
import { Geist, Geist_Mono, Epilogue, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  authors: [{ name: "Marci Metzger Homes" }],
  title: "Marci Metzger Homes - Real Estate Agent, Real Estate, Realtor",
  description: "Marci Metzger Homes - Pahrump, NV - Over two decades in real estate. Licensed Broker in Seattle, now serving Southern Nevada as Pahrump's top real estate agent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
