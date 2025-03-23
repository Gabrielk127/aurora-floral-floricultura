import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aurora Floral - Floricultura",
  description: "Sua dose diária de beleza e natureza!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SpeedInsights />
      <body className={`bg-[var(--aurora-foreground)] ${poppins}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
