<script setup>
const props = defineProps({
	modelValue: String,
	question: String,
	yesInputs: Array,
	noInputs: Array,
	formData: Object,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = value => {
	emit('update:modelValue', value)
}
</script>

<template>
	<div class="a-question">
		<h3>{{ question }}</h3>
		<div class="a-question-actions">
			<AButton
				name="Нет"
				:active="modelValue === 'no'"
				@click="updateValue('no')"
			/>
			<AButton
				name="Да"
				:active="modelValue === 'yes'"
				@click="updateValue('yes')"
			/>
		</div>

		<div v-if="modelValue === 'yes'">
			<AInput
				v-for="input in yesInputs"
				:key="input.model"
				v-model="formData[input.model]"
				:label="input.label"
				:placeholder="input.placeholder"
			/>
		</div>

		<div v-if="modelValue === 'no'">
			<AInput
				v-for="input in noInputs"
				:key="input.model"
				v-model="formData[input.model]"
				:label="input.label"
				:placeholder="input.placeholder"
			/>
		</div>
	</div>
</template>

<style src="./AQuestion.scss" lang="scss" scoped />
