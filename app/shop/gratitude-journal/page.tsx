import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { COPY_PLACEHOLDERS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Gratitude Journal | The Power In The Pause®',
  description: 'A quiet page a day. The Power In The Pause® Gratitude Journal, coming soon.',
  openGraph: {
    title: 'The Gratitude Journal | The Power In The Pause®',
    description: 'A quiet page a day. The Power In The Pause® Gratitude Journal, coming soon.',
  },
};

export default function GratitudeJournal() {
  return (
    <>
      <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-cream via-gold to-navy" aria-hidden="true" />

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-12 max-w-2xl">The Power In The Pause® Gratitude Journal</h1>

        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>A quiet page a day.</p>
          <p>Gratitude works best when it is small and regular, a few honest lines, not an essay. This journal gives the practice a beautiful home: guided prompts, room to write, and space left deliberately empty, because the pause is part of the practice.</p>
          <p><span className="italic text-gold/75">[TODO: {COPY_PLACEHOLDERS.gratitudeJournalSpecs}]</span></p>
        </div>

        <div className="mt-8">
          <Button variant="secondary" disabled>
            Coming Soon
          </Button>
        </div>

        <p className="text-sm text-navy/60 italic mt-6">
          The Gratitude Journal will be added to the shop once product details are finalized.
        </p>
      </Section>
    </>
  );
}
