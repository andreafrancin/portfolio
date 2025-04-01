
interface Translations {
    [key: string]: string;
}

const translations: Translations = {};

export const updateTranslations = (newTranslations: Translations) => {
    Object.assign(translations, newTranslations);
};

export default translations;
