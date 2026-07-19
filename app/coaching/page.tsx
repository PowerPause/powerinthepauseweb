import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { Testimonial } from '@/components/ui/Testimonial';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { JsonLd } from '@/components/JsonLd';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Work With Katie | Power In The Pause®',
  description: 'Thoughtful, rigorous support for individuals, leaders and organisations ready to create clarity, navigate change and move forward from a steadier place.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/coaching/',
  },
  openGraph: {
    title: 'Work With Katie | Power In The Pause®',
    description: 'Thoughtful, rigorous support for individuals, leaders and organisations ready to create clarity, navigate change and move forward from a steadier place.',
    url: 'https://thepowerinthepause.co.uk/coaching/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Pause to Power Pathway®',
  description: 'One-to-one mentoring blending practical strategy, behavioural insight, positive psychology and creative enquiry for meaningful and lasting change.',
  provider: {
    '@type': 'Organization',
    name: 'Power In The Pause®',
    url: 'https://thepowerinthepause.co.uk',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: 'Life and business mentoring',
};

const faqItems = [
  {
    question: 'Is this coaching?',
    answer: 'The work draws on coaching, positive psychology, creative enquiry and practical strategy, but it is not limited to a traditional coaching model. The approach is personalised around what will be most useful to you.',
  },
  {
    question: 'Do I need to be creative?',
    answer: 'No. Creative practices are used as tools for attention and reflection, not as tests of artistic ability. You will never be expected to produce artwork or perform creatively.',
  },
  {
    question: 'Who is the Pause to Power Pathway® for?',
    answer: 'It is designed for thoughtful, capable people who are navigating change, facing a decision, questioning what comes next or looking for a steadier and more sustainable way of moving forward.',
  },
  {
    question: 'Do you work with businesses and organisations?',
    answer: 'Yes. I offer bespoke mentoring, workshops, facilitated sessions, away days and collaborations across different sectors.',
  },
  {
    question: 'How do I begin?',
    answer: 'Book a conversation or get in touch. We can explore what you need, which form of support is most appropriate and whether we are a good fit to work together.',
  },
];

const discoverTestimonials = [
  {
    quote: 'Working one-to-one takes things to a deeper level. Katie understands what I am trying to create both personally and professionally, and she can help me look at things differently without needing me to explain everything from the beginning.',
    name: 'Sarah',
    descriptor: 'Business owner and one-to-one client',
  },
  {
    quote: 'It has been a powerful combination of deep inner work and practical strategy. I feel like myself again, but an even better version than I have ever been.',
    name: 'Tara',
    descriptor: 'Business owner and one-to-one client',
  },
  {
    quote: 'Katie has been there through the ups and downs and has given me what I needed, not always what I wanted. In hindsight, that has been the strength of such a positive and professional relationship.',
    name: 'Fran',
    descriptor: 'One-to-one client',
  },
  {
    quote: 'I have never felt like I was simply another payment or another client. I feel genuinely seen, supported and challenged, and I know the work is helping me make changes I can sustain.',
    name: 'Andrea',
    descriptor: 'One-to-one client',
  },
];

export default function Coaching() {
  const bookingUrl = CONTACT.bookingUrl ? CONTACT.bookingUrl : '/contact';

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 max-w-2xl">Work With Katie</h1>
        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>
            Thoughtful, rigorous support for individuals, leaders and organisations ready to create clarity, navigate change and move forward from a steadier place.
          </p>
          <p>
            My work brings together practical strategy, behavioural insight, positive psychology, creativity and deep reflection. It is designed for people who want meaningful change that can be felt in everyday life, not simply understood in theory.
          </p>
          <p>
            There is no fixed formula. The work is shaped around the person, challenge or organisation in front of me, bringing together the parts of my experience that will be most useful.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={7} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-2 max-w-2xl">The Pause to Power Pathway®</h2>
          <p className="text-lg text-navy/70 mb-8 max-w-2xl">One-to-one mentoring for meaningful and lasting change</p>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>The Pause to Power Pathway® is my signature one-to-one mentoring experience.</p>
            <p>
              It is for thoughtful, capable people who have often achieved a great deal by staying busy, pushing through and finding the next solution, but who sense that their usual way of operating is no longer serving them.
            </p>
            <p>
              You may be navigating a period of change, questioning what comes next, feeling disconnected from yourself or carrying a decision that cannot be solved by more thinking.
            </p>
            <p>
              Our work creates space to step back from the noise, understand what is really happening and move forward with greater clarity and self-trust.
            </p>
            <p>
              I bring together practical strategy, coaching, positive psychology, creative enquiry and an understanding of behaviour, attention and emotional patterns. This allows us to work with both the visible challenge and what may be sitting underneath it.
            </p>
            <p>
              The process is grounded and highly personalised. We focus on what will be most useful to you, drawing on conversation, reflection and creative practices where they can help you access a different perspective.
            </p>
            <p>This work can support you to:</p>
            <ul>
              <li>make clearer decisions</li>
              <li>recognise and shift patterns that are no longer serving you</li>
              <li>reconnect with your own judgement</li>
              <li>navigate personal or professional change</li>
              <li>create a steadier and more sustainable way of moving forward</li>
              <li>establish clearer boundaries</li>
              <li>turn insight into practical action</li>
            </ul>
            <p>You leave with more than a plan. You leave with a stronger way of relating to yourself, your choices and the life or work you are creating.</p>
          </div>

          <Testimonial
            quote="I knew that the way I was working was not how I wanted to do things, but I did not trust that I could do it differently. Now it is like night and day. I have so much more space and so much more time."
            name="Sian"
            descriptor="One-to-one client"
          />

          <div className="mt-8">
            <Button href={bookingUrl} variant="primary">
              Book a Conversation
            </Button>
            <p className="text-sm text-navy/60 mt-3 max-w-2xl">
              There is no pressure and no prepared pitch. We begin with a conversation to explore what you need and whether this work feels right for you.
            </p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Support That Goes Deeper</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>The people I work with do not usually need someone to tell them to try harder.</p>
            <p>
              Many are already highly capable, reflective and motivated. They may have completed programmes, joined groups or received plenty of advice. What they need is space to think more deeply, honest challenge and support that takes account of the whole person.
            </p>
            <p>
              One-to-one work allows us to look beneath the immediate issue without losing sight of practical reality. Sometimes the next step is strategic. Sometimes it requires a change in perspective, a stronger boundary or a deeper understanding of the beliefs and patterns shaping the situation.
            </p>
            <p>
              I will support you, but I will not simply agree with everything you say. Part of the value of this work is having someone who can recognise what you may not yet see, ask the question others avoid and help you stay connected to what matters when circumstances become complex.
            </p>
          </div>

          <Testimonial
            quote="I wanted to be challenged. I wanted someone to say, 'That does not make sense,' or ask what might happen next. Katie gives me that pushback and helps me sit with what is really going on. That is so valuable."
            name="Beth"
            descriptor="One-to-one client"
          />
        </div>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">A Different Way to Grow</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>Ambition and wellbeing do not have to sit on opposite sides of the table.</p>
            <p>
              You may still want to grow a business, lead well, create something significant or move into a new chapter. The aim is not to make you less driven. It is to help you recognise the difference between meaningful momentum and constant force.
            </p>
            <p>We can explore how you want to work, not only what you want to achieve.</p>
            <p>
              That may include creating more space, making your business more sustainable, trusting your decisions, changing how you respond to pressure or ensuring that the next level of growth does not require you to abandon yourself to reach it.
            </p>
          </div>

          <Testimonial
            quote="I knew I still wanted to grow, but I did not want to keep building my business in a way that felt forced. I now work in a way that feels much more aligned and relaxed. I have more energy, everything feels easier and my clients are still getting amazing results."
            name="Sarah H."
            descriptor="Business owner and one-to-one client"
          />
        </div>
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={6} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-2 max-w-2xl">Work With Businesses and Organisations</h2>
          <p className="text-lg text-navy/70 mb-8 max-w-2xl">Fresh perspective for complex challenges</p>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>
              I bring experience across technology, business development, leadership, behaviour change, positive psychology and creativity into my work with businesses and organisations.
            </p>
            <p>
              This combination allows me to see both the human experience and the wider system. I can help leaders and teams step out of familiar thinking, create space around complex challenges and discover perspectives that may not emerge through strategy alone.
            </p>
            <p>
              Because my experience crosses several disciplines and sectors, I can bring the work into very different environments without relying on a one-size-fits-all model.
            </p>
            <p>The work can be adapted to different sectors, team sizes and organisational needs. It may take the form of:</p>
            <ul>
              <li>leadership reflection and mentoring</li>
              <li>facilitated team sessions</li>
              <li>creative-thinking workshops</li>
              <li>strategic pause sessions</li>
              <li>team away days</li>
              <li>support during periods of change</li>
              <li>culture and values conversations</li>
              <li>bespoke projects and collaborations</li>
            </ul>
            <p>
              These sessions are not art workshops in the traditional sense. Creative practice may be used as a practical tool for attention, reflection and new thinking, alongside structured conversation and strategic enquiry.
            </p>
            <p>The purpose is always to create something useful: greater clarity, stronger communication, fresh ideas or a more grounded way forward.</p>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
            <p className="text-sm text-navy/60 mt-3 max-w-2xl">
              Tell me a little about your organisation, the challenge you are exploring and the kind of support you have in mind.
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream" id="retreats">
        <div className="relative">
          <DecorativeCircles count={5} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Retreats &amp; Experiences</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>
              I host my own Power In The Pause® retreats and also bring The Art of Pausing® into retreats, gatherings and live experiences created by others.
            </p>
            <p>
              These sessions offer participants a distinctive and accessible way to slow down, process experience, reconnect with themselves and explore what becomes possible when there is more space.
            </p>
            <p>No artistic experience is needed. Each experience can be adapted to the theme, setting and people involved.</p>
          </div>

          <div className="mt-8">
            <Button href="/retreats" variant="primary">
              Explore Retreats &amp; Experiences
            </Button>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="relative">
          <DecorativeCircles count={6} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Why This Work Is Different</h2>

          <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
            <p>My work sits at the intersection of practical thinking and creative enquiry.</p>
            <p>
              My background in technology and business means I understand systems, implementation and the realities of creating change in the real world. My training in coaching and positive psychology gives me a grounded understanding of behaviour, attention and personal development. My art practice brings another way of seeing, one that can reach beyond logic and language.
            </p>
            <p>Together, these different strands create work that is both reflective and practical.</p>
            <p>It can hold complexity without becoming vague.</p>
            <p>It can create space without losing momentum.</p>
            <p>It can support insight while still leading towards meaningful action.</p>
          </div>

          <Testimonial
            quote="I thought I needed a new strategy or a more powerful focus. I had no idea how freeing it would be to uncover and release what was underneath. It has been completely game-changing."
            name="Lucy"
            descriptor="Business owner and one-to-one client"
          />
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 max-w-2xl mx-auto text-center">What People Discover Through the Work</h2>
        <TestimonialCarousel items={discoverTestimonials} />
      </Section>

      <Section background="navy">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">It begins with a conversation</h2>
          <div className="prose prose-lg space-y-4 text-cream/90 mb-8">
            <p>You do not need to arrive with a perfectly formed goal.</p>
            <p>
              You may simply know that something needs to change, that a decision needs space or that the way you have been operating is no longer sustainable.
            </p>
            <p>That is enough to begin.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={bookingUrl} variant="primary">
              Book a Conversation
            </Button>
            <Button href="/contact" variant="secondary" className="!border-cream !text-cream hover:!bg-cream hover:!text-navy">
              Get in Touch
            </Button>
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
        <LastUpdated date="July 2026" />
      </Section>
    </>
  );
}
