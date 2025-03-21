type modalType = 'theme' | 'lang' | 'file'

export interface optionsMenuProps {
	onClickModal: (type: modalType) => void
}
