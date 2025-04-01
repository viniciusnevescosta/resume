// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown' // https://umami.is/
import pdf from 'astro-pdf'

// https://astro.build/config
export default defineConfig({
    integrations: [react(), sitemap(), partytown()], //  pdf() - https://ler.quest/astro-pdf/#other-configuration-options
    site: 'https://viniciusnevescosta.github.io',
    base: ''
})
