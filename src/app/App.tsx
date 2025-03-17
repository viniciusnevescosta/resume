import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
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
			title: 'Selecione o tema',
			options: [
				{ id: 'system', value: 'Sistema' },
				{ id: 'light', value: 'Claro' },
				{ id: 'dark', value: 'Escuro' },
			],
		},
		lang: {
			title: 'Selecione o idioma',
			options: [
				{ id: 'pt-br', value: 'Português' },
				{ id: 'en-us', value: 'English' },
				{ id: 'es-es', value: 'Español' },
			],
		},
		file: {
			title: 'Salvar currículo em',
			options: [
				{ id: 'resume-us', value: 'English' },
				{ id: 'resume-ptbr', value: 'Português' },
				{ id: 'resume-es', value: 'Español' },
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
