// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ]
}
