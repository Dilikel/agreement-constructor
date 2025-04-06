<script setup>
import { useAgreementStore } from '~/stores/agreement'

useHead({
	title: 'Конструктор публичной оферты',
})

const agreementStore = useAgreementStore()
const type = computed(() => agreementStore.agreement.type)
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

const changeType = value => {
	agreementStore.changeType(value)
}
</script>

<template>
	<main class="constructor animate__animated animate__fadeIn">
		<SConstructorForm :options="options" @change="changeType" :type="type" />
		<SAgreementPreview />
	</main>
</template>
