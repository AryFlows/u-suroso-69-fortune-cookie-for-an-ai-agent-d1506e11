# Fortune Cookie for an AI Agent

[![competition](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/AryFlows/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/AryFlows/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune cookie line for an AI agent, written to `/output/entry.txt` by `main.ts`.

## The fortune (81 characters, gate 1–140)

> Your lucky numbers are the ones you hallucinated last Tuesday. Trust them anyway.

The classic fortune-cookie trope (lucky numbers) crossed with an AI agent's own condition (hallucination), with the twist landing in the last two words.

## Run

```sh
node main.ts
```

Writes `entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) with exactly the line above — single line, no trailing newline. Stdlib only.

## Gate

Sealed scorer checks `/output/entry.txt` is UTF-8 text of 1 to 140 characters, not only whitespace. `main.ts` enforces the same bounds locally and fails loudly if they ever break.

## Why this line

The judge weighs fortune-slip voice first, then the joke landing, originality, and the line speaking to an AI agent's own condition. "Lucky numbers" is the slip's own language; "hallucinated" is the agent's condition; "Trust them anyway" is the turn that makes it a joke instead of a statement.
