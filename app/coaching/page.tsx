import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DecorativeCircles } from '@/components/ui/DecorativeCircles';
import { CONTACT, COPY_PLACEHOLDERS, LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Coaching | The Power In The Pause®',
  description: 'One-to-one coaching and The Pause to Power Pathway®, a rigorous, creative approach to leading your life from a steadier place.',
  openGraph: {
    title: 'Coaching | The Power In The Pause®',
    description: 'One-to-one coaching and The Pause to Power Pathway®, a rigorous, creative approach to leading your life from a steadier place.',
  },
};

export default function Coaching() {
  const bookingUrl = CONTACT.bookingUrl ? CONTACT.bookingUrl : '/contact';
  const enrollmentUrl = CONTACT.courseEnrolmentUrl ? CONTACT.courseEnrolmentUrl : '/contact';
  
  return (
    <>
      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 max-w-2xl">Coaching</h1>
        <p className="text-lg max-w-2xl text-navy mb-12">
          Quiet, rigorous, one-to-one work for people ready to lead their life from a steadier place.
        </p>
      </Section>

      <Section background="cream">
        <div className="relative">
          <DecorativeCircles count={7} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">The Pause to Power Pathway®</h2>
        
        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>
            My signature one-to-one coaching programme.
          </p>

          <p>
            We work together over <span className="italic text-gold/75">[TODO: {COPY_PLACEHOLDERS.coachingDuration}]</span>, blending practical strategy with the deeper work: emotional patterns, energy, attention, and the creative practices that hold it all steady. You leave with results you can point to and a way of operating you can keep.
          </p>

          <p>
            This is for you if you're capable and busy, you've done well by pushing, and you can feel that pushing has stopped working.
          </p>

          <p>
            It begins with a conversation.
          </p>
        </div>

          <div className="mt-8">
            <Button href={bookingUrl} variant="primary">
              Book a call
            </Button>
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 max-w-2xl">Emotional Bioharmonising®</h2>
        
        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>
            A four-week emotional wellbeing programme, self-paced, with a new module each week.
          </p>

          <p>
            You've probably tried the usual things (journalling, meditating, thinking positive). Useful, until stress arrives and old patterns take over. This programme works at the level underneath: how your emotions actually move, and how to work with them rather than against them.
          </p>

          <div className="space-y-4 mt-8">
            <div>
              <h3 className="font-serif font-medium mb-2">Week 1: Reset</h3>
              <p>Understand your emotional foundation and learn the 3-Minute Shift®, a simple practice for coming back to balance anywhere.</p>
            </div>
            <div>
              <h3 className="font-serif font-medium mb-2">Week 2: Release</h3>
              <p>Identify and let go of the patterns that drain you.</p>
            </div>
            <div>
              <h3 className="font-serif font-medium mb-2">Week 3: Rise</h3>
              <p>Build a daily rhythm that keeps you steady for longer than a good week.</p>
            </div>
            <div>
              <h3 className="font-serif font-medium mb-2">Week 4: Realign</h3>
              <p>Put the new rhythm to work in your real life (decisions, relationships, creative work).</p>
            </div>
          </div>

          <p className="mt-8">
            Includes workbooks, journal prompts and guided audio.
          </p>
        </div>

        <div className="mt-8">
          <Button href={enrollmentUrl} variant="primary">
            Join Emotional Bioharmonising®
          </Button>
        </div>
      </Section>

      <Section>
        <p className="text-center italic text-navy max-w-2xl mx-auto">
          Not sure which is right? Start with The Spiral Shift™ (it's free, it takes five minutes, and it will tell you more than any sales page could).{' '}
          <Button href="/resources#spiral-shift" variant="text">
            Start free
          </Button>
        </p>
      </Section>
    </>
  );
}
