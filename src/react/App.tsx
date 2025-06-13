import { useState } from 'react'
// import { BottomBar } from './components/BottomBar'
// import { OptionsMenu } from './components/Menu'
// import { OptionsModal } from './components/Modal'
// import { Notification } from './components/Notification'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLang'
import { I18nProvider, useI18n } from './context/I18nContext'

type ModalType = 'theme' | 'lang'

const AppContent = () => {
    const i18n = useI18n()

    const [activeModal, setActiveModal] = useState<{
        type: ModalType | null
        isOpen: boolean
    }>({ type: null, isOpen: false })

    const { theme, effectiveTheme, setTheme } = useTheme()
    const { language, setLanguage } = useLanguage()

    const modalConfigs = {
        theme: {
            title: i18n.modal.theme.title,
            options: [
                {
                    id: 'system-theme',
                    value: i18n.modal.theme.systemTheme,
                    checked: theme === 'system-theme',
                    onClick: () => setTheme('system-theme')
                },
                {
                    id: 'light',
                    value: i18n.modal.theme.light,
                    checked: theme === 'light',
                    onClick: () => setTheme('light')
                },
                {
                    id: 'dark',
                    value: i18n.modal.theme.dark,
                    checked: theme === 'dark',
                    onClick: () => setTheme('dark')
                }
            ]
        },
        lang: {
            title: i18n.modal.lang.title,
            options: [
                {
                    id: 'en',
                    value: i18n.modal.lang.en,
                    checked: language === 'en',
                    onClick: () => setLanguage('en')
                },
                {
                    id: 'es',
                    value: i18n.modal.lang.es,
                    checked: language === 'es',
                    onClick: () => setLanguage('es')
                },
                {
                    id: 'pt',
                    value: i18n.modal.lang.pt,
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
            {/* <OptionsMenu
                onClickModal={handleOpenModal}
                Theme={effectiveTheme}
            />
            <BottomBar onClickModal={handleOpenModal} Theme={effectiveTheme} /> */}

            {/* {activeModal.type && (
                <OptionsModal
                    modalTitle={modalConfigs[activeModal.type].title}
                    modalOptions={modalConfigs[activeModal.type].options}
                    isOpen={activeModal.isOpen}
                    onClose={handleCloseModal}
                />
            )} */}
            {/* <Notification /> */}
        </>
    )
}

export const App = () => {
    return (
        <I18nProvider>
            <AppContent />
        </I18nProvider>
    )
}
