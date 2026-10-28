import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SettingsProvider } from '@/lib/settings/settings-context';
import { LlmSetupModal } from '@/components/settings/LlmSetupModal';
import { CompanySetupModal } from '@/components/onboarding/CompanySetupModal';
import { ThemeSelectionModal } from '@/components/settings/ThemeSelectionModal';
import { BottomNav } from '@/components/layout/BottomNav';
import { Analytics } from '@vercel/analytics/next';

const SITE_URL = 'https://www.quarkmeme.com';
const SITE_NAME = 'Quarkmeme';
const SITE_TAGLINE = 'Local-First Multi-Agent Autonomous Canvas';
const SITE_DESCRIPTION =
  'Quarkmeme is the sovereign, local-first multi-agent operating system and Grand Line radial knowledge canvas. Zero cloud database bills: your AI specialist crew runs 100% client-side with SQLite WASM + OPFS, FTS5 search, BYOK Gemini inference, offline PWA, and voice helm. FLOSS MIT alternative to Polsia, by TehWiz Productions.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'local-first AI agents',
    'multi-agent orchestration',
    'autonomous agent crew',
    'SQLite WASM OPFS',
    'FTS5 full-text search',
    'offline PWA AI OS',
    'BYOK Gemini',
    'Grand Line radial knowledge graph',
    'FLOSS Polsia alternative',
    'browser-native AI workspace',
  ],
  authors: [{ name: 'TehWiz Productions', url: 'https://tehwiz.com' }],
  creator: 'TehWiz Productions',
  publisher: 'TehWiz Productions',
  manifest: '/manifest.webmanifest',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'Quarkmeme Grand Line radial crew canvas cover art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-cover.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Quarkmeme',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tehwiz.com/#organization',
      name: 'TehWiz Productions',
      url: 'https://tehwiz.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.quarkmeme.com/icon-512.png',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.quarkmeme.com/#website',
      url: 'https://www.quarkmeme.com',
      name: 'Quarkmeme',
      description: SITE_DESCRIPTION,
      publisher: { '@id': 'https://tehwiz.com/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.quarkmeme.com/#app',
      name: 'Quarkmeme',
      url: 'https://www.quarkmeme.com',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      description: SITE_DESCRIPTION,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: { '@id': 'https://tehwiz.com/#organization' },
      publisher: { '@id': 'https://tehwiz.com/#organization' },
      image: 'https://www.quarkmeme.com/og-cover.jpg',
      softwareVersion: '0.1.0',
      license: 'https://opensource.org/licenses/MIT',
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 pt-16 md:pt-0 pb-20 md:pb-0">
        <SettingsProvider>
          {children}
          <BottomNav />
          <LlmSetupModal />
          <CompanySetupModal />
          <ThemeSelectionModal />
        </SettingsProvider>
        <Analytics />
      </body>
    </html>
  );
}

