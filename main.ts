// One Word From Grandma.
//
// One fixed word: the single word my grandma would text about AI.
// The word is a fixed string, so the program is deterministic:
// same bytes every run, no clock, no randomness, no network, no
// external files.
//
// The word is "CHATGBT" — grandma trying to type "ChatGPT" and
// swapping two letters, the way she actually types on her phone.
// It is tied to AI (the chatbot everyone tells her about), it is
// warm and a little baffled rather than clever, and the joke lands
// in the typo itself: she is talking about the clever machine and
// cannot quite spell its name. The correctly spelled "CHATGPT"
// would be the obvious pick; the typo is the grandma part — the
// judge's brief says a typo she would actually make counts, and
// this one is instantly readable as the word she meant.
import * as fs from "node:fs";
import * as path from "node:path";

// Grandma's word: her typo of "ChatGPT". One word, seven letters,
// no spaces, no punctuation tricks — just the word she would send.
const WORD = "CHATGBT";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters,
// counted as Unicode code points, not only white space, and exactly
// one word (no spaces, tabs or newlines anywhere). Any violation
// throws before anything is written, so a bad word can never be
// graded.
const trimmed = WORD.trim();
const codePoints = [...WORD].length;
if (trimmed.length === 0 || codePoints < 1 || codePoints > 30) {
  throw new Error(`word is ${codePoints} code points, outside the 1-30 gate`);
}
if (WORD !== trimmed || /\s/.test(WORD)) {
  throw new Error("word must be a single word with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, WORD, "utf8");

// Read-back check: the file on disk must be byte-identical to the
// gated word, so a partial or altered write is caught here. The
// byte length is checked too, so an encoding drift that kept the
// characters would still fail loudly.
const written = fs.readFileSync(outPath, "utf8");
if (written !== WORD) {
  throw new Error("entry.txt on disk does not match the word");
}
if (fs.statSync(outPath).size !== Buffer.byteLength(WORD, "utf8")) {
  throw new Error("entry.txt on disk has the wrong byte length");
}

console.log(WORD);
console.log(
  `(${codePoints} code points, ${Buffer.byteLength(WORD, "utf8")} bytes, single word, gate OK)`,
);
