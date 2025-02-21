const setStorageThemeBySystemOne = (): void => {
	if (!localStorage.getItem('theme')) {
		const SYSTEM_THEME = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light'
		localStorage.setItem('theme', SYSTEM_THEME)
	}
}

const getStorageTheme = (): 'light' | 'dark' => {
    const theme = localStorage.getItem('theme')
    return theme === 'dark' || theme === 'light' ? theme : 'light'
}

const toggleStorageTheme = (): void => {
	const CURRENT_THEME = getStorageTheme()
	const NEW_THEME = CURRENT_THEME === 'dark' ? 'light' : 'dark'
	localStorage.setItem('theme', NEW_THEME)
	applyTheme()
}

const applyTheme = (): void => {
	const CURRENT_THEME = getStorageTheme()
	document.documentElement.setAttribute('data-theme', CURRENT_THEME)
	switchButtonIcon()
}

const toggleButton = (): void => {
	const BUTTON_NODE = document.querySelectorAll(
		'#theme',
	) as NodeListOf<HTMLElement> | null
	if (!BUTTON_NODE) return

	for (const BUTTON of BUTTON_NODE) {
		BUTTON.addEventListener('click', toggleStorageTheme)
	}
}

const switchButtonIcon = (): void => {
	const BUTTON_NODE = document.querySelectorAll(
		'#theme',
	) as NodeListOf<HTMLElement> | null
	if (!BUTTON_NODE) return

	const CURRENT_THEME = getStorageTheme()
	for (const BUTTON of BUTTON_NODE) {
		BUTTON.classList.toggle('ri-moon-line', CURRENT_THEME === 'light')
		BUTTON.classList.toggle('ri-sun-line', CURRENT_THEME === 'dark')
	}
}

const watchSystemTheme = (): void => {
	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', e => {
			if (!localStorage.getItem('theme')) {
				localStorage.setItem('theme', e.matches ? 'dark' : 'light')
				applyTheme()
			}
		})
}

export const handleTheme = (): void => {
    setStorageThemeBySystemOne()
    applyTheme()
    toggleButton()
    switchButtonIcon()
    watchSystemTheme()
}
