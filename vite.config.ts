import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
	plugins: [react(), Sitemap({ hostname: 'viniciusnevescosta.github.io' })],
	server: {
		open: true,
	},
})
