# Dad Joke Showdown

[![Dad Joke Showdown](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/Xyzar29/dad-joke-showdown/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/Xyzar29/dad-joke-showdown/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) on [make.fun](https://make.fun): one dad joke, at most 200 characters, judged pairwise by an AI judge on which one lands the bigger groan.

## The joke

> I told my three kids I'm writing a book of dad jokes. They said, 'That's a terrible idea.' I said, 'Exactly — it's a novel punishment.'

135 characters, one line. The punchline turns on "novel" (a book) against "punishment" (the groan every dad joke inflicts).

## How it runs

`main.ts` writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and enforces the competition gate itself: the text must be 1–200 characters and not only white space.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
