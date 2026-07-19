import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Accessibility | Power In The Pause®',
  description: 'Accessibility statement for Power In The Pause®.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/accessibility/',
  },
};

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 md:mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">Accessibility</h1>
          <p className="font-sans text-lg text-navy/70 leading-relaxed">
            We want this website to be usable by as many people as possible.
          </p>
        </div>

        <div className="bg-white px-6 md:px-8 py-8 md:py-12 rounded space-y-4">
          <p className="font-sans text-navy/80 leading-relaxed">
            This site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at AA level. We are working towards this on an ongoing basis, including clear navigation, readable text, sufficient colour contrast, keyboard-friendly menus and descriptive alt text for images.
          </p>
          <p className="font-sans text-navy/80 leading-relaxed">
            Accessibility is an ongoing process rather than a one-off task, and this website will continue to be reviewed and improved over time.
          </p>
          <p className="font-sans text-navy/80 leading-relaxed">
            If you experience any difficulty using this website or have suggestions for improvement, please let us know.
          </p>
          {CONTACT.email && (
            <a href={`mailto:${CONTACT.email}`} className="font-sans text-magenta hover:text-magenta/80 underline">
              {CONTACT.email}
            </a>
          )}
        </div>

        <div className="mt-8 text-center">
          <Button href="/contact" variant="secondary">
            Contact Katie
          </Button>
        </div>
      </div>
    </main>
  );
}
