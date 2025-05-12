import { useState } from 'react'

type Language = 'en' | 'es' | 'pt'
const supportedLocales: Language[] = ['en', 'es', 'pt']

export const useLanguage = () => {
    const [language] = useState<Language>(() => {
        const urlLang = window.location.pathname.split('/')[1] as Language
        return supportedLocales.includes(urlLang) ? urlLang : 'en'
    })

    const changeLanguage = (newLang: Language) => {
        const currentPath = window.location.pathname
        
        const pathWithoutLocale = supportedLocales.reduce((path, lang) => 
            path.replace(`/${lang}`, ''), currentPath
        )

        const newPath = newLang === 'en' 
            ? pathWithoutLocale 
            : `/${newLang}${pathWithoutLocale}`

        window.location.href = newPath
    }

    return {
        language,
        setLanguage: changeLanguage
    }
}