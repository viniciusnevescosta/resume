export interface Translation {
    menu: {
        themeTitle: string
        langTitle: string
        fileTitle: string
    }
    modal: {
        theme: {
            title: string
            systemTheme: string
            light: string
            dark: string
        }
        lang: {
            title: string
            en: string
            es: string
            pt: string
        }
        closeMessage: string
        kbdMessage: string
    }
}
