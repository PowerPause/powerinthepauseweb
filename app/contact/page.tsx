import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Faq } from '@/components/ui/Faq';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Power In The Pause®',
  description: 'Get in touch. I read everything.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/contact/',
  },
  openGraph: {
    title: 'Contact | Power In The Pause®',
    description: 'Get in touch. I read everything.',
    url: 'https://thepowerinthepause.co.uk/contact/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const faqItems = [
  {
    question: 'What can I contact Katie about?',
    answer: 'Questions about the work, the app, coaching, or a piece of art.',
  },
  {
    question: 'Does Katie reply personally?',
    answer: 'Yes. Katie reads every message personally.',
  },
];

export default function Contact() {
  return (
    <main className='min-h-screen bg-cream py-12 md:py-16'>
      <div className='mx-auto max-w-2xl px-6'>
        <div className='mb-10 md:mb-12'>
          <h1 className='font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight'>
            Contact
          </h1>
          <p className='font-sans text-lg text-navy/70 max-w-65ch leading-relaxed'>
            Whether you have a question about the work, the app, coaching, or a piece of art, write to me. I read everything.
          </p>
        </div>

        <div className='mb-10 md:mb-12 bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <ContactForm />
        </div>

        <div className='bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <p className='font-sans text-navy mb-2'>
            Or email directly:
          </p>
          {CONTACT.email ? (
            <a
              href={`mailto:${CONTACT.email}`}
              className='font-sans text-magenta hover:text-magenta/80 underline'
            >
              {CONTACT.email}
            </a>
          ) : (
            <span className='italic text-gold/75'>[TODO: Contact email address]</span>
          )}
        </div>

        <div className='mt-10 md:mt-12 bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <Faq items={faqItems} />
          <LastUpdated date="July 2026" />
        </div>
      </div>
    </main>
  );
}
