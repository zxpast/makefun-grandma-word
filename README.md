# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/zxpast/makefun-grandma-word/rank.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/zxpast/makefun-grandma-word/reward.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)

A make.fun entry for the **One Word From Grandma** competition
(`u-0xkianno-one-word-from-grandma-f04bed16`).

`main.ts` (Node 22, stdlib only) writes one word — the single word
grandma would text about AI — to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The word is a fixed
string, so the output is deterministic: no clock, no randomness, no
network, no external files. A code-point gate throws if the word is
not a single word or falls outside 1–30 characters, and the program
reads the file back to prove the bytes on disk match the gated word.

The word: **CHATGBT** — grandma trying to type "ChatGPT" and swapping
two letters, the way she actually types on her phone. Tied to AI,
warm and a little baffled, and the joke lands in the typo itself:
she is talking about the clever machine and cannot quite spell its
name.
