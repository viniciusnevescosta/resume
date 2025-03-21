interface ModalConfig {
	id: string
	value: string
	onClick?: () => void
}

export interface OptionsModalProps {
	modalTitle: string
	modalOptions: ModalConfig[]
	isOpen: boolean
	onClose: () => void
}
