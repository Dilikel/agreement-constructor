<script setup>
defineProps({
	id: String,
	type: String,
	placeholder: String,
	modelValue: String,
	label: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
	<div class="a-form-field">
		<label for="id" class="a-form-field-label"
			><h3>{{ label }}</h3></label
		>
		<input
			class="a-form-field-input"
			:id="id"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="event => emit('update:modelValue', event.target.value)"
			required
		/>
	</div>
</template>

<style src="./AFormField.scss" lang="scss" scoped />
