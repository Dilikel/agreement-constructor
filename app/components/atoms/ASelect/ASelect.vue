<script setup>
defineProps({
	options: Array,
	label: String,
})
const emit = defineEmits(['change'])
</script>

<template>
	<div class="a-select">
		<label for="select" class="a-select-label"
			><h3>{{ label }}</h3></label
		>
		<select
			class="a-select-input"
			@change="event => emit('change', event.target.value)"
		>
			<option v-for="opt in options" :key="opt.value" :value="opt.value">
				{{ opt.label }}
			</option>
		</select>
	</div>
</template>

<style src="./ASelect.scss" lang="scss" scoped />
