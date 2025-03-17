interface ModalConfig {
	id: string
	value: string
}

export interface OptionsModalProps {
	modalTitle: string
	modalOptions: ModalConfig[]
	isOpen: boolean
	onClose: () => void
}
