import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact â€” The Power In The PauseÂ®',
  description: 'Get in touch. I read everything.',
  openGraph: {
    title: 'Contact â€” The Power In The PauseÂ®',
    description: 'Get in touch. I read everything.',
  },
};

export default function Contact() {
  return (
    <main className='min-h-screen bg-cream py-16 md:py-24'>
      <div className='mx-auto max-w-2xl px-6'>
        <div className='mb-12 md:mb-16'>
          <h1 className='font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight'>
            Contact
          </h1>
          <p className='font-sans text-lg text-navy/70 max-w-65ch leading-relaxed'>
            Whether you have a question about the work, the app, coaching, or a piece of art â€” write to me. I read everything.
          </p>
        </div>

        <div className='mb-12 md:mb-16 bg-white px-6 md:px-8 py-8 md:py-12 rounded'>
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
      </div>
    </main>
  );
}
