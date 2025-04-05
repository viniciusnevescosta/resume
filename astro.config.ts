// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
// import partytown from '@astrojs/partytown' // https://umami.is/

// https://astro.build/config
export default defineConfig({
    integrations: [react(), sitemap()], //  pdf() - https://ler.quest/astro-pdf/#other-configuration-options
    site: 'https://resume.viniciusnevescosta.com',
    base: '',
    i18n: {
        locales: ['es', 'en', 'pt'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false
        }
    },
    redirects: {
        '/': '/en'
    }
})
