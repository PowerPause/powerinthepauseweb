import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { JsonLd } from '@/components/JsonLd';
import { LINKS, TRADEMARKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Art of Pausing® | Power In The Pause®',
  description: 'A creative alternative to meditation and journalling. The Art of Pausing® uses simple pen-and-paper creative practices to help you create space and reconnect with yourself.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/art/the-art-of-pausing/',
  },
  openGraph: {
    title: 'The Art of Pausing® | Power In The Pause®',
    description: 'A creative alternative to meditation and journalling. The Art of Pausing® uses simple pen-and-paper creative practices to help you create space and reconnect with yourself.',
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
  offers: [
    {
      '@type': 'Offer',
      name: 'Annual membership',
      price: '72.00',
      priceCurrency: 'GBP',
    },
    {
      '@type': 'Offer',
      name: 'Monthly membership',
      price: '9.99',
      priceCurrency: 'GBP',
    },
  ],
};

const faqItems = [
  {
    question: 'Do I need to be good at art?',
    answer: 'No. There is no right way for the finished page to look. The practices are designed to help you notice, not to perform or produce something perfect.',
  },
  {
    question: 'How long does a practice take?',
    answer: 'Most Pause Portal experiences take around thirty minutes. Spiral Shift®, the free introduction, takes about five minutes.',
  },
  {
    question: 'What materials do I need?',
    answer: 'Just basic materials: a pen and a piece of paper. No special equipment or artistic supplies are required.',
  },
  {
    question: 'How is this different from meditation?',
    answer: 'Rather than asking you to empty your mind or sit still, The Art of Pausing® gives your attention somewhere to go: your hands are busy with a simple creative practice, so your mind can settle.',
  },
  {
    question: 'Is this therapy?',
    answer: 'No. The Art of Pausing® is a creative wellbeing practice, not a substitute for therapy or medical care.',
  },
  {
    question: 'Which devices does the app support?',
    answer: 'The Art of Pausing® app is launching first on iPhone.',
  },
];

