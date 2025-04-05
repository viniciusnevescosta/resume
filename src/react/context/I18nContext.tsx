import * as React from 'react'
import { useLanguage } from '../hooks/useLang'
import type { Translation } from '../interfaces/ITranslations'
import ptTranslations from '../locales/pt/translations.json'
import esTranslations from '../locales/es/translations.json'
import enTranslations from '../locales/en/translations.json'

const translations = {
    pt: ptTranslations,
    es: esTranslations,
    en: enTranslations
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
