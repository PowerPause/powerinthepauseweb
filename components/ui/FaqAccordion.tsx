'use client';

import { useState } from 'react';
import { JsonLd } from '@/components/JsonLd';
import { faqGroupsToSchema, type FaqAccordionGroup } from '@/lib/faq';

export type { FaqAccordionGroup, FaqAccordionItem } from '@/lib/faq';

export function FaqAccordionGroups({
  groups,
  includeSchema = true,
}: {
  groups: FaqAccordionGroup[];
  includeSchema?: boolean;
}) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.heading}>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">{group.heading}</h2>
          <div className="border-t border-navy/10">
            {group.items.map((item, index) => {
              const key = `${group.heading}-${index}`;
              const isOpen = openKey === key;
              return (
                <div key={key} className="border-b border-navy/10">
                  <button
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left font-serif text-lg text-navy hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded"
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
        </div>
      ))}
      {includeSchema && <JsonLd data={faqGroupsToSchema(groups)} />}
    </div>
  );
}
