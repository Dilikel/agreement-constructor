// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	srcDir: 'app/',
	serverDir: 'server/',
	modules: ['@nuxt/icon', '@pinia/nuxt'],
	components: [
		{
			path: '~/components/',
			pathPrefix: false,
			global: true,
			priority: 10,
		},
	],
	css: ['~/assets/styles/base/_index.scss'],
	ssr: true,
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
})
