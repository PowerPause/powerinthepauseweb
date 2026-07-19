import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Power In The Pause®',
  description: 'Privacy Policy for Power In The Pause®.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/privacy/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 md:mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">Privacy Policy</h1>
          <p className="font-sans text-lg text-navy/70 leading-relaxed">
            This page is currently being finalised.
          </p>
        </div>

        <div className="bg-white px-6 md:px-8 py-8 md:py-12 rounded space-y-4">
          <p className="font-sans text-navy/80 leading-relaxed">
            A full Privacy Policy explaining how personal data is collected, used and protected across this website is being prepared and will be published here shortly.
          </p>
          <p className="font-sans text-navy/80 leading-relaxed">
            In the meantime, if you have any questions about how your information is handled, please get in touch directly.
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
