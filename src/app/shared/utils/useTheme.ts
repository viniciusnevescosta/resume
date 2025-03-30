import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system-theme'

const getSystemTheme = (): 'light' | 'dark' => {
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

const getStoredTheme = (): Theme => {
	if (typeof window === 'undefined') return 'system-theme'

	let theme = localStorage.getItem('theme') as Theme

	if (!theme) {
		theme = 'system-theme'
		localStorage.setItem('theme', theme)
	}

	return theme
}

const getEffectiveTheme = (theme: Theme): 'light' | 'dark' => {
	return theme === 'system-theme' ? getSystemTheme() : theme
}

const applyThemeToDocument = (theme: 'light' | 'dark') => {
	document.documentElement.setAttribute('data-theme', theme)
}

export const useTheme = () => {
	const [theme, setThemeState] = useState<Theme>(getStoredTheme)
	const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(() =>
		getEffectiveTheme(theme),
	)

	const setTheme = (newTheme: Theme) => {
		localStorage.setItem('theme', newTheme)
		setThemeState(newTheme)
	}

	const toggleTheme = () => {
		setThemeState(prev => {
			const newTheme =
				prev === 'light' ? 'dark' : prev === 'dark' ? 'system-theme' : 'light'

			localStorage.setItem('theme', newTheme)
			return newTheme
		})
	}

	useEffect(() => {
		const effective = getEffectiveTheme(theme)
		setEffectiveTheme(effective)
		applyThemeToDocument(effective)
	}, [theme])

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handler = () => {
			if (theme === 'system-theme') {
				const effective = getSystemTheme()
				setEffectiveTheme(effective)
				applyThemeToDocument(effective)
			}
		}

		mediaQuery.addEventListener('change', handler)
		return () => mediaQuery.removeEventListener('change', handler)
	}, [theme])

	return {
		theme,
		effectiveTheme,
		setTheme,
		toggleTheme,
	}
}
