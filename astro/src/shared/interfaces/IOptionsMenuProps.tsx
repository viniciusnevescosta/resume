type modalType = 'theme' | 'lang'
type Theme = 'light' | 'dark'

export interface optionsMenuProps {
	onClickModal: (type: modalType) => void
	Theme: Theme
}
