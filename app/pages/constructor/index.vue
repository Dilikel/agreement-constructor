<script setup>
import { useAgreementStore } from '~/stores/agreement'
import { updateUser } from '~/utils/updateUser'
import { useUserStore } from '~/stores/user'
import { useAuth } from '~/composables/useAuth'
import { agreementConfig } from '~/config/agreementFields'
import { options } from '~/constans/options'

useHead({ title: 'Конструктор публичной оферты' })

const agreementStore = useAgreementStore()
agreementStore.resetAgreement()

const token = useCookie('token')
const { fetchUser } = useAuth()
const user = computed(() => useUserStore().getUser)
const type = computed(() => agreementStore.agreement.type)

const formData = reactive({
	place: '',
	date: '',
})

const config = computed(
	() => agreementConfig[type.value] || { inputs: [], questions: [] }
)

watch(
	type,
	() => {
		Object.keys(formData).forEach(key => {
			if (key !== 'place' && key !== 'date') delete formData[key]
		})
		const storedData = agreementStore.agreement.data || {}
		const currentConfig = config.value

		currentConfig.inputs?.forEach(input => {
			formData[input.model] = storedData[input.model] ?? ''
		})

		formData.place ??= storedData.place ?? ''
		formData.date ??= storedData.date ?? ''

		currentConfig.questions?.forEach(q => {
			formData[q.model] = storedData[q.model] ?? q.default ?? ''
			q.yesInputs?.forEach(input => {
				formData[input.model] = storedData[input.model] ?? ''
			})
			q.noInputs?.forEach(input => {
				formData[input.model] = storedData[input.model] ?? ''
			})
			if (q.inputsByOption) {
				Object.values(q.inputsByOption)
					.flat()
					.forEach(input => {
						formData[input.model] = storedData[input.model] ?? ''
					})
			}
		})
	},
	{ immediate: true }
)

watch(
	formData,
	newData => {
		Object.entries(newData).forEach(([key, value]) => {
			agreementStore.updateDataField(key, value)
		})
		updateUser(user.value, 'drafts', token.value)
	},
	{ deep: true }
)

const changeType = value => {
	agreementStore.changeType(value)
}

onMounted(() => {
	if (!agreementStore.agreement.id) {
		agreementStore.agreement.id =
			typeof crypto !== 'undefined' && crypto.randomUUID
				? crypto.randomUUID()
				: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`
	}
	if (token.value) fetchUser()
})
</script>

<template>
	<main class="constructor animate__animated animate__fadeIn">
		<SConstructorForm
			v-if="type && config && options"
			:options="options"
			:type="type"
			:form-data="formData"
			:config="config"
			@change="changeType"
		/>
		<SAgreementPreview :user="user" />
	</main>
</template>
