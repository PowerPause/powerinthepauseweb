import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Shop | Power In The Pause®',
  description: 'The Power In The Pause® Activation Deck, the Power In The Pause Journal and Katie Cooper Art. Thoughtfully created tools to help you pause, reflect and reconnect.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/shop/',
  },
  openGraph: {
    title: 'Shop | Power In The Pause®',
    description: 'The Power In The Pause® Activation Deck, the Power In The Pause Journal and Katie Cooper Art. Thoughtfully created tools to help you pause, reflect and reconnect.',
    url: 'https://thepowerinthepause.co.uk/shop/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

function OutboundArrow() {
  return (
    <svg className="w-4 h-4 ml-2 inline-block" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M17 7H8M17 7v9" />
    </svg>
  );
}

export default function Shop() {
  return (
    <>
      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 max-w-2xl">Shop</h1>
        <div className="prose prose-lg max-w-2xl space-y-4 text-navy">
          <p>Thoughtfully created tools to help you pause, reflect and reconnect with what matters.</p>
          <p>Each product offers a different way to bring the philosophy of Power In The Pause® into everyday life.</p>
        </div>
      </Section>

      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-cream rounded-lg overflow-hidden border border-gold/20 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                src="/images/spiral-shift-example.jpg"
                alt="The Power In The Pause Activation Deck"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 space-y-3">
              <h2 className="font-serif text-2xl font-light text-navy">Power In The Pause® Activation Deck</h2>
              <p className="font-sans text-sm text-navy/80 leading-relaxed flex-1">
                A 44-card deck created to offer a simple point of reflection whenever you need clarity, encouragement or a fresh perspective. Each card carries a prompt, message or invitation to help you pause, notice what is present and reconnect with your own inner guidance.
              </p>
              <a
                href={LINKS.activationDeckProduct}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                Shop the Activation Deck
                <OutboundArrow />
              </a>
            </div>
          </div>

          <div className="bg-cream rounded-lg overflow-hidden border border-gold/20 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                src="/images/drawing-practice-2.jpg"
                alt="The Power In The Pause Journal"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 space-y-3">
              <h2 className="font-serif text-2xl font-light text-navy">Power In The Pause Journal</h2>
              <p className="font-sans text-sm text-navy/80 leading-relaxed flex-1">
                A daily practice for reflection, gratitude and intentional living. It helps you notice what is present, recognise what matters and move through life with greater awareness.
              </p>
              {LINKS.journalAmazonProduct ? (
                <a
                  href={LINKS.journalAmazonProduct}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                >
                  Buy the Journal on Amazon
                  <OutboundArrow />
                </a>
              ) : (
                <span className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border-2 border-navy/30 text-navy/50">
                  Coming Soon
                </span>
              )}
            </div>
          </div>

          <div className="bg-cream rounded-lg overflow-hidden border border-gold/20 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                src="/images/art-of-pausing-texture.jpg"
                alt="Original intuitive artwork by Katie Cooper"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 space-y-3">
              <h2 className="font-serif text-2xl font-light text-navy">Katie Cooper Art</h2>
              <p className="font-sans text-sm text-navy/80 leading-relaxed flex-1">
                Alongside Power In The Pause®, Katie creates intuitive abstract paintings exploring emotion, movement, energy and possibility. Available through the dedicated Katie Cooper Art Shopify website.
              </p>
              <a
                href={LINKS.shopifyStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                Visit Katie Cooper Art
                <OutboundArrow />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-navy mb-4">Different Ways to Create Space</h2>
          <p className="font-sans text-navy/80 leading-relaxed">
            Whether you are drawn to a card, a journal page or an original painting, each piece begins with the same intention: to create space for reflection, connection and possibility.
          </p>
        </div>
      </Section>

      <Section>
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
