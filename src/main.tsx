import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App.tsx'
import './main.css'

const root = document.getElementById('root')

if (!root) {
	throw new Error('Root element not found. Check your index.html.')
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
