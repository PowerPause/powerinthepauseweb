import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { JsonLd } from '@/components/JsonLd';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Power In The Pause® Activation Deck | Power In The Pause®',
  description: 'A 44-card deck created to offer a simple point of reflection whenever you need clarity, encouragement or a fresh perspective. £28.00.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/shop/activation-deck/',
  },
  openGraph: {
    title: 'Power In The Pause® Activation Deck | Power In The Pause®',
    description: 'A 44-card deck created to offer a simple point of reflection whenever you need clarity, encouragement or a fresh perspective. £28.00.',
    url: 'https://thepowerinthepause.co.uk/shop/activation-deck/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Power In The Pause® Activation Deck',
  description: 'A 44-card deck created to offer a simple point of reflection whenever you need clarity, encouragement or a fresh perspective.',
  sku: '9781036973308',
  gtin13: '9781036973308',
  brand: {
    '@type': 'Brand',
    name: 'Power In The Pause®',
  },
  offers: {
    '@type': 'Offer',
    price: '28.00',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    url: LINKS.activationDeckProduct,
  },
};

export default function ActivationDeck() {
  return (
    <>
      <JsonLd data={productSchema} />
      <div className="w-full h-96 md:h-[500px] relative overflow-hidden">
        <Image
          src="/images/activation-deck-product.jpg"
          alt="The Power In The Pause Activation Deck"
          width={1800}
          height={1200}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-8 max-w-2xl">Power In The Pause® Activation Deck</h1>

        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>
            A 44-card deck created to offer a simple point of reflection whenever you need clarity, encouragement or a fresh perspective.
          </p>
          <p>
            Each card carries a prompt, message or invitation to help you pause, notice what is present and reconnect with your own inner guidance.
          </p>
          <p>
            The deck can be used as part of a morning practice, alongside journalling, before making a decision or whenever you need a moment to step out of the noise.
          </p>
          <p className="font-serif text-2xl">£28.00</p>
          <p className="text-sm text-navy/70">ISBN: 9781036973308</p>
        </div>

        <div className="mt-8">
          <a
            href={LINKS.activationDeckProduct}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            Shop the Activation Deck
            <svg className="w-4 h-4 ml-2" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M17 7H8M17 7v9" />
            </svg>
          </a>
        </div>

        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
