<script setup>
import { useAgreementStore } from '~/stores/agreement'
import { useToast } from 'vue-toastification'
import { getAgreementPdfBlob } from '~/utils/generatePdf'

const agreementStore = useAgreementStore()
const toast = useToast()
const downloadMode = ref('docx')
const iframeSrc = ref('')

function updatePreview() {
	const rawData = toRaw(agreementStore.agreement)
	getAgreementPdfBlob(rawData, blob => {
		iframeSrc.value = URL.createObjectURL(blob)
	})
}

watch(
	() => agreementStore.agreement.data,
	() => updatePreview(),
	{ deep: true, immediate: true }
)

function downloadDoc() {
	const rawData = toRaw(agreementStore.agreement)
	if (!rawData.data.place || !rawData.data.date) {
		toast.error('Заполните обязательные поля')
		return
	}

	downloadMode.value === 'docx'
		? toast.info('Пока не реализовано')
		: downloadAgreementPdf(rawData, toast)
}
</script>

<template>
	<div class="s-agreement-preview">
		<div class="container">
			<h1>Предпросмотр документа</h1>
			<div class="s-agreement-preview-pdf-preview">
				<iframe
					v-if="iframeSrc"
					:src="iframeSrc"
					class="s-agreement-preview-pdf-preview-iframe"
				/>
			</div>
			<div class="s-agreement-preview-buttons">
				<h2>Выберите формат документа</h2>
				<div class="s-agreement-preview-buttons-mode">
					<AButton
						name="docx"
						:active="downloadMode === 'docx'"
						@click="downloadMode = 'docx'"
					/>
					<AButton
						name="pdf"
						:active="downloadMode === 'pdf'"
						@click="downloadMode = 'pdf'"
					/>
				</div>
				<AButton name="Скачать" @click="downloadDoc" :active="true" />
			</div>
		</div>
	</div>
</template>

<style src="./SAgreementPreview.scss" lang="scss" scoped />
