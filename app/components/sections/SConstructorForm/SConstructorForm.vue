<script setup>
import { agreementConfig } from '~/config/agreementFields'
import { useAgreementStore } from '~/stores/agreement'

const agreementStore = useAgreementStore()
const props = defineProps({
	options: Array,
	type: String,
})
const emit = defineEmits(['change'])
const formData = reactive({
	place: '',
	date: '',
})

const config = computed(
	() => agreementConfig[props.type] || { inputs: [], questions: [] }
)

watch(
	() => props.type,
	() => {
		Object.keys(formData).forEach(key => delete formData[key])
		config.value.questions.forEach(q => {
			if (q.default) formData[q.model] = q.default
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
	},
	{ deep: true }
)
</script>

<template>
	<section class="s-constructor-form">
		<div class="container">
			<div class="s-constructor-form-title">
				<h1>Конструктор публичной оферты</h1>
				<h2>Заполните данные</h2>
			</div>

			<ASelect
				:options="options"
				label="Выберите статус лица, размещающего оферту"
				@change="emit('change', $event)"
			/>

			<div class="s-constructor-form-content">
				<AInput
					v-model="formData.place"
					label="Укажите место публикации"
					placeholder="г. Москва"
					required
				/>
				<AInput
					v-model="formData.date"
					label="Укажите дату"
					type="date"
					required
				/>

				<AInput
					v-for="input in config.inputs"
					:key="input.model"
					v-model="formData[input.model]"
					:label="input.label"
					:placeholder="input.placeholder"
				/>

				<MQuestion
					v-for="question in config.questions"
					:key="question.model"
					v-model="formData[question.model]"
					:question="question.question"
					:type="question.type || 'yes-no'"
					:options="question.options || []"
					:yesInputs="question.yesInputs || []"
					:noInputs="question.noInputs || []"
					:inputsByOption="question.inputsByOption || {}"
					:formData="formData"
					@update:modelValue="formData[question.model] = $event"
				/>
			</div>
		</div>
	</section>
</template>

<style src="./SConstructorForm.scss" lang="scss" scoped />
