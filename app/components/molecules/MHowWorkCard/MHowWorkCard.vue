<script setup>
defineProps({
	number: Number,
	title: String,
	text: String,
})
</script>

<template>
	<div class="m-how-work-card">
		<div class="m-how-work-card-number">
			{{ number }}
		</div>
		<h1>{{ title }}</h1>
		<p>{{ text }}</p>
	</div>
</template>

<style src="./MHowWorkCard.scss" lang="scss" scoped />
