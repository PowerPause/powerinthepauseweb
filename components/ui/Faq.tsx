import { JsonLd } from '@/components/JsonLd';

export interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ items, heading = 'Frequently asked questions' }: { items: FaqItem[]; heading?: string }) {
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
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.question}>
            <h3 className="font-serif text-xl text-navy mb-2">{item.question}</h3>
            <p className="font-sans text-navy/80 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
      <JsonLd data={schema} />
    </div>
  );
}
