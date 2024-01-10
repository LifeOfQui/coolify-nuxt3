// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.NUXT_BASE_URL || '',
        head: {
            htmlAttrs: {
                lang: 'de'
            },
            charset: 'utf-8',
            meta: [
                {
                    name: 'description',
                    content: 'w.e.b. Software entwickelt seit über 20 Jahren Software. Dabei unterstützen wir Kunden weltweit bei der Optimierung ihrer Prozesse.'
                },
                {name: 'author', content: 'w.e.b. Software'},
                {
                    name: 'keywords',
                    content: 'Java, Java Programmierer, Java-Programmierer, Java-Softwareentwickler, Java Softwareentwickler, Stelle Java, Stelle Java Softwareentwickler, Stelle Programmierer, Anstellung Java Programmierer, Anstellung Java Softwareentwickler, Job als Programmierer, Job als Java Entwickler, Arbeit Java, Arbeit Java Programmierer, Stellenangebot Java, Stellenangebot Java Programmierer, Stellenangebot Softwareentwickler, Ingolstadt Programmierer, Ingolstadt Java Programmierer, Ingolstadt Java Softwareentwickler'
                },
                {name: 'page-topic', content: 'Dienstleistung, Softwareentwicklung, Java'},
                {'http-equiv': 'language', content: 'de'},

                {name: 'og:url', content: 'https://www.web-dienstleister.de'},
                {name: 'og:type', content: 'website'},
                {name: 'og:title', content: 'w.e.b. Software'},
                {
                    name: 'og:description',
                    content: 'w.e.b. Software entwickelt seit über 20 Jahren Software. Dabei unterstützen wir Kunden weltweit bei der Optimierung ihrer Prozesse.'
                },
                {name: 'og:image', content: 'https://www.web-dienstleister.de/images/heros/hero-main.webp'},

                {name: 'twitter:card', content: 'summary_large_image'},
                {property: 'twitter:domain', content: 'web-dienstleister.de'},
                {property: 'twitter:url', content: 'https://www.web-dienstleister.de'},
                {name: 'twitter:title', content: 'w.e.b. Software'},
                {
                    name: 'twitter:description',
                    content: 'w.e.b. Software entwickelt seit über 20 Jahren Software. Dabei unterstützen wir Kunden weltweit bei der Optimierung ihrer Prozesse.'
                },
                {name: 'twitter:image', content: 'https://web-dienstleister.de/images/heros/hero-main.webp'},

                {name: 'msapplication-TileColor', content: '#27406b'},
                {name: 'theme-color', content: '#ffffff'}
            ],
            link: [
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'manifest', href: '/site.webmanifest'},
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#27406b'}
            ]
        }
    }
})
