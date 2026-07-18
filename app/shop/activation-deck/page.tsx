import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Activation Deck | Power In The Pause®',
  description: 'Forty-four reflection cards to bring the pause into your hands. £28.00.',
  openGraph: {
    title: 'The Activation Deck | Power In The Pause®',
    description: 'Forty-four reflection cards to bring the pause into your hands. £28.00.',
  },
};

export default function ActivationDeck() {
  return (
    <>
      <div className="w-full h-96 md:h-[500px] relative overflow-hidden">
        <Image
          src="/images/spiral-shift-example.jpg"
          alt="The Power In The Pause Activation Deck"
          width={768}
          height={1024}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      <Section>
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-8 max-w-2xl">Power In The Pause® Activation Deck</h1>

        <div className="prose prose-lg max-w-2xl space-y-6 text-navy">
          <p>Forty-four reflection cards to bring the pause into your hands.</p>
          <p>Each card carries a short reflection drawn from the four movements of this work: Reset, Release, Rise, Realign. Pull one at the start of the day, before a difficult conversation, or alongside your drawing practice. One card, one pause, one clearer next step.</p>
          <p>The deck stands alone, and it also accompanies The Art of Pausing® app, where its reflections guide each practice.</p>
          <p className="font-serif text-2xl">£28.00</p>
          <p className="text-sm text-navy/70">ISBN: 9781036973308</p>
        </div>

        <div id="shopify-activation-deck" className="my-8">
          <p className="text-sm text-navy/60 italic">
            Shopify Buy Button will be integrated here. For now:{' '}
            <a href={LINKS.activationDeckProduct} className="text-magenta hover:underline">
              Buy on Katie's Shop ↗
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
