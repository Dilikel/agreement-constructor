<script setup>
const props = defineProps({
	modelValue: String,
	question: String,
	type: {
		type: String,
		default: 'yes-no',
	},
	options: Array,
	yesInputs: Array,
	noInputs: Array,
	inputsByOption: Object,
	formData: Object,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = value => {
	emit('update:modelValue', value)
}
</script>

<template>
	<div class="m-question">
		<h3>{{ question }}</h3>

		<div v-if="type === 'yes-no'" class="m-question-actions">
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

		<div v-if="type === 'select'">
			<ASelect
				:options="options"
				:modelValue="modelValue"
				@change="updateValue(options.find(opt => opt.value === $event).value)"
			/>
		</div>

		<div v-if="type === 'yes-no' && modelValue === 'yes'">
			<AInput
				v-for="input in yesInputs"
				:key="input.model"
				v-model="formData[input.model]"
				:label="input.label"
				:placeholder="input.placeholder"
			/>
		</div>

		<div v-if="type === 'yes-no' && modelValue === 'no'">
			<AInput
				v-for="input in noInputs"
				:key="input.model"
				v-model="formData[input.model]"
				:label="input.label"
				:placeholder="input.placeholder"
			/>
		</div>

		<div
			v-if="
				type === 'select' &&
				modelValue &&
				inputsByOption &&
				inputsByOption[modelValue]
			"
			class="m-question-inputs"
		>
			<AInput
				v-for="input in inputsByOption[modelValue]"
				:key="input.model"
				v-model="formData[input.model]"
				:label="input.label"
				:placeholder="input.placeholder"
			/>
		</div>
	</div>
</template>

<style src="./MQuestion.scss" lang="scss" scoped />
