export type Lang = "pt" | "en";

export const labels: Record<
  Lang,
  {
    download: string;
    language: string;
    theme: string;
    light: string;
    dark: string;
    settings: string;
    summary: string;
    generatingPdf: string;
  }
> = {
  pt: {
    download: "Baixar PDF",
    language: "Idioma",
    theme: "Tema",
    light: "Claro",
    dark: "Escuro",
    settings: "Preferências",
    summary: "Resumo",
    generatingPdf: "Gerando…",
  },
  en: {
    download: "Download PDF",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    settings: "Preferences",
    summary: "Abstract",
    generatingPdf: "Generating…",
  },
};

export const languageLinks: Record<Lang, { lang: Lang; label: string; href: string }[]> = {
  pt: [
    { lang: "pt", label: "PT", href: "/" },
    { lang: "en", label: "EN", href: "/en" },
  ],
  en: [
    { lang: "pt", label: "PT", href: "/" },
    { lang: "en", label: "EN", href: "/en" },
  ],
};
