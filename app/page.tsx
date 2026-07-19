import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { ShimmerWordmark } from '@/components/ui/ShimmerWordmark';

export const metadata: Metadata = {
  title: 'Power In The Pause® | A philosophy for modern life',
  description: "Pausing is not doing nothing. It's where clarity, creativity and transformation begin.",
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/',
  },
  openGraph: {
    title: 'Power In The Pause® | A philosophy for modern life',
    description: "Pausing is not doing nothing. It's where clarity, creativity and transformation begin.",
    url: 'https://thepowerinthepause.co.uk/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const testimonials = [
  {
    quote: "I didn't actually trust that I could do things differently. Now it's like night and day. I have so much more space and so much more time. That's been a direct result of doing the inner work and letting all that stuff go.",
    name: 'Andrea',
    descriptor: 'One-to-one client',
  },
  {
    quote: 'I thought I just needed new strategies. I had no idea how freeing it would be to uncover and release what was underneath.',
    name: 'Lucy',
    descriptor: 'One-to-one client',
  },
  {
    quote: "I noticed resistance to the drawing at first. Thoughts of 'I'm no good at this.' But I kept going and found myself expressing thoughts and feelings through the shapes and lines I created.",
    descriptor: 'The Art of Pausing® Participant',
  },
  {
    quote: 'I came feeling tense and creatively blocked. I left feeling lighter, with a clearer mind and much calmer inside.',
    descriptor: 'Retreat Participant',
  },
  {
    quote: 'My brain quietly settled, and I got into a flow.',
    descriptor: 'Workshop Participant',
  },
  {
    quote: 'I definitely paused, relaxed, cleared my head and came away feeling rested and lighter.',
    name: 'Terri',
    descriptor: 'Retreat Participant',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col items-center justify-start pt-16 md:pt-20 pb-12 bg-cream px-6 text-center">
        <h1 className="sr-only">Power In The Pause®</h1>

        <div className="mb-6 max-w-[39.2rem] mx-auto w-full">
          <ShimmerWordmark />
        </div>

        <ScrollReveal delay={100}>
          <div className="font-serif text-2xl md:text-3xl text-navy leading-relaxed max-w-2xl mb-8 space-y-1">
            <p>Pause creates space.</p>
            <p>Space creates awareness.</p>
            <p>Awareness creates change.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="font-sans text-lg md:text-xl text-navy/70 max-w-2xl mb-8 leading-relaxed">
            Pausing is not doing nothing.
            <br />
            It&apos;s where clarity, creativity and transformation begin.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button href="/resources#spiral-shift" variant="primary">
              Begin with the Spiral Shift®
            </Button>
            <Button href="#philosophy" variant="text">
              Discover the Philosophy
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy Section */}
      <Section background="white" id="philosophy">
        <div className="max-w-3xl mx-auto text-center relative">
          <DecorativeCircles count={6} />
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-8">
              A Different Way to Live Well
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="prose prose-lg md:prose-xl max-w-prose mx-auto space-y-6 text-navy font-sans leading-relaxed">
              <p>Most of us know how to keep going.</p>
              <p>We&apos;re taught to solve problems, stay busy and move on to the next thing.</p>
              <p>Very few of us are taught the value of pausing.</p>
              <p>Yet the moments between what happens and what we do next quietly shape the course of our lives.</p>

              <div className="space-y-1">
                <p>A pause creates the space to notice.</p>
                <p>To reflect.</p>
                <p>To choose.</p>
                <p>To respond rather than react.</p>
                <p>To reconnect with what matters most.</p>
              </div>

              <p>
                At Power In The Pause®, we believe that pausing isn&apos;t about stepping away from life. It&apos;s about stepping more fully into it.
              </p>

              <p>There are many ways to pause.</p>
              <p>For some, it&apos;s through creativity.</p>
              <p>For others, it&apos;s a walk in nature, a meaningful conversation, journalling, a mindful breath or simply allowing a moment of stillness.</p>
              <p>The method matters less than what the pause creates.</p>
              <p>Because every meaningful change begins with a little more space.</p>
              <p>And that&apos;s where the power lies.</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Why Creativity Matters Section */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center relative">
          <DecorativeCircles count={5} />
          <ScrollReveal>
            <p className="font-sans text-sm md:text-base uppercase tracking-widest text-gold mb-3">
              Sleep. Movement. Nutrition. Creativity.
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-8">
              Creativity belongs here too.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="prose prose-lg md:prose-xl max-w-prose mx-auto space-y-6 text-navy font-sans leading-relaxed">
              <p>We all know the importance of sleep.</p>
              <p>We understand why movement matters.</p>
              <p>We&apos;re becoming increasingly aware of the impact nutrition has on our physical and mental wellbeing.</p>
              <p>These are recognised as essential foundations of a healthy life.</p>
              <p>At Power In The Pause®, we believe there&apos;s another part of the picture that deserves far more attention.</p>

              <p className="font-serif text-3xl md:text-4xl italic text-gold">Creativity.</p>

              <div className="space-y-1">
                <p>Not creativity for performance.</p>
                <p>Not creativity for perfection.</p>
                <p>Not creativity reserved for artists.</p>
              </div>

              <div className="space-y-1">
                <p>Creativity as a way of slowing down.</p>
                <p>Of noticing more.</p>
                <p>Of making sense of our thoughts and emotions.</p>
                <p>Of reconnecting with ourselves.</p>
              </div>

              <p>
                Research continues to show that creative activities can reduce stress, improve emotional wellbeing and support clearer thinking. Yet somewhere between childhood and adulthood, many of us stopped creating.
              </p>
              <p>Not because we lost the ability.</p>
              <p>Because we forgot how important it was.</p>
              <p>That&apos;s why creativity sits at the heart of The Art of Pausing®.</p>
              <p>Not because it&apos;s the only way to pause.</p>
              <p>Because it&apos;s one of the most accessible, powerful and transformative ways to create space for awareness and change.</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto relative">
          <DecorativeCircles count={6} />
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6 text-center">
              What people discover when they pause.
            </h2>
            <p className="font-sans text-lg text-navy/70 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
              A simple pause can create far more than a moment of calm. Whether people experience Power In The Pause® through coaching, creative practice or a retreat, the outcomes are remarkably similar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <TestimonialCarousel items={testimonials} />
          </ScrollReveal>
        </div>
      </Section>

      {/* The Art of Pausing Section */}
      <Section background="cream">
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 right-0 w-1/4"
          style={{
            backgroundImage: "url('/images/art-of-pausing-texture.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            opacity: 0.4,
            maskImage: 'linear-gradient(to right, transparent, black 60%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 60%)',
          }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy">
              The Art of Pausing®
              <span className="block text-2xl md:text-3xl text-navy/70 mt-2">
                A different way to pause.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="prose prose-lg mx-auto space-y-4 text-navy font-sans leading-relaxed mt-8">
              <p>
                The Art of Pausing® is the signature creative practice within Power In The Pause®.
              </p>
              <p>
                Using simple pen-and-paper creative practices, it offers a different way to slow down, create space and reconnect with yourself.
              </p>
              <div className="space-y-1">
                <p>You don&apos;t need artistic experience.</p>
                <p>You don&apos;t need to find the right words.</p>
                <p>You don&apos;t need to quiet your mind before you begin.</p>
              </div>
              <p>
                Instead, each creative practice gently guides you from thinking into noticing, helping you process emotions, gain perspective and discover fresh possibilities through the simple act of creating.
              </p>
              <p className="font-serif text-xl md:text-2xl italic text-navy">
                Sometimes the biggest shift begins with a single line on a page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button href="/art/the-art-of-pausing" variant="secondary">
                Discover The Art of Pausing®
              </Button>
              <Button href="/resources#spiral-shift" variant="text">
                Try the Spiral Shift®
              </Button>
            </div>

            <div
              aria-hidden="true"
              className="w-40 h-16 md:w-48 md:h-20 mx-auto mt-10 rounded-lg"
              style={{
                backgroundImage: "url('/images/art-of-pausing-texture.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Founder Section */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-40 sm:w-48 md:w-56 mx-auto mb-10 md:mb-12">
              <Image
                src="/images/katie-portrait-founder.jpg"
                alt="Katie Cooper, founder of Power In The Pause®"
                width={900}
                height={1125}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-8">
              The Story Behind Power In The Pause®
            </h2>

            <div className="prose prose-lg max-w-prose mx-auto space-y-4 text-navy font-sans leading-relaxed">
              <p>
                I have spent much of my working life building businesses, leading teams and helping people create meaningful change.
              </p>
              <p>For years, I believed the answers would come from doing more.</p>
              <p>Instead, I discovered that the biggest shifts often begin with something much quieter.</p>
              <p className="font-serif text-xl italic">A pause.</p>
              <p>
                What started as a simple creative practice became a completely different way of understanding ourselves, our emotions and the choices we make.
              </p>
              <p>That journey became Power In The Pause®.</p>
              <p>Today, my mission is simple:</p>
              <p>
                To help people create more space, reconnect with themselves and discover a different way to live well.
              </p>
            </div>

            <Button href="/about" variant="text" className="mt-8">
              Read My Story
            </Button>
          </ScrollReveal>
        </div>
      </Section>

      {/* Pathway Cards Section */}
      <Section background="cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6 text-center">
              Find the Right Place to Begin
            </h2>
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-2 text-navy/70 font-sans leading-relaxed">
              <p>There isn&apos;t one right way to begin.</p>
              <p>
                Whether you&apos;re looking for a simple first step, a daily creative practice or more personalised support, choose the pathway that feels right for you.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0}>
            <div className="bg-white p-10 md:p-12 rounded-lg space-y-4 border-2 border-gold/40 mb-8 text-center">
              <h3 className="font-serif text-3xl font-light text-navy">
                The Art of Pausing® App
              </h3>
              <p className="font-sans text-navy leading-relaxed max-w-2xl mx-auto">
                A creative wellbeing app that helps you create space, process emotions and reconnect with yourself through simple pen-and-paper creative practices.
              </p>
              <Button href="/art/the-art-of-pausing" variant="primary">
                Discover The Art of Pausing®
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20 h-full">
                <h3 className="font-serif text-2xl font-light text-navy">
                  Spiral Shift®
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  A free five-minute creative practice designed to introduce you to the philosophy of Power In The Pause®.
                </p>
                <Button href="/resources#spiral-shift" variant="secondary" className="w-full">
                  Try the Spiral Shift®
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20 h-full">
                <h3 className="font-serif text-2xl font-light text-navy">
                  Pause to Power Pathway®
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  One-to-one mentoring for those looking for personalised support, deeper reflection and lasting change.
                </p>
                <Button href="/coaching" variant="secondary" className="w-full">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20 h-full">
                <h3 className="font-serif text-2xl font-light text-navy">
                  Retreats &amp; Experiences
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  Creative practices, workshops and immersive experiences designed to help people pause, reconnect and see what becomes possible with a little more space.
                </p>
                <Button href="/retreats" variant="secondary" className="w-full">
                  Explore Retreats
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20 h-full">
                <h3 className="font-serif text-2xl font-light text-navy">
                  Power In The Pause Journal
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  A beautifully designed companion for daily reflection, gratitude and intentional living.
                </p>
                <Button href="/shop/gratitude-journal" variant="secondary" className="w-full">
                  Explore the Journal
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Closing Line Section */}
      <Section background="navy" className="py-16 md:py-20">
        <ScrollReveal>
          <p className="font-serif text-3xl md:text-4xl font-light text-cream text-center italic">
            Take a breath. You&apos;re in the right place.
          </p>
        </ScrollReveal>
      </Section>
    </>
  );
}
