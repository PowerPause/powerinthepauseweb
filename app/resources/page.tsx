import type { Metadata } from 'next';
import EmailCaptureForm from '@/components/EmailCaptureForm';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { TRADEMARKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resources | Power In The Pause®',
  description: 'Free resources and tools for your creative practice.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/resources/',
  },
  openGraph: {
    title: 'Resources | Power In The Pause®',
    description: 'Free resources and tools for your creative practice.',
    url: 'https://thepowerinthepause.co.uk/resources/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const faqItems = [
  {
    question: 'What is Spiral Shift®?',
    answer: 'A free, guided five-to-ten minute drawing experience designed to pause, release mental noise and find clarity. No artistic ability needed.',
  },
  {
    question: 'How do I get Spiral Shift®?',
    answer: 'Enter your email on this page and it is sent directly.',
  },
  {
    question: 'Is The Art of Pausing® app free?',
    answer: 'Spiral Shift® inside the app is free. The full Art of Pausing® app is available on the App Store.',
  },
];

export default function Resources() {
  return (
    <main className='min-h-screen bg-cream py-12 md:py-16'>
      <div className='mx-auto max-w-2xl px-6'>
        <div className='mb-12 md:mb-16'>
          <h1 className='font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight'>
            Resources
          </h1>
          <p className='font-sans text-lg text-navy/70 max-w-65ch leading-relaxed'>
            Places to start, and things to return to.
          </p>
        </div>

        <section
          id='spiral-shift'
          className='mb-12 md:mb-16 bg-white px-6 md:px-8 py-8 md:py-12 rounded relative'
        >
          <DecorativeCircles count={4} />
          <h2 className='font-serif text-3xl md:text-4xl text-navy mb-4'>
            {TRADEMARKS.spiralShift}
          </h2>
          <p className='font-sans text-navy/70 mb-6 leading-relaxed max-w-65ch'>
            A free, guided drawing experience. Five to ten minutes with a pen, a piece of paper, and your own attention (to pause, release mental noise, and find some clarity). No artistic ability needed.
          </p>
          <p className='font-sans text-navy mb-6 font-medium'>
            Enter your email and it's yours.
          </p>
          <EmailCaptureForm />
        </section>

        <section className='mb-12 md:mb-16 bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <h2 className='font-serif text-3xl md:text-4xl text-navy mb-4'>
            {TRADEMARKS.artOfPausing} app
          </h2>
          <p className='font-sans text-navy/70 max-w-65ch leading-relaxed'>
            The daily practice, on your iPhone.{' '}
            <a
              href='/art/the-art-of-pausing'
              className='text-magenta hover:text-magenta/80 font-medium underline'
            >
              Learn more
            </a>
          </p>
        </section>

        <section className='bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <h2 className='font-serif text-3xl md:text-4xl text-navy mb-6'>
            Notes on pausing
          </h2>
          <p className='text-sm text-navy/60 italic bg-cream border-l-4 border-gold/30 px-4 py-3'>
            [TODO: Confirm whether to launch with articles, a newsletter link, or hold this section for phase two. Layout built either way; content can be empty at launch if needed.]
          </p>
        </section>

        <section className='mt-12 md:mt-16 bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <Faq items={faqItems} />
          <LastUpdated date="July 2026" />
        </section>
      </div>
    </main>
  );
}
