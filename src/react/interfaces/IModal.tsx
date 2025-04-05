interface ModalConfig {
    id: string
    value: string
    checked?: boolean
    onClick?: () => void
}

export interface IModal {
    modalTitle: string
    modalOptions: ModalConfig[]
    isOpen: boolean
    onClose: () => void
}
