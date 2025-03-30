import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
import { BottomBar } from './shared/components/BottomBar'
import { OptionsMenu } from './shared/components/OptionsMenu'
import { OptionsModal } from './shared/components/OptionsModal'
import { useTheme } from './shared/utils/useTheme'

export const App = () => {
	type ModalType = 'theme' | 'lang'
	const [activeModal, setActiveModal] = useState<{
		type: ModalType | null
		isOpen: boolean
	}>({ type: null, isOpen: false })

	const { setTheme, effectiveTheme, theme } = useTheme()

	const modalConfigs = {
		theme: {
			title: 'Selecionar tema',
			options: [
				{
					id: 'system-theme',
					value: 'Sistema',
					checked: theme === 'system-theme',
					onClick: () => setTheme('system-theme'),
				},
				{
					id: 'light',
					value: 'Claro',
					checked: theme === 'light',
					onClick: () => setTheme('light'),
				},
				{
					id: 'dark',
					value: 'Escuro',
					checked: theme === 'dark',
					onClick: () => setTheme('dark'),
				},
			],
		},
		lang: {
			title: 'Selecionar idioma',
			options: [
				{ id: 'en-us', value: 'Inglês' },
				{ id: 'es-es', value: 'Espanhol' },
				{ id: 'pt-br', value: 'Português' },
			],
		},
	}

	const handleOpenModal = (type: ModalType): void => {
		setActiveModal({ type, isOpen: true })
	}

	const handleCloseModal = (): void => {
		setActiveModal({ type: null, isOpen: false })
	}

	return (
		<>
			<MainLayout />
			<OptionsMenu onClickModal={handleOpenModal} Theme={effectiveTheme} />
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
