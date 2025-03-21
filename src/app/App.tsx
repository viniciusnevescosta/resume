import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
import { BottomBar } from './shared/components/BottomBar'
import { OptionsMenu } from './shared/components/OptionsMenu'
import { OptionsModal } from './shared/components/OptionsModal'
import { useTheme } from './shared/utils/useTheme'

export const App = () => {
	type ModalType = 'theme' | 'lang' | 'file'
	const [activeModal, setActiveModal] = useState<{
		type: ModalType | null
		isOpen: boolean
	}>({ type: null, isOpen: false })

	const { setTheme } = useTheme()

	const modalConfigs = {
		theme: {
			title: 'Selecionar tema',
			options: [
				{
					id: 'system-theme',
					value: 'Sistema',
					onClick: () => setTheme('system-theme'),
				},
				{
					id: 'light',
					value: 'Claro',
					onClick: () => setTheme('light'),
				},
				{
					id: 'dark',
					value: 'Escuro',
					onClick: () => setTheme('dark'),
				},
			],
		},
		lang: {
			title: 'Selecionar idioma',
			options: [
				{ id: 'system-lang', value: 'Sistema' },
				{ id: 'en-us', value: 'Inglês' },
				{ id: 'pt-br', value: 'Português' },
				{ id: 'es-es', value: 'Espanhol' },
			],
		},
		file: {
			title: 'Salvar currículo em',
			options: [
				{ id: 'resume-us', value: 'Inglês' },
				{ id: 'resume-ptbr', value: 'Português' },
				{ id: 'resume-es', value: 'Espanhol' },
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
			<OptionsMenu onClickModal={handleOpenModal} />
			<BottomBar onClickModal={handleOpenModal} />

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
