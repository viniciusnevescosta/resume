import { useEffect, useState } from 'react'

type Language = 'pt-br' | 'es-es' | 'en-us'

/**
 * Detecta a linguagem do sistema usando navigator.language.
 * Se o idioma iniciar com 'pt' ou 'es', retorna respectivamente;
 * caso contrário, retorna 'en-us' como fallback.
 */
const getSystemLanguage = (): Language => {
    if (typeof navigator === 'undefined' || !navigator.language) return 'en-us'

    const lang = navigator.language.toLowerCase()
    if (lang.startsWith('pt')) return 'pt-br'
    if (lang.startsWith('es')) return 'es-es'
    return 'en-us'
}

/**
 * Tenta recuperar a linguagem armazenada em localStorage.
 * Retorna o valor somente se for um dos idiomas mapeados; caso contrário, retorna null.
 */
const getStoredLanguage = (): Language | null => {
    if (typeof window === 'undefined') return null

    const stored = localStorage.getItem('language')
    if (stored === 'pt-br' || stored === 'es-es' || stored === 'en-us') {
        return stored
    }
    return null
}

/**
 * Hook para gerenciar a linguagem.
 * Se houver uma linguagem válida armazenada, ela é utilizada;
 * caso contrário, é usada a linguagem detectada do sistema (com fallback para 'en-us').
 */
export const useLanguage = () => {
    const [language, setLanguageState] = useState<Language>(() => {
        const stored = getStoredLanguage()
        return stored ? stored : getSystemLanguage()
    })

    useEffect(() => {
        localStorage.setItem('language', language)
        document.documentElement.setAttribute('lang', language)
    }, [language])

    return {
        language,
        setLanguage: setLanguageState
    }
}
