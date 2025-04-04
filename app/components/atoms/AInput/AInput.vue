<script setup>
defineProps({
	label: String,
	placeholder: String,
})

const model = defineModel()
</script>

<template>
	<div class="a-input">
		<label for="input" class="a-input-label"
			><h3>{{ label }}</h3></label
		>
		<input v-model="model" class="a-input-input" :placeholder="placeholder" />
	</div>
</template>

<style src="./AInput.scss" lang="scss" scoped />
