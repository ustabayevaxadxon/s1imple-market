export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'Marketplace',
            meta: [
                {
                    name: 'description',
                    content: 'Everything about MarketPlace'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    }
})