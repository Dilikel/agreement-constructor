<script setup>
import { useAuth } from '~/composables/useAuth'
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'

definePageMeta({
	middleware: ['auth'],
})

useHead({
	title: 'Профиль',
})

const user = computed(() => useUserStore().getUser)
const { fetchUser } = useAuth()
const toast = useToast()
const token = useCookie('token')
const mode = ref('completed')
const items = ref([])

function getItems() {
	if (!user.value) return
	items.value =
		mode.value === 'completed' ? user.value.agreement : user.value.drafts
}

function logout() {
	useUserStore().logout()
	token.value = null
	toast.success('Вы успешно вышли из аккаунта!')
	navigateTo('/')
}

function changeMode(newMode) {
	mode.value = newMode
}

watch(mode, getItems)

onMounted(async () => {
	await fetchUser()
	getItems()
})
</script>

<template>
	<main class="profile animate__animated animate__fadeIn">
		<SProfileHeader :user="user" @exit="logout" />
		<SProfileList :items="items" :mode="mode" @change-mode="changeMode" />
	</main>
</template>
