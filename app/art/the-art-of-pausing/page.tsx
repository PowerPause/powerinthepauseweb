import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { JsonLd } from '@/components/JsonLd';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Art of Pausing® | Power In The Pause®',
  description: 'A creative alternative to meditation and journalling. The Art of Pausing® is a drawing practice and iPhone app for everyday life.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/art/the-art-of-pausing/',
  },
  openGraph: {
    title: 'The Art of Pausing® | Power In The Pause®',
    description: 'A creative alternative to meditation and journalling. The Art of Pausing® is a drawing practice and iPhone app for everyday life.',
    url: 'https://thepowerinthepause.co.uk/art/the-art-of-pausing/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'The Art of Pausing®',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS',
  description: 'A creative alternative to meditation and journalling. A drawing practice and iPhone app for everyday life, requiring no artistic ability.',
  author: {
    '@type': 'Organization',
    name: 'Power In The Pause®',
  },
  url: 'https://thepowerinthepause.co.uk/art/the-art-of-pausing/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
};

const faqItems = [
  {
    question: 'What is The Art of Pausing®?',
    answer: 'A creative alternative to meditation and journalling: a drawing practice and iPhone app for everyday life.',
  },
  {
    question: 'Do I need to know how to draw?',
    answer: 'No artistic ability is needed. The drawing is a vehicle for attention, not an art lesson.',
  },
  {
    question: 'What is Spiral Shift®?',
    answer: 'A free, five-minute guided drawing experience inside The Art of Pausing® app, and the best first taste of the practice.',
  },
  {
    question: 'What is The Pause Portal™?',
    answer: 'A deeper guided drawing practice of around thirty minutes, for when there is more time to go further.',
  },
  {
    question: 'Where can I get the app?',
    answer: 'The Art of Pausing® app is available on the App Store, and via theartofpausing.co.uk.',
  },
];

export default function ArtOfPausing() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 max-w-2xl">The Art of Pausing®</h1>
        <p className="text-lg max-w-2xl text-navy">
          A creative alternative to meditation and journalling. And an iPhone app.
        </p>
      </Section>

      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">Drawing, as a way of paying attention</h2>
            <div className="prose prose-lg space-y-6 text-navy">
              <p>The Art of Pausing is not about making art. The drawing is a vehicle, a way to give your attention a single, gentle place to rest. Slow marks on paper. Nothing to get right. No artistic ability needed.</p>
              <p>People who "can't sit still to meditate" tend to find this works when nothing else has. Your hands are busy, so your mind can settle.</p>
            </div>
          </div>
          <Image
            src="/images/hands-drawing.jpg"
            alt="Hands engaged in The Art of Pausing drawing practice"
            width={731}
            height={1024}
            className="w-full rounded-lg"
          />
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">The practice, in the app</h2>
        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p><strong>Spiral Shift®:</strong> five minutes. A short guided drawing experience to release mental noise and come back to yourself. This is where everyone starts, and it's free.</p>
          <p><strong>The Pause Portal™:</strong> around thirty minutes. The deeper guided practice, for when you have space to go further.</p>
          <p>Reflections from Power In The Pause® Activation Deck are woven through the app to guide each sitting.</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Button href={LINKS.appStore} variant="primary">
            Download on the App Store
          </Button>
          <Button href={LINKS.artOfPausingWebsite} variant="text">
            Visit theartofpausing.co.uk
          </Button>
        </div>
      </Section>

      <Section>
        <p className="italic text-navy max-w-2xl">
          Prefer paper first? Try Spiral Shift® free on this site.{' '}
          <Button href="/resources#spiral-shift" variant="text">
            Start now
          </Button>
        </p>
      </Section>

      <Section background="white">
        <Faq items={faqItems} />
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
