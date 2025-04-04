<script setup>
defineProps({
	active: Boolean,
	name: String,
})
</script>

<template>
	<button class="a-button" :class="{ 'a-button--active': active }">
		<p>{{ name }}</p>
	</button>
</template>

<style src="./AButton.scss" lang="scss" scoped />
