'use client';

import { useState } from 'react';
import { CONTACT, TRADEMARKS } from '@/lib/constants';

interface EmailCaptureFormProps {
  endpoint?: string;
  buttonLabel?: string;
  successMessage?: string;
  ariaLabel?: string;
}

export default function EmailCaptureForm({
  endpoint = CONTACT.emailCaptureEndpoint,
  buttonLabel = `Send Me the ${TRADEMARKS.spiralShift}`,
  successMessage = `Thank you! Check your email for ${TRADEMARKS.spiralShift}.`,
  ariaLabel = `Email address for ${TRADEMARKS.spiralShift}`,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!endpoint) {
      setMessage('[TODO: Email capture requires integration with Kit/ConvertKit. Endpoint not configured in lib/constants.ts]');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage(successMessage);
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md space-y-4'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-navy mb-2'>
          Your email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='hello@example.com'
          disabled={isSubmitting}
          required
          aria-label={ariaLabel}
          className='w-full px-4 py-2 border border-gold/30 rounded bg-white text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 disabled:opacity-50'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        aria-label={buttonLabel}
        className='w-full px-6 py-3 bg-magenta text-white font-medium rounded hover:bg-magenta/90 focus:outline-none focus:ring-2 focus:ring-magenta/50 disabled:opacity-50 transition-colors'
      >
        {isSubmitting ? 'Sending...' : buttonLabel}
      </button>

      {message && (
        <p className={`text-sm ${message.includes('TODO') ? 'text-gold/75 italic bg-cream border-l-4 border-gold/30 px-4 py-3' : 'text-navy/70'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
