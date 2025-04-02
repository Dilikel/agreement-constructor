import { defineNuxtPlugin } from '#app'
import * as Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(Toast.default, {
		position: Toast.POSITION.TOP_RIGHT,
		timeout: 3000,
		closeOnClick: true,
		pauseOnHover: false,
	})
})
