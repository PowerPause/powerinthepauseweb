import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { KitFormEmbed } from '@/components/ui/KitFormEmbed';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { LINKS, TRADEMARKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Pause Library | Power In The Pause®',
  description: 'A growing collection of free practices, reflections and resources, starting with the free five-minute Spiral Shift® creative practice.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/resources/',
  },
  openGraph: {
    title: 'The Pause Library | Power In The Pause®',
    description: 'A growing collection of free practices, reflections and resources, starting with the free five-minute Spiral Shift® creative practice.',
    url: 'https://thepowerinthepause.co.uk/resources/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

export default function ThePauseLibrary() {
  return (
    <main className='min-h-screen bg-cream py-12 md:py-16'>
      <div className='mx-auto max-w-2xl px-6'>
        <div className='mb-10 md:mb-12'>
          <h1 className='font-serif text-4xl md:text-5xl text-navy mb-4 leading-tight'>
            The Pause Library
          </h1>
          <p className='font-sans text-lg text-navy/70 mb-6 leading-relaxed'>
            Places to begin, and practices to return to.
          </p>
          <div className='font-sans text-navy/80 space-y-3 leading-relaxed'>
            <p>The Pause Library is a growing collection of free practices, reflections and useful resources designed to help you create space in everyday life.</p>
            <p>Some are simple places to begin. Others are here for the moments when you need to pause, reset your attention or return to something that has helped before.</p>
            <p>Take what feels useful. Leave what does not. Come back whenever you need to.</p>
          </div>
        </div>

        <section
          id='spiral-shift'
          className='mb-8 bg-white px-6 md:px-8 py-8 md:py-10 rounded relative'
        >
          <DecorativeCircles count={3} />
          <h2 className='font-serif text-2xl md:text-3xl text-navy mb-1'>
            Begin with the {TRADEMARKS.spiralShift}
          </h2>
          <p className='font-sans text-sm text-navy/60 mb-4'>A free five-minute creative practice</p>
          <div className='font-sans text-navy/80 space-y-3 leading-relaxed mb-5'>
            <p>
              The {TRADEMARKS.spiralShift} is a simple introduction to the philosophy of {TRADEMARKS.masterBrand} and the creative approach behind {TRADEMARKS.artOfPausing}.
            </p>
            <p>All you need is a pen, a piece of paper and five quiet minutes.</p>
            <p>
              As you follow the spiral, your attention moves away from repetitive thinking and onto the page. There is nothing to get right and no artistic ability is needed.
            </p>
            <p>It is a small practice, but it can help you:</p>
            <ul className='list-disc pl-5 space-y-1'>
              <li>interrupt mental noise</li>
              <li>slow down</li>
              <li>reconnect with the present moment</li>
              <li>create space for a fresh perspective</li>
              <li>experience a different way to pause</li>
            </ul>
          </div>
          <Button href={LINKS.spiralShiftSignup} variant='primary'>
            Send Me the {TRADEMARKS.spiralShift}
          </Button>
        </section>

        <section className='mb-8 bg-white px-6 md:px-8 py-8 md:py-10 rounded'>
          <h2 className='font-serif text-2xl md:text-3xl text-navy mb-3'>Free Audio Practices</h2>
          <div className='font-sans text-navy/80 space-y-3 leading-relaxed mb-5'>
            <p>A small collection of guided audio practices to support grounding, reflection and intentional pauses throughout the day.</p>
            <p>
              These audios come from an earlier body of work and remain deeply aligned with {TRADEMARKS.masterBrand}. They are being offered freely as simple ways to pause without adding more content to the {TRADEMARKS.artOfPausing} app.
            </p>
            <p>The collection may include grounding practices, intentional breath, birdsong and nature-based pauses, simple rituals and short reflective audios.</p>
          </div>
          <p className='font-sans text-sm text-navy/60 mb-4'>Coming soon. Join the mailing list to be the first to know.</p>
          <KitFormEmbed uid='f2b6029799' src={LINKS.mailingListEmbedSrc} />
        </section>

        <section className='mb-8 bg-white px-6 md:px-8 py-8 md:py-10 rounded'>
          <h2 className='font-serif text-2xl md:text-3xl text-navy mb-3'>
            Notes on Pausing
          </h2>
          <p className='font-sans text-navy/80 leading-relaxed mb-5'>
            Short reflections, practical ideas and thoughtful explorations of what it means to create more space in modern life, on attention and awareness, creativity and wellbeing, self-trust, decision-making, emotional patterns, living and working with greater intention, the science behind creative practice, and what becomes possible when we stop pushing.
          </p>
          <p className='font-sans text-sm text-navy/60 mb-4'>Join the mailing list to hear when new reflections are published.</p>
          <KitFormEmbed uid='f2b6029799' src={LINKS.mailingListEmbedSrc} />
        </section>

        <section className='mb-8 bg-white px-6 md:px-8 py-8 md:py-10 rounded'>
          <h2 className='font-serif text-2xl md:text-3xl text-navy mb-3'>
            {TRADEMARKS.artOfPausing} App
          </h2>
          <p className='font-sans text-navy/80 leading-relaxed mb-5'>
            The signature creative practice within {TRADEMARKS.masterBrand}. Available on iPhone, the app offers guided pen-and-paper creative practices to help you process emotions, gain perspective and reconnect with yourself. You do not need artistic experience, the right words or a perfectly quiet mind.
          </p>
          <Button href='/art/the-art-of-pausing' variant='primary'>
            Discover {TRADEMARKS.artOfPausing}
          </Button>
        </section>

        <section className='mb-8 bg-white px-6 md:px-8 py-8 md:py-10 rounded'>
          <h2 className='font-serif text-2xl md:text-3xl text-navy mb-3'>Useful Questions</h2>
          <p className='font-sans text-navy/80 leading-relaxed mb-5'>
            Not sure where to begin, what materials you need or whether creative practice is right for you? The FAQ page answers the most common questions about {TRADEMARKS.masterBrand}, {TRADEMARKS.artOfPausing}, the {TRADEMARKS.spiralShift}, mentoring, retreats and the wider body of work.
          </p>
          <Button href='/faq' variant='secondary'>
            Visit the FAQ
          </Button>
        </section>

        <section className='bg-navy text-cream px-6 md:px-8 py-10 md:py-12 rounded text-center'>
          <h2 className='font-serif text-2xl md:text-3xl mb-4'>Return whenever you need to</h2>
          <div className='font-sans text-cream/90 space-y-2 leading-relaxed mb-8 max-w-md mx-auto'>
            <p>A pause does not need to be complicated.</p>
            <p>Sometimes it is five minutes with a pen.</p>
            <p>Sometimes it is a familiar audio, a useful question or a thought that helps you see something differently.</p>
            <p>The Pause Library is here as a place to begin and a place to return to.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button href={LINKS.spiralShiftSignup} variant='primary'>
              Begin with the {TRADEMARKS.spiralShift}
            </Button>
            <Button href='/art/the-art-of-pausing' variant='secondary' className='!border-cream !text-cream hover:!bg-cream hover:!text-navy'>
              Explore {TRADEMARKS.artOfPausing}
            </Button>
          </div>
        </section>

        <div className='mt-10 bg-white px-6 md:px-8 py-6 rounded'>
          <LastUpdated date="July 2026" />
        </div>
      </div>
    </main>
  );
}
