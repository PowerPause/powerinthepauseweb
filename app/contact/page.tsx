import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/Button';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Power In The Pause®',
  description: 'Get in touch about mentoring, The Art of Pausing®, retreats or a potential collaboration.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/contact/',
  },
  openGraph: {
    title: 'Contact | Power In The Pause®',
    description: 'Get in touch about mentoring, The Art of Pausing®, retreats or a potential collaboration.',
    url: 'https://thepowerinthepause.co.uk/contact/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

export default function Contact() {
  return (
    <main className='min-h-screen bg-cream py-12 md:py-16'>
      <div className='mx-auto max-w-2xl px-6'>
        <div className='mb-10 md:mb-12'>
          <h1 className='font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight'>
            Contact
          </h1>
          <div className='font-sans text-lg text-navy/70 leading-relaxed space-y-4'>
            <p>
              Whether you have a question about Power In The Pause®, The Art of Pausing®, mentoring, retreats or a potential collaboration, you are very welcome to get in touch.
            </p>
            <p>
              Please use the form below and share a little about what you are looking for. I read every message and will reply as soon as I can.
            </p>
          </div>
        </div>

        <div className='mb-10 md:mb-12 bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <ContactForm />
        </div>

        <div className='bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
          <p className='font-sans text-navy mb-2'>
            Prefer to email directly?
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

        <p className='mt-10 text-center'>
          <Button href='/faq' variant='text'>
            Have a question before you write? Visit the FAQ
          </Button>
        </p>

        <div className='mt-10 bg-white px-6 md:px-8 py-6 rounded'>
          <LastUpdated date="July 2026" />
        </div>
      </div>
    </main>
  );
}
