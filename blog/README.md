# Blog

Astro blog. Posts live in `src/content/blog/` (the original-language source); translations in `src/content/translations/`.

## Translations

State-of-the-art translation system that leverages the quality and cost-efficiency of coding agents to translate posts that are written in 1 language. A stamp-and-check system ensures all translations are up-to-date with the source before being published (by a git push).

Each post has one source file (can be any language) and (optionally) N translations.

A translation is an `.mdx` whose frontmatter links back to its source and records the source version it was made from:

```yaml
translationOf: chancenkarte   # source post slug
lang: en
sourceHash: 901db399…         # hash of the source at translation time
draft: false
```

`sourceHash` is a SHA-256 of the source's frontmatter (title, description, dates, lang, slug, tags) **plus its body**. When the source changes, the hash changes and the translation is considered **stale**.

| Command | Does |
|---|---|
| `pnpm translations:check` | Fails if any translation's `sourceHash` ≠ its current source hash (i.e. source changed but translation wasn't updated). |
| `pnpm translations:stamp` | Rewrites each translation's `sourceHash` to the current source hash. |

**After edit a source post:** coding agents will update the translation content to match, then run `pnpm translations:stamp`. Stamping will record "this translation matches source version X".

> Cross-language anchors: the whole post (all languages) renders into one DOM, so heading ids must be unique across languages. Custom-id syntax is enabled by `remark-custom-heading-id` in `astro.config.mjs`.

## Git hook (`pnpm install` → `prepare`)

`translations:check` runs automatically as a **pre-push** hook, so a stale translation can't be pushed.

Because `.git/hooks/` is never cloned, the `prepare` npm script (`scripts/install-git-hooks.mjs`) re-creates `.git/hooks/pre-push` on every `pnpm install`. So after cloning, just run `pnpm install` and the hook is in place.
