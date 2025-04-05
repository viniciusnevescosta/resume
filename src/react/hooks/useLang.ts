import { useEffect, useState } from 'react'

type Language = 'pt' | 'es' | 'en'

const getSavedLanguage = (): Language | null => {
    if (typeof window === 'undefined') return null
    const lang = localStorage.getItem('language') as Language | null
    return lang && ['pt', 'es', 'en'].includes(lang) ? lang : null
}

export const useLanguage = () => {
    const [language] = useState<Language>(() => {
        const urlLang = window.location.pathname.split('/')[1] as Language
        if (['pt', 'es', 'en'].includes(urlLang)) return urlLang

        const saved = getSavedLanguage()
        if (saved) return saved

        const browserLang = navigator.language.split('-')[0].toLowerCase()
        return browserLang === 'pt' || browserLang === 'es' ? browserLang : 'en'
    })

    const changeLanguage = (newLang: Language) => {
        localStorage.setItem('language', newLang)

        const currentLang = window.location.pathname.split('/')[1]
        if (currentLang !== newLang) {
            window.location.href = window.location.href.replace(
                `/${currentLang}`,
                `/${newLang}`
            )
        }
    }

    useEffect(() => {
        const savedLang = getSavedLanguage()
        const urlLang = window.location.pathname.split('/')[1] as Language

        if (savedLang && savedLang !== urlLang) {
            window.location.href = `/${savedLang}${window.location.pathname.substring(3)}`
        }

        document.documentElement.lang = language
    }, [language])

    return {
        language,
        setLanguage: changeLanguage
    }
}
