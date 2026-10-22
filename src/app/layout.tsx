import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000")
  ),
  title: "NEXA DIGITAL | Landing Pages, Aplicativos, Softwares e Automações",
  description:
    "Soluções tecnológicas sob medida para pequenas empresas e profissionais autônomos. Criação de landing pages de alta conversão, aplicativos, softwares personalizados e automações inteligentes.",
  keywords: [
    "NEXA DIGITAL",
    "criação de landing pages",
    "desenvolvimento de aplicativos",
    "softwares personalizados",
    "automações para pequenas empresas",
    "tecnologia para autônomos",
    "desenvolvimento web",
  ],
  openGraph: {
    title: "NEXA DIGITAL | Tecnologia Sob Medida para o Seu Negócio",
    description:
      "Landing pages, aplicativos, softwares personalizados e automações desenvolvidos para impulsionar pequenas empresas e profissionais autônomos.",
    type: "website",
    locale: "pt_BR",
    siteName: "NEXA DIGITAL",
    images: [
      {
        url: "/nexa logo.jpg",
        width: 1280,
        height: 720,
        alt: "Logo oficial da NEXA DIGITAL",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} notranslate h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#040812] text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
