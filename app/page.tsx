import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';

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
    quote: 'Katie is caring, genuine, and authentic, always in your corner, guiding you with honesty and support to create deep, life-changing transformation.',
    name: 'Beth',
  },
  {
    quote: 'With Katie, I get both strategy and inner alignment, and I no longer second-guess myself. The results came faster than I imagined.',
    name: 'Andrea',
  },
  {
    quote: "The very first time we spoke, I thought, 'She just gets me.' I would never have achieved this on my own.",
    name: 'Fran',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col items-center justify-start pt-16 md:pt-20 pb-12 bg-cream px-6 text-center">
        <h1 className="sr-only">Power In The Pause®</h1>

        <ScrollReveal>
          <div className="mb-6 max-w-[39.2rem] mx-auto">
            <Image
              src="/images/power-in-the-pause-gold.png"
              alt="Power In The Pause®"
              width={1600}
              height={358}
              className="w-full h-auto"
              priority
            />
          </div>
        </ScrollReveal>

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
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-navy">
                The Art of Pausing®
                <span className="block text-2xl md:text-3xl text-navy/70 mt-2">
                  A different way to pause.
                </span>
              </h2>

              <div className="prose prose-lg max-w-prose space-y-4 text-navy font-sans leading-relaxed">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/art/the-art-of-pausing" variant="secondary">
                  Discover The Art of Pausing®
                </Button>
                <Button href="/resources#spiral-shift" variant="text">
                  Try the Spiral Shift®
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Image
              src="/images/drawing-practice-1.jpg"
              alt="The Art of Pausing drawing practice with hands and paper"
              width={1024}
              height={720}
              className="w-full aspect-video rounded-lg object-cover"
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Founder Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <Image
              src="/images/katie-portrait.jpg"
              alt="Katie Cooper, creator of The Power In The Pause"
              width={800}
              height={1000}
              className="w-full aspect-square rounded-lg object-cover object-top"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-navy">
                The Story Behind Power In The Pause®
              </h2>

              <div className="prose prose-lg max-w-prose space-y-4 text-navy font-sans leading-relaxed">
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

              <Button href="/about" variant="text">
                Read My Story
              </Button>
            </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
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

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20 h-full">
                <h3 className="font-serif text-2xl font-light text-navy">
                  The Activation Deck
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  Forty-four reflection cards to bring the pause into your hands, wherever you are on the journey.
                </p>
                <Button href="/shop/activation-deck" variant="secondary" className="w-full">
                  Explore the Deck
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
