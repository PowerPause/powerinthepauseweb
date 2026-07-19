import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Retreats | Power In The Pause®',
  description: 'Power In The Pause® retreats, guest facilitation and creative experiences.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/retreats/',
  },
  openGraph: {
    title: 'Retreats | Power In The Pause®',
    description: 'Power In The Pause® retreats, guest facilitation and creative experiences.',
    url: 'https://thepowerinthepause.co.uk/retreats/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Power In The Pause® Retreats & Experiences',
  description: 'Retreats hosted by Katie Cooper, plus guest facilitation of The Art of Pausing® within retreats, gatherings and live experiences created by others.',
  provider: {
    '@type': 'Organization',
    name: 'Power In The Pause®',
    url: 'https://thepowerinthepause.co.uk',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: 'Retreats and creative facilitation',
};

const faqItems = [
  {
    question: 'Do I need to be artistic?',
    answer: 'No. The practices are designed for people with all levels of creative experience, including those who believe they cannot draw. The emphasis is on reflection and experience, not artistic ability.',
  },
  {
    question: 'What materials are needed?',
    answer: 'Most sessions use simple materials such as paper, pens and pencils. Any specific requirements will be agreed in advance with the retreat host.',
  },
  {
    question: 'How long is a session?',
    answer: 'Sessions can range from approximately 45 minutes to half a day, depending on the theme, group and wider retreat programme.',
  },
  {
    question: 'Can the session be adapted to our retreat theme?',
    answer: 'Yes. The content can be shaped around themes such as change, gratitude, creativity, leadership, self-trust, emotional wellbeing, transition or intention.',
  },
  {
    question: 'Do you travel?',
    answer: 'Yes. Retreat facilitation can be discussed for locations across the UK and further afield, subject to availability, travel and accommodation arrangements.',
  },
  {
    question: 'Do you host your own retreats?',
    answer: 'Yes. Future Power In The Pause® retreat dates will be shared on this page and through the interest list.',
  },
];

const testimonials = [
  {
    quote: 'I came to the day feeling tense and creatively blocked. I left feeling lighter, with a clearer mind and much calmer inside.',
    descriptor: 'Retreat participant',
  },
  {
    quote: "I noticed resistance to the drawing at first. Thoughts of 'I'm no good at this.' But I kept going and found myself expressing thoughts and feelings through the shapes and lines I created.",
    descriptor: 'Retreat participant',
  },
  {
    quote: 'My brain quietly settled, and I got into a flow.',
    descriptor: 'Workshop participant',
  },
  {
    quote: 'I definitely paused, relaxed, cleared my head and came away feeling rested and lighter.',
    name: 'Terri',
    descriptor: 'Retreat participant',
  },
];

export default function Retreats() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <Section>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-4">Retreats</h1>
            <p className="text-lg md:text-xl text-navy/70 mb-8">
              Power In The Pause® retreats, guest facilitation and creative experiences.
            </p>
            <div className="prose prose-lg space-y-6 text-navy">
              <p>
                A retreat offers something everyday life rarely gives us: enough space to step out of familiar patterns, reconnect with ourselves and notice what is ready to shift.
              </p>
              <p>
                Through creative practice, reflection, meaningful conversation and carefully held space, Power In The Pause® retreats offer a different way to slow down and explore what becomes possible when there is room to think, feel and create.
              </p>
              <p>I host my own retreats and also bring The Art of Pausing® into retreats led by others.</p>
              <p>
                No artistic experience is needed. The creative practices are not about producing perfect artwork. They are designed to help people move beyond constant thinking, process experience in a different way and access greater clarity, calm and possibility.
              </p>
            </div>
          </div>
          <Image
            src="/images/retreats-workshop.jpg"
            alt="A Power In The Pause® retreat workshop"
            width={1290}
            height={1005}
            className="w-full rounded-lg"
          />
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={7} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Join a Power In The Pause® Retreat</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>My own retreats are created for people who want to step away from the usual pace of life and reconnect with what matters.</p>
            <p>Each experience is thoughtfully designed around the central philosophy of Power In The Pause®:</p>
          </div>

          <p className="font-serif text-xl md:text-2xl italic text-gold max-w-2xl my-6">
            Pause creates space. Space creates awareness. Awareness creates change.
          </p>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>
              A retreat may include creative practice, reflection, conversation, time in nature, gentle movement, shared meals and periods of quiet. The exact format will vary, but the intention remains the same: to create an environment where people can slow down, hear themselves more clearly and return to everyday life feeling lighter, steadier and more connected.
            </p>
            <p>You do not need to arrive with a problem to solve.</p>
            <p>
              You may be moving through change, feeling creatively blocked, needing space from constant demands or simply wanting time to reflect, rest and experience something different.
            </p>
          </div>

          <div className="mt-10 bg-white p-8 rounded-lg border border-gold/20 max-w-2xl">
            <h3 className="font-serif text-2xl font-light text-navy mb-3">Register your interest</h3>
            <p className="text-navy font-sans leading-relaxed mb-6">
              Join the interest list to hear about future Power In The Pause® day retreats and residential experiences.
            </p>
            <Button href="/contact" variant="primary">
              Register Your Interest
            </Button>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={6} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Invite Katie to Your Retreat</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>I also bring The Art of Pausing® into retreats hosted by other people.</p>
            <p>
              These creative sessions can be offered as a standalone workshop or woven into a wider retreat programme. Each session is adapted to the retreat theme, the setting and the people taking part.
            </p>
            <p>
              The practice gives participants a different way to reflect and process their experience. It can support emotional exploration, creativity, gratitude, transition, intention-setting or simply the experience of slowing down.
            </p>
            <p>The sessions are accessible, gently facilitated and suitable for people who do not consider themselves artistic.</p>
            <p>They can work particularly well within:</p>
            <ul>
              <li>wellbeing retreats</li>
              <li>personal-development retreats</li>
              <li>leadership and business retreats</li>
              <li>creative retreats</li>
              <li>women&rsquo;s retreats</li>
              <li>team away days</li>
              <li>private groups and communities</li>
              <li>bespoke events and gatherings</li>
            </ul>
            <p>I can contribute one focused session, several practices across a retreat or collaborate with the host to create a more integrated experience.</p>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Invite Katie to Your Retreat
            </Button>
            <p className="text-sm text-navy/60 mt-3 max-w-2xl">
              Tell me about your retreat, its theme, location, audience and the kind of experience you would like to create.
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">What a Session Can Include</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>Every session is tailored, but may include:</p>
            <ul>
              <li>a guided creative practice using simple pen-and-paper materials</li>
              <li>individual reflection</li>
              <li>optional shared conversation</li>
              <li>creative exploration of an emotion or theme</li>
              <li>gratitude, intention or transition practices</li>
              <li>space to process what has emerged</li>
              <li>practical ways to continue the pause beyond the retreat</li>
            </ul>
            <p>The work can be quiet and reflective or more interactive, depending on the retreat and the group.</p>
            <p>The intention is never to force disclosure or artistic performance.</p>
            <p>Participants are invited to engage at their own level and take from the experience what feels useful.</p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Why Creative Practice?</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>Retreats often create powerful insight, but insight does not always arrive through conversation alone.</p>
            <p>Creative practice gives people another route into reflection.</p>
            <p>
              When attention moves from analysing to making marks on a page, thoughts can soften, patterns can become easier to notice and new perspectives can emerge.
            </p>
            <p>The process is simple, but the experience can be surprisingly powerful.</p>
            <p>It allows people to:</p>
            <ul>
              <li>slow down without needing to meditate</li>
              <li>reflect without having to find the right words</li>
              <li>explore emotions without over-analysing them</li>
              <li>access creativity without pressure or judgement</li>
              <li>create space for clarity and possibility</li>
              <li>integrate what they are experiencing on the retreat</li>
            </ul>
          </div>

          <p className="font-serif text-xl md:text-2xl italic text-navy max-w-2xl mt-8">
            The drawing is not the outcome. The shift it creates is the outcome.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 max-w-2xl mx-auto text-center">What Participants Have Experienced</h2>
        <TestimonialCarousel items={testimonials} />
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">A Thoughtfully Held Experience</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>My background spans business, technology, coaching, positive psychology and art.</p>
            <p>This means I can bring both structure and sensitivity into a retreat environment.</p>
            <p>
              I understand how to hold a clear process while remaining responsive to the people in the room. I can adapt the work for very different themes, sectors and audiences without losing the simplicity at its heart.
            </p>
            <p>The experience is carefully facilitated, but never rigid.</p>
            <p>There is room for reflection, curiosity, emotion, humour and individual choice.</p>
            <p>No one is expected to share more than they wish to, and no artistic experience is required.</p>
          </div>

          <Button href="/about" variant="text" className="mt-6">
            Read More About Katie
          </Button>
        </div>
      </Section>

      <Section background="navy">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-10">Two Ways to Begin</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-light mb-3">Join a Retreat</h3>
              <p className="text-cream/90 mb-6 leading-relaxed">
                Step away from the usual rhythm and experience Power In The Pause® in a deeper, more immersive way.
              </p>
              <Button href="/contact" variant="secondary" className="!border-cream !text-cream hover:!bg-cream hover:!text-navy">
                Register Your Interest
              </Button>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-light mb-3">Bring the Work to Your Retreat</h3>
              <p className="text-cream/90 mb-6 leading-relaxed">
                Add a distinctive creative practice to your retreat, away day or live experience.
              </p>
              <Button href="/contact" variant="secondary" className="!border-cream !text-cream hover:!bg-cream hover:!text-navy">
                Invite Katie to Your Retreat
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <Faq items={faqItems} />
        <p className="mt-6">
          <Button href="/faq" variant="text">
            Visit the full FAQ
          </Button>
        </p>
      </Section>

      <Section background="navy" className="py-16 md:py-20">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Create space for something different</h2>
          <p className="text-cream/90 mb-8 leading-relaxed">
            Whether you are looking to join a retreat or bring a distinctive creative experience into one you are hosting, it begins with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Invite Katie to Your Retreat
            </Button>
            <Button href="/contact" variant="secondary" className="!border-cream !text-cream hover:!bg-cream hover:!text-navy">
              Register Your Interest
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
