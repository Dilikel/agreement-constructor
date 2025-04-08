<script setup>
defineProps({
	name: String,
	to: String,
})
</script>

<template>
	<NuxtLink class="a-link-button" :to="to"
		><p>{{ name }}</p>
	</NuxtLink>
</template>

<style src="./ALinkButton.scss" lang="scss" scoped />
