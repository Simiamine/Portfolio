import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amine M'Zali — Data & ML Engineer",
    template: "%s | Amine M'Zali",
  },
  description:
    "Portfolio d'Amine M'Zali — Futur Ingénieur Data. Pipelines data, modèles ML et produits web.",
  metadataBase: new URL("https://mzaliamine.portfolia.fr"),
  openGraph: {
    title: "Amine M'Zali — Data & ML Engineer",
    description:
      "Pipelines data, modèles ML et produits web — de l'ingestion à la prédiction.",
    url: "https://mzaliamine.portfolia.fr",
    siteName: "Amine M'Zali",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine M'Zali — Data & ML Engineer",
    description:
      "Pipelines data, modèles ML et produits web — de l'ingestion à la prédiction.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
