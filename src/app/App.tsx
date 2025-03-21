import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
import { BottomBar } from './shared/components/BottomBar'
import { OptionsMenu } from './shared/components/OptionsMenu'
import { OptionsModal } from './shared/components/OptionsModal'

export const App = () => {
	type ModalType = 'theme' | 'lang' | 'file'
	const [activeModal, setActiveModal] = useState<{
		type: ModalType | null
		isOpen: boolean
	}>({ type: null, isOpen: false })

	const modalConfigs = {
		theme: {
			title: 'Selecionar tema',
			options: [
				{ id: 'system-theme', value: 'Sistema', checked: true },
				{ id: 'light', value: 'Claro' },
				{ id: 'dark', value: 'Escuro' },
			],
		},
		lang: {
			title: 'Selecionar idioma',
			options: [
				{ id: 'system-lang', value: 'Sistema', checked: true },
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
