import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Intuitive Art | Power In The Pause®',
  description: 'Original paintings and prints by Katie Cooper. Intuitive art practice where attention and colour meet.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/art/intuitive-art/',
  },
  openGraph: {
    title: 'Intuitive Art | Power In The Pause®',
    description: 'Original paintings and prints by Katie Cooper. Intuitive art practice where attention and colour meet.',
    url: 'https://thepowerinthepause.co.uk/art/intuitive-art/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const faqItems = [
  {
    question: 'What is intuitive art?',
    answer: 'Painting with no plan and no reference, following attention and colour to see what wants to emerge. It is the same pause practice this work is built on, in its purest form.',
  },
  {
    question: "Are Katie's paintings and prints for sale?",
    answer: 'Yes. Original paintings and prints are available in her gallery.',
  },
];

export default function IntuitivArt() {
  return (
    <>
      <div className="w-full h-96 bg-gradient-to-r from-magenta to-navy" aria-hidden="true" />
      <div className="w-full h-96 bg-gradient-to-l from-cream via-gold to-navy" aria-hidden="true" />

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-8 max-w-2xl">Intuitive Art</h1>

        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>Before this was a philosophy, it was a painting practice.</p>
          <p>I paint intuitively (no plan, no reference, just attention and colour, following what wants to emerge). It's the same pause this whole body of work is built on, in its purest form. Every method I teach began at this easel.</p>
          <p>Original paintings and prints are available in my gallery.</p>
        </div>

        <div className="mt-8">
          <Button href={LINKS.artGallery} variant="primary">
            Visit the gallery
          </Button>
        </div>
      </Section>

      <Section background="cream">
        <Faq items={faqItems} />
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
