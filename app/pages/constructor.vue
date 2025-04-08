<script setup>
import { useAgreementStore } from '~/stores/agreement'
import { updateUser } from '~/utils/updateUser'
import { useUserStore } from '~/stores/user'
import { useAuth } from '~/composables/useAuth'

useHead({
	title: 'Конструктор публичной оферты',
})

const agreementStore = useAgreementStore()
const type = computed(() => agreementStore.agreement.type)
const token = useCookie('token')
const { fetchUser } = useAuth()
const user = computed(() => useUserStore().getUser)
const options = [
	{
		label: 'Юридическое лицо',
		value: 'person',
	},
	{
		label: 'Индивидуальный предприниматель',
		value: 'ip',
	},
	{
		label: 'Самозанятый гражданин',
		value: 'self-employed',
	},
	{
		label: 'Физическое лицо',
		value: 'Individual',
	},
	{
		label: 'Иностранный гражданин',
		value: 'foreigner',
	},
]

watch(agreementStore.agreement, () => {
	if (token.value && user.value?.id) {
		updateUser(user.value, 'drafts', token.value)
	}
})

const changeType = value => {
	agreementStore.changeType(value)
}

onMounted(() => {
	if (!agreementStore.agreement.id) {
		agreementStore.agreement.id = Math.floor(Math.random() * 1000000)
	}
	if (token.value) fetchUser()
})
</script>

<template>
	<main class="constructor animate__animated animate__fadeIn">
		<SConstructorForm :options="options" @change="changeType" :type="type" />
		<SAgreementPreview :user="user" :token="token" />
	</main>
</template>
