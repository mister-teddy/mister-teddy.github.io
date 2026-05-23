export const SITE_TITLE = "Blog";
export const SITE_DESCRIPTION =
  "Personal writing from Mister Teddy.";
export const SITE_URL = "https://mister-teddy.github.io";

export const LANGUAGE_NAMES = {
  en: "English",
  vi: "Vietnamese",
} as const;

export type LanguageCode = keyof typeof LANGUAGE_NAMES;

export const LANGUAGE_UI_LABELS = {
  en: {
    name: "English",
    original: "original",
    translation: "translation",
  },
  vi: {
    name: "Tiếng Việt",
    original: "bản gốc",
    translation: "bản dịch",
  },
} as const satisfies Record<
  LanguageCode,
  { name: string; original: string; translation: string }
>;

export function blogPath(path = "") {
  const base = import.meta.env.BASE_URL || "/blog/";
  return new URL(path.replace(/^\//, ""), `https://example.com${base}`)
    .pathname;
}

export function absoluteBlogUrl(path = "") {
  return new URL(blogPath(path), SITE_URL).toString();
}
