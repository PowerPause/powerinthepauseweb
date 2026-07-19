import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Katie Cooper | Power In The Pause®',
  description: 'Katie Cooper is an artist, mentor and founder of Power In The Pause®, a philosophy for modern life practised through creativity.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/about/',
  },
  openGraph: {
    title: 'About Katie Cooper | Power In The Pause®',
    description: 'Katie Cooper is an artist, mentor and founder of Power In The Pause®, a philosophy for modern life practised through creativity.',
    url: 'https://thepowerinthepause.co.uk/about/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

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
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 max-w-2xl">About Katie Cooper</h1>
          <p className="text-lg md:text-xl text-navy/70 font-sans mb-10 max-w-2xl">
            Artist, mentor and founder of Power In The Pause®
          </p>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>
              I have spent much of my working life building businesses, leading teams and helping people create meaningful change. My background spans technology, business development, coaching, positive psychology and art. For a long time, those parts of my experience appeared to belong in separate worlds.
            </p>
            <p>Over time, I began to see that they were not separate at all.</p>
            <p>
              My years in technology taught me how systems work, how ideas become usable products and how to translate something complex into an experience people can genuinely engage with.
            </p>
            <p>
              My work in coaching and positive psychology deepened my understanding of behaviour, attention, emotion and change. My art practice showed me that insight does not always arrive through words or logic, and that creativity can help us access what thinking alone cannot always reach.
            </p>
            <p>The turning point was not another strategy. It was a pause.</p>
            <p>
              I picked up a pen and began to draw without a goal. As I continued, I noticed something shift in my attention, then in my decisions and eventually in the way I approached my life and work. That simple creative practice became the beginning of a much larger body of work.
            </p>
          </div>

          <p className="font-serif text-2xl md:text-3xl italic text-gold max-w-2xl my-8">
            Power In The Pause® grew from the intersection of everything I had learned.
          </p>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>
              It brings together practical experience, creativity, behavioural insight, technology and an understanding of how the brain responds to attention, pattern, emotion and reflection.
            </p>
            <p>
              That intersection now sits at the heart of The Art of Pausing® app. Technology makes the work accessible. Brain science helps explain why the practices can create a shift. The creative process gives people a way to experience that shift for themselves.
            </p>
            <p>
              I believe our strongest work often emerges when we stop separating the different parts of who we are and allow our experience to come together. What may once have looked like a varied career can become a distinctive body of knowledge, perspective and practice.
            </p>
            <p>That is also what I bring to my work with individuals, businesses and organisations.</p>
            <p>
              Because I have worked across creativity, technology, leadership, behaviour change and business development, I can bring a fresh perspective to almost any sector. I am able to see both the human experience and the wider system, combining practical thinking with deeper enquiry to help people create clarity, navigate change and move forward in a way that is grounded, meaningful and useful.
            </p>
            <p>Power In The Pause® is the clearest expression of that work.</p>
            <p>
              It is a philosophy expressed through different pathways, including The Art of Pausing®, one-to-one mentoring, the Power In The Pause Journal, the Activation Deck, workshops and future collaborations with businesses and organisations.
            </p>
            <p>Different doors into the same room.</p>
            <p>Everything I create begins with one belief:</p>
          </div>

          <p className="font-serif text-2xl md:text-3xl italic text-navy max-w-2xl my-10">
            Meaningful change starts by creating space.
          </p>

          <div className="bg-white p-8 rounded-lg border border-gold/20 max-w-2xl mb-10">
            <h2 className="font-serif text-2xl font-light text-navy mb-3">My Intuitive Art</h2>
            <p className="font-sans text-navy leading-relaxed mb-6">
              Alongside Power In The Pause®, I continue to create intuitive abstract art exploring emotion, movement, energy and possibility. This work is a separate expression of my creative practice and can be viewed through Katie Cooper Art.
            </p>
            <a
              href={LINKS.artGallery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-cream transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Visit Katie Cooper Art
            </a>
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <Button href="/coaching" variant="primary">
              Explore the Ways to Work With Me
            </Button>
            <Button href="/#philosophy" variant="text">
              Discover Power In The Pause®
            </Button>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
