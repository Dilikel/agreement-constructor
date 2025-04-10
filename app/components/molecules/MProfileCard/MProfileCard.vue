<script setup>
import { downloadAgreementPdf } from '~/utils/generatePdf'
import { useToast } from 'vue-toastification'
import { options } from '~/constans/options'

const props = defineProps({
	item: Object,
})
const toast = useToast()

const typeLabel = computed(() => {
	const match = options.find(opt => opt.value === props.item.type)
	return match?.label || 'Неизвестный тип'
})

const formattedDate = computed(() => {
	const date = new Date(props.item?.data?.date || Date.now())
	return date.toLocaleDateString('ru-RU')
})

function downloadPdf() {
	downloadAgreementPdf(props.item, toast)
}

const emit = defineEmits(['delete'])
</script>

<template>
	<div class="m-profile-card">
		<div
			class="m-profile-card__header"
			@click="navigateTo(`/constructor/${props.item.id}`)"
		>
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
			<AExitButton @click="emit('delete', props.id)">Удалить</AExitButton>
			<AButton @click="downloadPdf" name="Скачать PDF" :active="true" />
		</div>
	</div>
</template>

<style src="./MProfileCard.scss" scoped lang="scss" />
