import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_URL, STRUCTURED_DATA } from "@/config/site";
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
  metadataBase: new URL(SITE_URL),
  title: "NEXA DIGITAL | Landing Pages, Aplicativos, Softwares e Automações",
  description: SITE_DESCRIPTION,
  keywords: [
    "NEXA DIGITAL",
    "criação de landing pages",
    "desenvolvimento de aplicativos",
    "softwares personalizados",
    "automações para pequenas empresas",
    "tecnologia para autônomos",
    "desenvolvimento web",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "NEXA DIGITAL | Tecnologia Sob Medida para o Seu Negócio",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    type: "website",
    locale: "pt_BR",
    siteName: "NEXA DIGITAL",
    images: [
      {
        url: "/nexa-logo.jpg",
        width: 1280,
        height: 698,
        type: "image/jpeg",
        alt: "Logo oficial da NEXA DIGITAL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXA DIGITAL | Tecnologia Sob Medida para o Seu Negócio",
    description: SITE_DESCRIPTION,
    images: ["/nexa-logo.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        {children}
      </body>
    </html>
  );
}
