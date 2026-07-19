'use client';

import { useState } from 'react';
import { JsonLd } from '@/components/JsonLd';

export interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ items, heading = 'Frequently asked questions' }: { items: FaqItem[]; heading?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-2xl">
      {heading && (
        <h2 className="font-serif text-3xl md:text-4xl font-light text-navy mb-8">{heading}</h2>
      )}
      <div className="border-t border-navy/10">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-navy/10">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-4 text-left font-serif text-xl text-navy hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded"
              >
                <span>{item.question}</span>
                <span className="text-xl text-gold flex-shrink-0 leading-none" aria-hidden="true">
                  {isOpen ? '\u2212' : '+'}
                </span>
              </button>
              {isOpen && (
                <p className="font-sans text-navy/80 leading-relaxed pb-5 pr-8">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
      <JsonLd data={schema} />
    </div>
  );
}
