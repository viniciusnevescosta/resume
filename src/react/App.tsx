import { useState } from 'react'
import { BottomBar } from './shared/components/BottomBar'
import { OptionsMenu } from './shared/components/Menu'
import { OptionsModal } from './shared/components/Modal'
import { useTheme } from './shared/hooks/useTheme'
import { useLanguage } from './shared/hooks/useLang'

export const App = () => {
    type ModalType = 'theme' | 'lang'
    const [activeModal, setActiveModal] = useState<{
        type: ModalType | null
        isOpen: boolean
    }>({ type: null, isOpen: false })

    const { setTheme, effectiveTheme, theme } = useTheme()
    const { setLanguage, language } = useLanguage()

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
                    id: 'en-us',
                    value: 'Inglês',
                    checked: language === 'en-us',
                    onClick: () => setLanguage('en-us')
                },
                {
                    id: 'es-es',
                    value: 'Espanhol',
                    checked: language === 'es-es',
                    onClick: () => setLanguage('es-es')
                },
                {
                    id: 'pt-br',
                    value: 'Português',
                    checked: language === 'pt-br',
                    onClick: () => setLanguage('pt-br')
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
