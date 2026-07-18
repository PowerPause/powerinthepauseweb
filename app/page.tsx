import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { TRADEMARKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Power In The Pause® | A philosophy for modern life',
  description: "Pausing is not doing nothing. It's where clarity, creativity and transformation begin.",
  openGraph: {
    title: 'Power In The Pause® | A philosophy for modern life',
    description: "Pausing is not doing nothing. It's where clarity, creativity and transformation begin.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center">
        <ScrollReveal>
          <h1 className="font-script text-6xl md:text-7xl lg:text-8xl text-gold mb-8 leading-tight">
            Power In The Pause<sup className="text-3xl md:text-4xl">®</sup>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <p className="font-sans text-xl md:text-2xl text-navy max-w-3xl mb-12 leading-relaxed">
            Pausing is not doing nothing.
            <br />
            It's where clarity, creativity and transformation begin.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button href="/resources#spiral-shift" variant="primary">
              Begin with The Spiral Shift™ (it's free)
            </Button>
            <Button href="#philosophy" variant="text">
              Discover the philosophy
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy Section */}
      <Section background="white" id="philosophy">
        <div className="max-w-3xl mx-auto text-center relative">
          <DecorativeCircles count={6} />
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-12">
              A different way to live well
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="prose prose-lg md:prose-xl max-w-prose mx-auto space-y-6 text-navy font-sans leading-relaxed">
              <p>
                Most of us know how to keep going. Very few of us know how to stop.
              </p>
              
              <p>
                The Power In The Pause® is a simple idea with a lot underneath it: the moment between what happens and what you do next is where your life is actually made. Learn to find that moment, and everything downstream of it (your decisions, your creativity, your relationships, your work) gets clearer.
              </p>
              
              <p>
                This isn&apos;t mindfulness rebranded, and it isn&apos;t another coaching method. It&apos;s a philosophy for modern life, practised through creativity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Fourth Pillar Section */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center relative">
          <DecorativeCircles count={5} />
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-12">
              Sleep. Movement. Nutrition. Creativity.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="prose prose-lg md:prose-xl max-w-prose mx-auto space-y-6 text-navy font-sans leading-relaxed">
              <p>
                We accept that a body needs rest, movement and good food. A mind needs one more thing: a regular creative pause.
              </p>
              
              <p>
                Not talent. Not lessons. Just a few quiet minutes of making marks on paper, with your full attention. The research on what this does for a busy nervous system is compelling, and the experience of it is better than the research.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* The Art of Pausing Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-navy">
                The Art of Pausing®
              </h2>
              
              <div className="prose prose-lg max-w-prose space-y-4 text-navy font-sans leading-relaxed">
                <p>
                  Our flagship practice, and an iPhone app.
                </p>
                
                <p>
                  Drawing is simply the vehicle. A pen moving slowly across paper gives your attention somewhere to rest, and in that rest, awareness opens. No artistic ability needed. Not art lessons. Not therapy. A creative practice for everyday life.
                </p>
              </div>
              
              <Button href="/art/the-art-of-pausing" variant="secondary">
                Explore The Art of Pausing®
              </Button>
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

      {/* Stories Section */}
      <Section background="cream">
        <div className="max-w-6xl mx-auto relative">
          <DecorativeCircles count={8} />
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-16 text-center">
              In their words
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <ScrollReveal delay={0}>
              <div className="space-y-4">
                <p className="font-serif text-lg md:text-xl text-navy italic leading-relaxed">
                  &ldquo;Katie is caring, genuine, and authentic, always in your corner, guiding you with honesty and support to create deep, life-changing transformation.&rdquo;
                </p>
                <p className="font-sans text-navy">— Beth</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <p className="font-serif text-lg md:text-xl text-navy italic leading-relaxed">
                  &ldquo;With Katie, I get both strategy and inner alignment, and I no longer second-guess myself. The results came faster than I imagined.&rdquo;
                </p>
                <p className="font-sans text-navy">— Andrea</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <p className="font-serif text-lg md:text-xl text-navy italic leading-relaxed">
                  &ldquo;The very first time we spoke, I thought, &apos;She just gets me.&apos; I would never have achieved this on my own.&rdquo;
                </p>
                <p className="font-sans text-navy">— Fran</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Meet Katie Section */}
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
                Meet Katie
              </h2>
              
              <div className="prose prose-lg max-w-prose space-y-4 text-navy font-sans leading-relaxed">
                <p>
                  I built and sold companies before I understood that the missing piece was never more effort. It was the pause. I created this work because I needed it, and then discovered how many other people did too.
                </p>
              </div>
              
              <Button href="/about" variant="text">
                Read my story
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Where to Begin Section */}
      <Section background="cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-16 text-center">
              Where to begin
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20">
                <h3 className="font-serif text-2xl font-light text-navy">
                  The Spiral Shift™
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  A free five-minute guided drawing experience. The best first taste of this work.
                </p>
                <Button href="/resources#spiral-shift" variant="primary" className="w-full">
                  Start free
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20">
                <h3 className="font-serif text-2xl font-light text-navy">
                  The Art of Pausing®
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  The app. A daily creative practice in your pocket.
                </p>
                <Button href="/art/the-art-of-pausing" variant="secondary" className="w-full">
                  Learn more
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20">
                <h3 className="font-serif text-2xl font-light text-navy">
                  Coaching
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  The Pause to Power Pathway®, one-to-one.
                </p>
                <Button href="/coaching" variant="secondary" className="w-full">
                  Learn more
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg space-y-4 border border-gold/20">
                <h3 className="font-serif text-2xl font-light text-navy">
                  Emotional Bioharmonising®
                </h3>
                <p className="font-sans text-navy leading-relaxed">
                  A four-week emotional wellbeing programme.
                </p>
                <Button href="/coaching#emotional-bioharmonising" variant="secondary" className="w-full">
                  Learn more
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Closing Line Section */}
      <Section background="navy" className="py-24 md:py-32">
        <ScrollReveal>
          <p className="font-serif text-3xl md:text-4xl font-light text-cream text-center italic">
            Take a breath. You&apos;re in the right place.
          </p>
        </ScrollReveal>
      </Section>
    </>
  );
}