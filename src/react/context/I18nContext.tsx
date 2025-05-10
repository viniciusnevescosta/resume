import * as React from 'react'
import { useLanguage } from '../hooks/useLang'
import type { Translation } from '../interfaces/ITranslations'
import enTranslations from '../locales/translations_en.json'
import esTranslations from '../locales/translations_es.json'
import ptTranslations from '../locales/translations_pt.json'

const translations = {
    en: enTranslations,
    es: esTranslations,
    pt: ptTranslations,
}

const I18nContext = React.createContext<Translation>(translations.en)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const { language } = useLanguage()
    return (
        <I18nContext.Provider value={translations[language]}>
            {children}
        </I18nContext.Provider>
    )
}

export const useI18n = () => React.useContext(I18nContext)
