import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { CONTACT, COPY_PLACEHOLDERS, LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Katie | Power In The Pause®',
  description: 'Katie Cooper is a coach, artist and creator of Power In The Pause®, a philosophy for modern life practised through creativity.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/about/',
  },
  openGraph: {
    title: 'About Katie | Power In The Pause®',
    description: 'Katie Cooper is a coach, artist and creator of Power In The Pause®, a philosophy for modern life practised through creativity.',
    url: 'https://thepowerinthepause.co.uk/about/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const faqItems = [
  {
    question: 'Who is Katie Cooper?',
    answer: 'Katie Cooper is a coach and artist, and the creator of Power In The Pause®. She built and sold companies before developing this work.',
  },
  {
    question: "What is Katie's professional background?",
    answer: 'Katie is a coach by training and an artist by practice, combining practical coaching methods with an intuitive creative practice.',
  },
];

export default function About() {
  return (
    <>
      <div className="w-full h-96 md:h-[500px] relative overflow-hidden">
        <Image
          src="/images/katie-portrait.jpg"
          alt="Katie Cooper"
          width={1200}
          height={1500}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      <Section>
        <div className="relative">
          <DecorativeCircles count={6} />
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-8 max-w-2xl">About Katie</h1>

        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>I have spent most of my working life building things, including companies I went on to sell. From the outside it looked like momentum. From the inside it often felt like running.</p>
          <p>The turning point was not a strategy. It was a pause. I picked up a pen, started to draw with no goal at all, and noticed something shift, first in my attention, then in my decisions, then in everything else. That quiet daily practice became the foundation of my work.</p>
          <p>Power In The Pause® grew from there: a philosophy, a creative practice, an app, a deck of cards, a coaching programme. Different doors into the same room.</p>
          <p>I am a coach by training <span className="italic text-gold/75">[TODO: {COPY_PLACEHOLDERS.katieCredentials}]</span> and an artist by practice. My work sits where those two meet: practical enough to hold up on a difficult Tuesday, creative enough to reach the parts of you that plans can't.</p>
          <p>But this is not about me. The work is what matters, and the work only matters if it is useful to you.</p>
        </div>

          <div className="mt-12 flex flex-col gap-4">
            <Button href="/resources#spiral-shift" variant="primary">
              Begin with the Spiral Shift® (free)
            </Button>
            <Button href="/contact" variant="text">
              Or get in touch
            </Button>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <Faq items={faqItems} />
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
