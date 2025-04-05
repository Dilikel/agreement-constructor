<script setup>
defineProps({
	label: String,
	placeholder: String,
	type: {
		type: String,
		default: 'text',
	},
})

const model = defineModel()
</script>

<template>
	<div class="a-input">
		<label for="input" class="a-input-label"
			><h3>{{ label }}</h3></label
		>
		<input
			v-model="model"
			class="a-input-input"
			:placeholder="placeholder"
			:type="type"
		/>
	</div>
</template>

<style src="./AInput.scss" lang="scss" scoped />
