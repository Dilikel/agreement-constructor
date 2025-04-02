<script setup>
defineProps({
	title: String,
	text: String,
	icon: String,
})
</script>

<template>
	<div class="m-advantages-card">
		<Icon :name="`custom-icon:${icon}`" class="m-advantages-card-icon" />
		<div class="m-advantages-card-text">
			<h3>{{ title }}</h3>
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<style src="./MAdvantagesCard.scss" lang="scss" scoped />
