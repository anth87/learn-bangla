# Learning Record Format

Learning records live in `learning-records/` and are named `NNNN-slug.md` — four-digit sequential numbers followed by a short kebab-case slug describing the session topic.

They follow an ADR (Architecture Decision Record) style: short, structured, written at the moment of learning, never retroactively polished.

## Template

```md
# NNNN: {Session Topic}

**Date**: YYYY-MM-DD
**Lesson**: {link or reference to the lesson file, e.g. lessons/0001-meeting-your-in-laws.html}
**Duration**: {approximate time spent}

## What we covered
{1-3 sentences. What was the lesson about?}

## What the learner already knew
{List anything the learner demonstrated prior knowledge of — even partial.}

## What landed well
{What did the learner grasp easily or respond to positively?}

## What was hard
{What caused confusion, hesitation, or errors? Be specific.}

## Vocabulary introduced
| Phonetic | Meaning | Notes |
|----------|---------|-------|
| word     | meaning | any usage note |

## Needs revisiting
- {Specific phrase or concept to re-surface in a future session}

## Real-world challenge set
{The specific thing the learner was asked to try before the next session.}

## Notes for next session
{What should the next lesson build on, revisit, or introduce? Be opinionated.}
```

## Rules

- **Write immediately after the session.** Memory of difficulty and confusion fades fast.
- **Be honest about what was hard.** The record is not a report card — it's a map.
- **One record per session.** Don't batch multiple sessions into one record.
- **Sequential numbering.** NNNN starts at 0001 and increments. Never reuse a number.
- **Don't over-polish.** Notes written in the moment are more useful than cleaned-up retrospectives.
- **Link to the lesson file.** So you can find what was taught.

## How Claude uses these records

Before each new session, Claude reads all records to:
- Identify what has been taught (avoid repetition)
- Identify what needs spaced review (bring back material the learner found hard)
- Assess the learner's current ZPD (zone of proximal development)
- Calibrate the difficulty and content of the next lesson
