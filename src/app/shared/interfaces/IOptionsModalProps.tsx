interface ModalConfig {
	id: string
	value: string
	checked?: boolean
	onClick?: () => void
}

export interface OptionsModalProps {
	modalTitle: string
	modalOptions: ModalConfig[]
	isOpen: boolean
	onClose: () => void
}
