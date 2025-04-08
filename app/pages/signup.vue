<script setup>
import { useToast } from 'vue-toastification'
import { useUserStore } from '~/stores/user'

definePageMeta({
	middleware: ['auth'],
})

useHead({
	title: 'Регистрация',
})

const isLoading = ref(false)
const message = ref('')
const config = useRuntimeConfig()
const toast = useToast()
const userStore = useUserStore()
const token = useCookie('token', { maxAge: 60 * 60 * 24 * 30 })

const fields = [
	{
		id: 'email',
		type: 'email',
		label: 'Email',
		placeholder: 'Введите email',
	},
	{
		id: 'name',
		type: 'text',
		label: 'Имя',
		placeholder: 'Введите имя',
	},
	{
		id: 'password',
		type: 'password',
		label: 'Пароль',
		placeholder: 'Введите пароль',
	},
	{
		id: 'confirmPassword',
		type: 'password',
		label: 'Подтвердите пароль',
		placeholder: 'Введите пароль еще раз',
	},
]

async function registerUser(formData) {
	if (!formData.email || !formData.password || !formData.name) {
		toast.error('Заполните все поля!')
		return
	}
	if (formData.password !== formData.confirmPassword) {
		message.value = 'Пароли не совпадают'
		toast.error(message.value)
		return
	}

	isLoading.value = true
	message.value = ''

	await $fetch(`${config.public.API_URL}/register`, {
		method: 'POST',
		body: {
			email: formData.email,
			password: formData.password,
			name: formData.name,
			agreement: [],
			drafts: [],
		},
	})
		.then(response => {
			token.value = response.token
			userStore.setUser(response.data)
			toast.success('Вы успешно вошли в аккаунт!')
			navigateTo('/profile')
		})
		.catch(error => {
			message.value =
				error?.response?.data?.detail || 'Ошибка. Проверьте Email и пароль.'
			toast.error(message.value)
		})
		.finally(() => {
			isLoading.value = false
		})
}
</script>

<template>
	<main class="signup">
		<SForm
			title="Регистрация"
			text="Создайте новую учетную запись"
			:fields="fields"
			:isLoading="isLoading"
			:message="message"
			linkTitle="Уже есть аккаунт?"
			to="/login"
			linkText="Войти"
			@submit="registerUser"
			buttonText="Зарегистрироваться"
		/>
	</main>
</template>
