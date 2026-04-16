import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";
import { companyAddress, companyName, seoKeywords } from "@/lib/site-content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexcargo-group.com"),
  title: {
    default: "LEXCARGO GROUP | Грузоперевозки по Украине и Европе",
    template: "%s | LEXCARGO GROUP",
  },
  description:
    "LEXCARGO GROUP организует грузоперевозки по Украине и Европе: международная логистика, таможенное оформление, склад и экспресс-доставка для B2B и B2C.",
  keywords: seoKeywords,
  openGraph: {
    title: "LEXCARGO GROUP | Премиальная логистика для бизнеса и частных клиентов",
    description:
      "Надежные грузоперевозки по Украине и Европе, прозрачный сервис, расчет стоимости за 5 минут и полный контроль груза.",
    url: "https://lexcargo-group.com",
    siteName: companyName,
    locale: "ru_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEXCARGO GROUP",
    description: "Грузоперевозки Украина и Европа. Премиальный сервис и прогнозируемые сроки.",
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
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#060b14] text-white flex flex-col">
        <div className="sr-only">
          {companyName}. {companyAddress}
        </div>
        {children}
      </body>
    </html>
  );
}
