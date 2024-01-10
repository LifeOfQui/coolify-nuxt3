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

                {name: 'msapplication-TileColor', content: '#27406b'},
                {name: 'theme-color', content: '#ffffff'}
            ],
            link: [
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}
            ]
        }
    }
})
