export const locales = ['en'];
export const defaultLocale = 'en';
export const rtlLocales = ['ar', 'ur'];

export function getDirection(locale) {
    return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}

export function isRTL(locale) {
    return rtlLocales.includes(locale);
}
