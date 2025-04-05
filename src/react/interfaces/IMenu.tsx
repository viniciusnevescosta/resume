type modalType = 'theme' | 'lang'
type Theme = 'light' | 'dark'

export interface IMenu {
    onClickModal: (type: modalType) => void
    Theme: Theme
}