export default function ArtOfPausing() {
  return (
    <>
      <JsonLd data={softwareSchema} />

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 max-w-2xl">{TRADEMARKS.artOfPausing}</h1>
        <p className="text-lg md:text-xl text-navy/70 mb-8 max-w-2xl">
          A creative alternative to meditation and journalling.
        </p>
        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>
            {TRADEMARKS.artOfPausing} uses simple pen-and-paper creative practices to help you step out of constant thinking, create space and reconnect with yourself.
          </p>
          <p>
            You do not need artistic experience, the right words or a perfectly quiet mind. You simply begin with what is present and allow your attention to move onto the page.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={LINKS.artOfPausingWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            Explore the App
          </a>
          <Button href="/resources#spiral-shift" variant="secondary">
            Try {TRADEMARKS.spiralShift}
          </Button>
        </div>
      </Section>

      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">A Different Way to Pause</h2>
            <div className="prose prose-lg space-y-6 text-navy">
              <p>
                {TRADEMARKS.artOfPausing} was created for the moments when you need space to notice what is present.
              </p>
              <p>
                You may feel overwhelmed, hopeful, restless, joyful, stuck or full of possibility. Rather than asking you to empty your mind or explain everything in words, each creative practice gives your attention somewhere new to go.
              </p>
              <p>
                As your pen moves across the page, the mental noise can begin to soften. You may notice an emotion, recognise a pattern, find a fresh perspective or simply experience a little more room inside yourself.
              </p>
            </div>
          </div>
          <Image
            src="/images/spiral-shift-example.jpg"
            alt="An example spiral drawing created during The Art of Pausing practice"
            width={768}
            height={1024}
            className="w-full rounded-lg"
          />
        </div>
        <p className="font-serif text-xl md:text-2xl italic text-gold max-w-2xl mt-10">
          The drawing is not the outcome. The shift it creates is the outcome.
        </p>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">You Do Not Need to Be an Artist</h2>
          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>This is not an art class, and there is no right way for the finished page to look.</p>
            <p>
              The lines, shapes and marks simply give your attention somewhere to rest. The practice is designed to help you notice rather than perform, and to create space rather than produce something perfect.
            </p>
            <p>A pen, a sheet of paper and a willingness to begin are enough.</p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Why Creative Practice Works</h2>
          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>
              When attention moves from repetitive thinking into a simple visual and physical task, the brain is given a different pattern to follow.
            </p>
            <p>
              The combination of movement, focus, repetition and reflection can help interrupt familiar thought loops, support emotional processing and make space for new perspectives.
            </p>
            <p>
              The practices are deliberately simple. They do not require artistic skill, and they do not ask you to force calm. They work by giving the mind and hands something gentle and structured to do together.
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={6} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Meet Yourself Where You Are</h2>
          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>You do not need to wait until something is wrong.</p>
            <p>
              {TRADEMARKS.artOfPausing} begins with what feels present, whether that is grounded, hopeful, joyful, restless, overwhelmed, stuck or something in between.
            </p>
            <p>Each emotional pathway offers a creative practice and reflection shaped around that starting point.</p>
            <p>The app currently presents twelve emotional pathways, and invites you to begin with the emotion that feels closest.</p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 max-w-2xl mx-auto text-center">Inside {TRADEMARKS.artOfPausing} App</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-cream p-6 rounded-lg space-y-2 border border-gold/20">
            <h3 className="font-serif text-xl font-light text-navy">The Pause Portal</h3>
            <p className="font-sans text-sm text-navy/80 leading-relaxed">A guided creative practice that moves your attention from your thoughts onto the page.</p>
          </div>
          <div className="bg-cream p-6 rounded-lg space-y-2 border border-gold/20">
            <h3 className="font-serif text-xl font-light text-navy">Personal Reflections</h3>
            <p className="font-sans text-sm text-navy/80 leading-relaxed">Gentle reflections shaped by what you noticed and created.</p>
          </div>
          <div className="bg-cream p-6 rounded-lg space-y-2 border border-gold/20">
            <h3 className="font-serif text-xl font-light text-navy">Your Journey</h3>
            <p className="font-sans text-sm text-navy/80 leading-relaxed">Your drawings, emotional landscape and reflections gathered quietly in one place.</p>
          </div>
          <div className="bg-cream p-6 rounded-lg space-y-2 border border-gold/20">
            <h3 className="font-serif text-xl font-light text-navy">The Field</h3>
            <p className="font-sans text-sm text-navy/80 leading-relaxed">An anonymous gallery of drawings shared by people pausing around the world, with no likes and no comments.</p>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-10 max-w-2xl">How It Works</h2>
          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="font-serif text-xl font-medium text-navy mb-1">1. Choose how you feel</h3>
              <p className="font-sans text-navy/80 leading-relaxed">Begin with the emotion that feels closest.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-navy mb-1">2. Enter a creative practice</h3>
              <p className="font-sans text-navy/80 leading-relaxed">Follow the visual and spoken guidance at your own pace.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-navy mb-1">3. Notice what changes</h3>
              <p className="font-sans text-navy/80 leading-relaxed">Save your drawing and reflection as part of your journey.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-navy mb-1">4. Share, if you choose to</h3>
              <p className="font-sans text-navy/80 leading-relaxed">The Field is an optional shared space to add your drawing to the anonymous gallery.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 max-w-2xl mx-auto text-center">What People Experience</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-cream p-6 rounded-lg">
            <p className="font-playfair text-lg text-navy leading-relaxed">
              &ldquo;I noticed resistance to the drawing at first. Thoughts of &lsquo;I&rsquo;m no good at this.&rsquo; But I kept going and found myself expressing thoughts and feelings through the shapes and lines I created.&rdquo;
            </p>
          </blockquote>
          <blockquote className="bg-cream p-6 rounded-lg">
            <p className="font-playfair text-lg text-navy leading-relaxed">&ldquo;My brain quietly settled, and I got into a flow.&rdquo;</p>
          </blockquote>
          <blockquote className="bg-cream p-6 rounded-lg">
            <p className="font-playfair text-lg text-navy leading-relaxed">
              &ldquo;I came feeling tense and creatively blocked. I left feeling lighter, with a clearer mind and much calmer inside.&rdquo;
            </p>
          </blockquote>
          <blockquote className="bg-cream p-6 rounded-lg">
            <p className="font-playfair text-lg text-navy leading-relaxed">
              &ldquo;I definitely paused, relaxed, cleared my head and came away feeling rested and lighter.&rdquo;
            </p>
          </blockquote>
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={4} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Membership</h2>
          <div className="prose prose-lg max-w-2xl space-y-4 text-navy mb-8">
            <p>Full access to {TRADEMARKS.artOfPausing} begins with a seven-day free trial.</p>
            <p>Annual membership: £72 per year</p>
            <p>Monthly membership: £9.99 per month</p>
            <p className="text-sm text-navy/60">The app is launching first on iPhone.</p>
          </div>
          <a
            href={LINKS.artOfPausingWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-magenta text-white hover:bg-magenta/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            Explore Membership
          </a>
        </div>
      </Section>

      <Section background="white">
        <p className="text-center italic text-navy max-w-2xl mx-auto">
          Curious, but not ready to join? Begin with {TRADEMARKS.spiralShift}, a free five-minute creative practice that gives you a simple first experience of this different way to pause.{' '}
          <Button href="/resources#spiral-shift" variant="text">
            Try {TRADEMARKS.spiralShift}
          </Button>
        </p>
      </Section>

      <Section background="cream">
        <Faq items={faqItems} />
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
