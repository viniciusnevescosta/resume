// @ts-check
// https://inlang.com/m/iljlwzfs/paraglide-astro-i18n
// https://www.reddit.com/r/webdev/comments/195x5yj/astro_and_i18n_insights/
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
// import partytown from '@astrojs/partytown' // https://umami.is/

export default defineConfig({
    integrations: [react(), sitemap()],
    site: 'https://resume.viniciusnevescosta.com',
    base: '',
    i18n: {
        locales: ['en', 'es', 'pt'],
        defaultLocale: 'en'
    }
})
