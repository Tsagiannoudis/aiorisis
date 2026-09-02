export type Locale = "el" | "en";

export type LocalizedText = {
    el: string;
    en: string;
};

export function getLocalizedText(
    value: LocalizedText,
    locale: Locale
): string {
    return value[locale]?.trim() || value.el;
}

export function createTranslator(locale: Locale) {
    return (value: LocalizedText): string =>
        getLocalizedText(value, locale);
}