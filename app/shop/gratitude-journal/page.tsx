import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Power In The Pause Journal | Power In The Pause®',
  description: 'A daily practice for reflection, gratitude and intentional living. The Power In The Pause Journal.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/shop/gratitude-journal/',
  },
  openGraph: {
    title: 'Power In The Pause Journal | Power In The Pause®',
    description: 'A daily practice for reflection, gratitude and intentional living. The Power In The Pause Journal.',
    url: 'https://thepowerinthepause.co.uk/shop/gratitude-journal/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

export default function PowerInThePauseJournal() {
  return (
    <>
      <div className="w-full h-96 md:h-[500px] relative overflow-hidden">
        <Image
          src="/images/drawing-practice-2.jpg"
          alt="The Power In The Pause Journal"
          width={1200}
          height={1548}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-2 max-w-2xl">Power In The Pause Journal</h1>
        <p className="text-lg text-navy/70 mb-8 max-w-2xl">A daily practice for reflection, gratitude and intentional living</p>

        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>The Power In The Pause Journal offers a simple structure for creating more space in everyday life.</p>
          <p>
            Designed to support reflection, gratitude and intentional living, it helps you notice what is present, recognise what matters and move through life with greater awareness.
          </p>
          <p>It can be used independently or alongside the Activation Deck, one-to-one mentoring or The Art of Pausing®.</p>
        </div>

        <div className="mt-8">
          {LINKS.journalAmazonProduct ? (
            <a
              href={LINKS.journalAmazonProduct}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Buy the Journal on Amazon
              <svg className="w-4 h-4 ml-2" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M17 7H8M17 7v9" />
              </svg>
            </a>
          ) : (
            <>
              <span className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full border-2 border-navy/30 text-navy/50 cursor-not-allowed">
                Coming Soon
              </span>
              <p className="text-sm text-navy/60 italic mt-4">
                The Power In The Pause Journal will link directly to its Amazon product page once available.
              </p>
            </>
          )}
        </div>

        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
