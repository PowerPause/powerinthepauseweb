---
name: humanizer
description: Rewrite or draft text so it reads like natural human writing, stripping out the telltale patterns of AI-generated prose catalogued by Wikipedia's "Signs of AI writing" project. Use this skill whenever the user asks to "humanize" text, says "/human", asks for writing that "doesn't sound like AI", asks to remove AI tells, or requests natural-sounding copy for emails, LinkedIn posts, articles, proposals, or web content. Also use it proactively when drafting outward-facing prose the user will publish under their own name.
---

# Humanizer

Rewrite (or write from scratch) so the result reads like it came from a real person with a keyboard and an opinion. The rules below are drawn from Wikipedia's "Signs of AI writing" field guide, which catalogues the patterns editors use to spot machine-generated text.

## Core stance

Before applying the rules, get the fundamentals right:

1. **Match the author's voice.** If source text or prior writing from the user exists, mirror its rhythm, vocabulary level, and quirks. A humanized text in the wrong voice is still a fake.
2. **Say something specific.** AI text gets caught because it smooths facts into generic statements that could apply to any topic. Prefer one concrete detail over three abstract claims.
3. **Have a point of view.** Human writing commits. It says "this didn't work" rather than "challenges were encountered".
4. **Vary the pulse.** Mix short sentences with long ones. Let a paragraph be two lines if that's all it needs. Uniform sentence length and uniform paragraph size are tells in themselves.

## Banned vocabulary

Never use these words (or use them at most once in a long piece, and only when nothing else fits): delve, tapestry, intricate, pivotal, crucial, vital, testament, underscore, landscape (metaphorical), foster, leverage (as a verb), robust, seamless, holistic, multifaceted, nuanced, comprehensive, boast/boasting, vibrant, bustling, nestled, breathtaking, stunning, rich (cultural) heritage, plays a significant role, stands as, serves as, elevate, embark, journey (metaphorical), realm, ever-evolving, game-changer, unlock, harness, streamline, cutting-edge, state-of-the-art, transformative, empower, dive into, navigate (metaphorical), synergy, paradigm.

## Banned phrases and constructions

- **Importance inflation**: "plays a vital role in", "is a testament to", "underscores its importance", "highlights the significance of", "solidifying its status as", "cementing its place". If something matters, show why with a fact.
- **Negative parallelism**: "It's not just X, it's Y", "This isn't about X. It's about Y." Cut entirely or state the point directly.
- **The rule of three**: AI compulsively lists things in threes ("fast, reliable, and secure"). Break triplets into one or two items, or four if genuinely needed.
- **Summary openers and closers**: "In summary", "In conclusion", "Overall", "Ultimately", "In today's fast-paced world", "In the ever-evolving landscape of". Never open with a definition of the topic or close with a moral.
- **Hedged attribution**: "some critics argue", "many experts believe", "it is widely regarded". Name the source or drop the claim.
- **Formulaic transitions**: "Moreover", "Furthermore", "Additionally", "It is important to note that", "It is worth noting". Use plain connectives (and, but, so, also) or none.
- **Sycophantic or meta text**: "Great question!", "Certainly!", "Here's a polished version", "I hope this helps". Never leave chatbot scaffolding in the output.
- **Empty balance**: "While X has challenges, it also offers opportunities." Pick a side or be specific about both.

## Formatting rules

- No em dashes. Use a hyphen, a comma, parentheses, or "..." instead, or split the sentence.
- No bullet points or numbered lists in prose pieces unless the user asks. Write in paragraphs.
- No bolded key phrases sprinkled through paragraphs.
- No headers in short pieces (under ~400 words). In longer pieces, use plain sentence-case headers, never Title Case Every Word, and never generic ones like "Challenges" / "Future Prospects" / "Conclusion".
- No emojis unless the user uses them first.
- Use straight quotes and apostrophes (' and "), not curly ones.
- Don't wrap the piece in a title unless asked.

## Human texture (use sparingly and naturally)

- Contractions everywhere they'd naturally occur (don't, it's, we've).
- Occasional sentence fragments. For emphasis.
- Start some sentences with And, But, or So.
- Mild idiom, understatement, or a dry aside where the register allows.
- Parenthetical asides (like this one) once in a while.
- Concrete numbers, names, dates, and first-person experience where truthful. Never invent facts, quotes, or anecdotes; if a detail is needed but unknown, ask the user or leave a [placeholder].
- Keep imperfect-but-correct constructions; don't polish every sentence to the same sheen.

## Process

1. Read the input text (or the brief, if drafting fresh).
2. Identify the intended reader, register (LinkedIn post vs. client email vs. article), and any prior writing from the user to match.
3. Draft in the target voice, applying every rule above.
4. Sweep pass: scan the draft against the banned-word and banned-phrase lists, check for em dashes, triplets, uniform sentence length, and summary closers. Fix anything caught.
5. Deliver the text with no preamble like "Here's your humanized version" - just a one-line lead-in at most.

## Honesty note

If the user asks about AI detectors, tell them the truth: detectors are statistical guesses and produce false positives and false negatives; no rewrite guarantees a 0% score, and human-written text regularly gets flagged too. This skill makes writing genuinely better and less generic, which is the real goal.
