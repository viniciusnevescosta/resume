import React from 'react'
import { useState } from 'react'
import { BottomBar } from './components/BottomBar'
import { OptionsMenu } from './components/Menu'
import { OptionsModal } from './components/Modal'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLang'

export const App = () => {
    type ModalType = 'theme' | 'lang'
    const [activeModal, setActiveModal] = useState<{
        type: ModalType | null
        isOpen: boolean
    }>({ type: null, isOpen: false })

    const { theme, effectiveTheme, setTheme } = useTheme()
    const { language, setLanguage } = useLanguage()

    const modalConfigs = {
        theme: {
            title: 'Selecionar tema',
            options: [
                {
                    id: 'system-theme',
                    value: 'Sistema',
                    checked: theme === 'system-theme',
                    onClick: () => setTheme('system-theme')
                },
                {
                    id: 'light',
                    value: 'Claro',
                    checked: theme === 'light',
                    onClick: () => setTheme('light')
                },
                {
                    id: 'dark',
                    value: 'Escuro',
                    checked: theme === 'dark',
                    onClick: () => setTheme('dark')
                }
            ]
        },
        lang: {
            title: 'Selecionar idioma',
            options: [
                {
                    id: 'en',
                    value: 'Inglês',
                    checked: language === 'en',
                    onClick: () => setLanguage('en')
                },
                {
                    id: 'es',
                    value: 'Espanhol',
                    checked: language === 'es',
                    onClick: () => setLanguage('es')
                },
                {
                    id: 'pt',
                    value: 'Português',
                    checked: language === 'pt',
                    onClick: () => setLanguage('pt')
                }
            ]
        }
    }

    const handleOpenModal = (type: ModalType): void => {
        setActiveModal({ type, isOpen: true })
    }

    const handleCloseModal = (): void => {
        setActiveModal({ type: null, isOpen: false })
    }

    return (
        <>
            <OptionsMenu
                onClickModal={handleOpenModal}
                Theme={effectiveTheme}
            />
            <BottomBar onClickModal={handleOpenModal} Theme={effectiveTheme} />

            {activeModal.type && (
                <OptionsModal
                    modalTitle={modalConfigs[activeModal.type].title}
                    modalOptions={modalConfigs[activeModal.type].options}
                    isOpen={activeModal.isOpen}
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}
