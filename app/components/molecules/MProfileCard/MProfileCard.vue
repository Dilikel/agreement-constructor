<script setup>
import { computed } from 'vue'
import { downloadAgreementPdf } from '~/utils/generatePdf'
import { useToast } from 'vue-toastification'

const props = defineProps({
	item: Object,
})
const toast = useToast()

const typeLabels = {
	person: 'Юридическое лицо',
	ip: 'Индивидуальный предприниматель',
	'self-employed': 'Самозанятый',
	Individual: 'Физическое лицо',
	foreigner: 'Иностранец',
}

const typeLabel = computed(() => {
	return typeLabels[props.item.type] || 'Неизвестный тип'
})

const formattedDate = computed(() => {
	const date = new Date(props.item?.data?.date || Date.now())
	return date.toLocaleDateString('ru-RU')
})

function downloadPdf() {
	downloadAgreementPdf(props.item, toast)
}
</script>

<template>
	<div class="m-profile-card">
		<div class="m-profile-card__header">
			<h3>
				{{
					props.item.data.organizationName || 'Вы не ввели название организации'
				}}
			</h3>
			<p class="date">Дата публикации: {{ formattedDate }}</p>
		</div>
		<div class="m-profile-card__body">
			<p><strong>Тип:</strong> {{ typeLabel }}</p>
		</div>
		<div class="m-profile-card__footer">
			<AExitButton>Удалить</AExitButton>
			<AButton @click="downloadPdf" name="Скачать PDF" :active="true" />
		</div>
	</div>
</template>

<style src="./MProfileCard.scss" scoped lang="scss" />
