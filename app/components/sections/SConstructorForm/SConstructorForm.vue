<script setup>
defineProps({
	options: Array,
	type: String,
	formData: Object,
	config: Object,
})
const emit = defineEmits(['change'])
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
					placeholder="город N"
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
