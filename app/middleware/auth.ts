import { useToast } from 'vue-toastification'

export default defineNuxtRouteMiddleware((to, from) => {
	const toast = useToast()
	const token = useCookie('token')

	if (!token.value && to.path === '/profile') {
		toast.error('Вы не авторизованы')
		return navigateTo('/login')
	}

	if ((to.path === '/login' || to.path === '/signup') && token.value) {
		return navigateTo('/')
	}
})
