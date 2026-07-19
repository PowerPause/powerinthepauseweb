import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { FaqAccordionGroups } from '@/components/ui/FaqAccordion';
import { faqGroupsToSchema } from '@/lib/faq';
import { JsonLd } from '@/components/JsonLd';
import { TRADEMARKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ | Power In The Pause®',
  description: 'Practical answers about mentoring, The Art of Pausing®, retreats and the Spiral Shift®.',
  alternates: {
    canonical: 'https://thepowerinthepause.co.uk/faq/',
  },
  openGraph: {
    title: 'FAQ | Power In The Pause®',
    description: 'Practical answers about mentoring, The Art of Pausing®, retreats and the Spiral Shift®.',
    url: 'https://thepowerinthepause.co.uk/faq/',
    type: 'website',
    siteName: 'Power In The Pause®',
    locale: 'en_GB',
  },
};

const faqGroups = [
  {
    heading: 'One-to-One Mentoring',
    items: [
      {
        question: `What is the ${TRADEMARKS.coachingProgramme}?`,
        answer: `The ${TRADEMARKS.coachingProgramme} is Katie's signature one-to-one mentoring experience. It brings together practical strategy, positive psychology, behavioural insight, reflection and creative enquiry to help people create clarity, navigate change and move forward in a steadier and more sustainable way.`,
      },
      {
        question: 'Who is one-to-one mentoring for?',
        answer: 'It is designed for thoughtful, capable people who may be facing a decision, navigating personal or professional change, questioning what comes next or recognising that their usual way of pushing through is no longer serving them. You do not need to arrive with a perfectly formed goal. Knowing that something needs attention is enough to begin.',
      },
      {
        question: 'Is this traditional coaching?',
        answer: 'The work draws on coaching, positive psychology, creative enquiry and practical strategy, but it is not limited to a traditional coaching model. The approach is personalised around the individual, the situation and what will be most useful. Some conversations may be strategic. Others may explore patterns, beliefs, emotions or a different way of seeing the challenge.',
      },
      {
        question: 'Do I need to be creative?',
        answer: 'No. Creative practices may be used as tools for attention and reflection, but there is no expectation that you produce artwork or consider yourself artistic.',
      },
      {
        question: 'Do you work with businesses and organisations?',
        answer: "Yes. Katie offers bespoke mentoring, workshops, facilitated sessions, away days, strategic reflection and collaborations for leaders, teams and organisations across different sectors.",
      },
      {
        question: 'How do I begin?',
        answer: 'Begin by booking a conversation or getting in touch through the Work With Katie page. The first conversation is an opportunity to explore what you need, the most appropriate form of support and whether the work feels like a good fit.',
      },
    ],
  },
  {
    heading: TRADEMARKS.artOfPausing,
    items: [
      {
        question: `What is ${TRADEMARKS.artOfPausing}?`,
        answer: `${TRADEMARKS.artOfPausing} is the signature creative practice within Power In The Pause®. It uses simple guided pen-and-paper practices to help people slow down, move out of repetitive thinking, process experience and create space for clarity, reflection and fresh perspective.`,
      },
      {
        question: 'Do I need to be good at drawing?',
        answer: `No. ${TRADEMARKS.artOfPausing} is not an art lesson, and there is no right way for the finished page to look. The lines, shapes and marks give your attention somewhere to go. The purpose is the experience and the shift it may create, not the quality of the drawing.`,
      },
      {
        question: 'What materials do I need?',
        answer: 'Most practices require only paper, a pen or pencil, and a quiet space where possible. Any additional materials will be clearly explained before you begin.',
      },
      {
        question: `Is ${TRADEMARKS.artOfPausing} meditation?`,
        answer: 'No. It offers a creative alternative for people who may not connect with traditional meditation. Rather than asking you to empty your mind, the practice gives your attention something simple and structured to do.',
      },
      {
        question: 'Is this therapy?',
        answer: `No. ${TRADEMARKS.artOfPausing} is not therapy, counselling or medical treatment. It is a creative wellbeing practice designed to support awareness, reflection and everyday emotional wellbeing.`,
      },
      {
        question: 'How long does a practice take?',
        answer: `Practice length varies. The ${TRADEMARKS.spiralShift} takes five minutes. Many of the fuller practices inside ${TRADEMARKS.artOfPausing} app take approximately 30 minutes.`,
      },
      {
        question: 'How do I access the app?',
        answer: `Visit the dedicated ${TRADEMARKS.artOfPausing} page for current information about the app, membership and availability.`,
      },
    ],
  },
  {
    heading: 'Retreats',
    items: [
      {
        question: 'Does Katie host her own retreats?',
        answer: `Yes. Katie creates and hosts ${TRADEMARKS.masterBrand} day retreats and residential experiences. Upcoming dates will be shared on the Retreats page. When no dates are currently available, visitors can register their interest.`,
      },
      {
        question: 'Can Katie facilitate at a retreat hosted by someone else?',
        answer: `Yes. Katie can bring ${TRADEMARKS.artOfPausing} into an existing retreat as a standalone creative session, a half-day experience, several practices woven through the programme, or a bespoke contribution shaped around the retreat theme.`,
      },
      {
        question: 'What kinds of retreats are suitable?',
        answer: 'The work can be adapted for wellbeing retreats, personal-development retreats, creative retreats, women\u2019s retreats, leadership and business retreats, team away days, private groups and bespoke gatherings.',
      },
      {
        question: 'Do participants need artistic experience?',
        answer: 'No. The practices are accessible to people with all levels of creative experience, including those who believe they cannot draw.',
      },
      {
        question: 'How long can a retreat session be?',
        answer: 'Sessions can range from approximately 45 minutes to half a day, depending on the group, theme and wider retreat programme.',
      },
      {
        question: 'Can the session be tailored to a specific theme?',
        answer: 'Yes. Sessions can be shaped around themes such as change, gratitude, creativity, leadership, self-trust, transition, emotional wellbeing, intention and connection.',
      },
      {
        question: 'Does Katie travel?',
        answer: 'Yes. Retreat facilitation can be discussed for locations across the UK and further afield, subject to availability and agreed travel and accommodation arrangements.',
      },
    ],
  },
  {
    heading: TRADEMARKS.spiralShift,
    items: [
      {
        question: `What is the ${TRADEMARKS.spiralShift}?`,
        answer: `The ${TRADEMARKS.spiralShift} is a free five-minute creative practice and the simplest way to experience the approach behind Power In The Pause® and ${TRADEMARKS.artOfPausing}. It uses a simple spiral drawing to help move your attention away from mental noise and onto the page.`,
      },
      {
        question: 'Do I need artistic ability?',
        answer: 'No. You only need a pen, a piece of paper and five minutes. There is nothing to draw correctly and no finished result to achieve.',
      },
      {
        question: `How do I receive the ${TRADEMARKS.spiralShift}?`,
        answer: 'Enter your email address on The Pause Library page. The practice will then be sent directly to your inbox.',
      },
      {
        question: `Is the ${TRADEMARKS.spiralShift} part of the app?`,
        answer: `The ${TRADEMARKS.spiralShift} is offered as a free standalone introduction to the work. ${TRADEMARKS.artOfPausing} app contains the fuller creative practices and emotional pathways.`,
      },
      {
        question: 'Where is the best place to begin?',
        answer: `The ${TRADEMARKS.spiralShift} is the simplest first step if you are curious about the creative practice. For a deeper experience, explore ${TRADEMARKS.artOfPausing} app. For personalised support, visit Work With Katie. For live and immersive experiences, visit Retreats.`,
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-lg text-navy/70 leading-relaxed">
            Practical answers about mentoring, {TRADEMARKS.artOfPausing}, retreats and the {TRADEMARKS.spiralShift}.
          </p>
        </div>

        <div className="bg-white px-6 md:px-8 py-8 md:py-12 rounded space-y-8">
          <div>
            <FaqAccordionGroups groups={[faqGroups[0]]} includeSchema={false} />
            <div className="mt-6">
              <Button href="/coaching" variant="secondary">
                Explore Working With Katie
              </Button>
            </div>
          </div>

          <div>
            <FaqAccordionGroups groups={[faqGroups[1]]} includeSchema={false} />
            <div className="mt-6">
              <Button href="/art/the-art-of-pausing" variant="secondary">
                Discover {TRADEMARKS.artOfPausing}
              </Button>
            </div>
          </div>

          <div>
            <FaqAccordionGroups groups={[faqGroups[2]]} includeSchema={false} />
            <div className="mt-6">
              <Button href="/retreats" variant="secondary">
                Explore Retreats
              </Button>
            </div>
          </div>

          <div>
            <FaqAccordionGroups groups={[faqGroups[3]]} includeSchema={false} />
            <div className="mt-6">
              <Button href="/resources#spiral-shift" variant="secondary">
                Begin with the {TRADEMARKS.spiralShift}
              </Button>
            </div>
          </div>
        </div>

        <JsonLd data={faqGroupsToSchema(faqGroups)} />

        <div className="mt-10 bg-navy text-cream px-6 md:px-8 py-10 rounded text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-3">Still have a question?</h2>
          <p className="font-sans text-cream/90 mb-6">
            If your question is not answered here, please get in touch.
          </p>
          <Button href="/contact" variant="primary">
            Contact Katie
          </Button>
        </div>
      </div>
    </main>
  );
}
