// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	srcDir: 'app/',
	serverDir: 'server/',
	modules: [
		'@nuxt/icon',
		'@pinia/nuxt',
		'@nuxt/image',
		'@formkit/auto-animate/nuxt',
	],
	components: [
		{
			path: '~/components/',
			pathPrefix: false,
			global: true,
			priority: 10,
		},
	],
	css: ['~/assets/styles/base/_index.scss'],
	ssr: false,
	nitro: {
		preset: 'vercel-edge',
		publicAssets: [
			{
				dir: '../public',
				baseURL: '/',
			},
		],
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "~/assets/styles/helpers/_index.scss" as *;`,
				},
			},
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Конструктор публичных соглашений',
			// link: [
			// 	{
			// 		rel: 'icon',
			// 		type: 'image/png',
			// 		href: '/favicon.png',
			// 	},
			// ],
		},
	},
	runtimeConfig: {
		public: {
			API_URL: process.env.API_URL,
		},
	},
	icon: {
		customCollections: [
			{
				prefix: 'custom-icon',
				dir: 'public/images/icons',
			},
		],
	},
})
