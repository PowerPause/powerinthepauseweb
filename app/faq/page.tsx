import type { Metadata } from 'next';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';

export const metadata: Metadata = {
  title: 'FAQ | Power In The Pause®',
  description: 'Answers to common questions about Power In The Pause®, the Spiral Shift®, and the wider work.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/faq/',
  },
  openGraph: {
    title: 'FAQ | Power In The Pause®',
    description: 'Answers to common questions about Power In The Pause®, the Spiral Shift®, and the wider work.',
    url: 'https://thepowerinthepause.co.uk/faq/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const faqItems = [
  {
    question: 'What is Power In The Pause®?',
    answer: "Power In The Pause® is a philosophy for modern life, practised through creativity. It teaches that the moment between what happens and what you do next is where clarity, creativity and transformation begin.",
  },
  {
    question: 'Is Spiral Shift® free?',
    answer: 'Yes. Spiral Shift® is a free, five-minute creative practice available in the Pause Library.',
  },
  {
    question: 'Do I need artistic ability to take part?',
    answer: 'No. No artistic ability is needed. The drawing is a vehicle for attention, not an art lesson.',
  },
  {
    question: 'Who created Power In The Pause®?',
    answer: 'Power In The Pause® was created by Katie Cooper, a coach and artist who built and sold companies before developing this work.',
  },
  {
    question: 'How do I start working with Katie?',
    answer: 'It begins with a conversation. Book a call or get in touch via the Work With Katie or Contact pages.',
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-lg text-navy/70 max-w-65ch leading-relaxed">
            Answers to the questions we hear most.
          </p>
        </div>

        <div className="bg-white px-6 md:px-8 py-8 md:py-12 rounded">
          <Faq items={faqItems} heading="" />
          <LastUpdated date="July 2026" />
        </div>
      </div>
    </main>
  );
}
