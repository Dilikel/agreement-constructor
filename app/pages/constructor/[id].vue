<script setup>
import { useAuth } from '~/composables/useAuth'
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'
import { useAgreementStore } from '~/stores/agreement'
import { updateUser } from '~/utils/updateUser'
import { agreementConfig } from '~/config/agreementFields'

const { fetchUser } = useAuth()
const toast = useToast()
const userStore = useUserStore()
const agreementStore = useAgreementStore()
const route = useRoute()
const token = useCookie('token')
const agreementId = route.params.id
const user = computed(() => userStore.getUser)
const type = computed(() => agreementStore.agreement.type)
const config = computed(
	() => agreementConfig[type.value] || { inputs: [], questions: [] }
)
const options = [
	{ label: 'Юридическое лицо', value: 'person' },
	{ label: 'Индивидуальный предприниматель', value: 'ip' },
	{ label: 'Самозанятый гражданин', value: 'self-employed' },
	{ label: 'Физическое лицо', value: 'Individual' },
	{ label: 'Иностранный гражданин', value: 'foreigner' },
]
const formData = reactive({
	place: '',
	date: '',
})

function syncDraftToUserStore() {
	const index = user.value?.drafts?.findIndex(
		d => d.id === agreementStore.agreement.id
	)
	if (index !== -1) {
		user.value.drafts[index] = { ...agreementStore.agreement }
	}
}

async function getAgreement() {
	await fetchUser()
	const currentUser = user.value
	if (!currentUser?.id) {
		toast.error('Пользователь не найден')
		return
	}

	const allDocs = [
		...(currentUser.drafts || []),
		...(currentUser.agreements || []),
	]

	const targetAgreement = allDocs.find(item => item.id == agreementId)

	if (!targetAgreement) {
		toast.error('Документ не найден')
		return
	}

	agreementStore.setAgreement(targetAgreement)
	syncFormData()
}

function syncFormData() {
	Object.keys(formData).forEach(key => {
		if (key !== 'place' && key !== 'date') delete formData[key]
	})

	const storedData = agreementStore.agreement.data || {}
	const currentConfig = config.value

	currentConfig.inputs?.forEach(input => {
		formData[input.model] = storedData[input.model] ?? ''
	})

	formData.place = storedData.place ?? ''
	formData.date = storedData.date ?? ''

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
}

const changeType = async value => {
	agreementStore.changeType(value)
	syncFormData()

	if (token.value && user.value?.id) {
		syncDraftToUserStore()
		await updateUser(user.value, 'drafts', token.value)
	}
}

watch(type, syncFormData, { immediate: true })

watch(
	formData,
	newData => {
		Object.entries(newData).forEach(([key, value]) => {
			agreementStore.updateDataField(key, value)
		})
		syncDraftToUserStore()
		updateUser(user.value, 'drafts', token.value)
	},
	{ deep: true, immediate: true }
)

onMounted(async () => {
	await getAgreement()
})
</script>

<template>
	<main class="constructor animate__animated animate__fadeIn">
		<SConstructorForm
			:type="type"
			:form-data="formData"
			:config="config"
			:options="options"
			@change="changeType"
		/>
		<SAgreementPreview :user="user" :token="token" />
	</main>
</template>
