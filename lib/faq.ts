export interface FaqAccordionItem {
  question: string;
  answer: string;
}

export interface FaqAccordionGroup {
  heading: string;
  items: FaqAccordionItem[];
}

export function faqGroupsToSchema(groups: FaqAccordionGroup[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };
}
