'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

const SUBJECT_OPTIONS = [
  'One-to-one mentoring',
  'Businesses and organisations',
  'Retreats',
  'The Art of Pausing®',
  'Press, podcasts or speaking',
  'General enquiry',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setConfirmationMessage('Please fill in all fields');
      return;
    }

    if (!CONTACT.formServiceEndpoint) {
      setConfirmationMessage('[TODO: Contact form requires integration with form service (Formspree, Web3Forms, or Kit). Endpoint not configured in lib/constants.ts]');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT.formServiceEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setConfirmationMessage('Thank you. I will reply soon.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setConfirmationMessage('Something went wrong. Please try again or email directly.');
      }
    } catch {
      setConfirmationMessage('Something went wrong. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md space-y-6'>
      <div>
        <label htmlFor='name' className='block text-sm font-medium text-navy mb-2'>
          Name
        </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Your name'
          disabled={isSubmitting}
          required
          aria-label='Your name'
          className='w-full px-4 py-2 border border-gold/30 rounded bg-white text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 disabled:opacity-50'
        />
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium text-navy mb-2'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='hello@example.com'
          disabled={isSubmitting}
          required
          aria-label='Your email address'
          className='w-full px-4 py-2 border border-gold/30 rounded bg-white text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 disabled:opacity-50'
        />
      </div>

      <div>
        <label htmlFor='subject' className='block text-sm font-medium text-navy mb-2'>
          What are you getting in touch about?
        </label>
        <select
          id='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={isSubmitting}
          required
          aria-label='What are you getting in touch about?'
          className='w-full px-4 py-2 border border-gold/30 rounded bg-white text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 disabled:opacity-50'
        >
          <option value='' disabled>
            Select an option
          </option>
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='message' className='block text-sm font-medium text-navy mb-2'>
          Message
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Your message'
          rows={6}
          disabled={isSubmitting}
          required
          aria-label='Your message'
          className='w-full px-4 py-2 border border-gold/30 rounded bg-white text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 disabled:opacity-50 resize-none'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        aria-label='Send message'
        className='w-full px-6 py-3 bg-magenta text-white font-medium rounded hover:bg-magenta/90 focus:outline-none focus:ring-2 focus:ring-magenta/50 disabled:opacity-50 transition-colors'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {confirmationMessage && (
        <p className={`text-sm ${confirmationMessage.includes('TODO') ? 'text-gold/75 italic bg-cream border-l-4 border-gold/30 px-4 py-3' : 'text-navy/70'}`}>
          {confirmationMessage}
        </p>
      )}
    </form>
  );
}
