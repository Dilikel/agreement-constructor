<script setup>
defineProps({
	name: String,
	to: String,
	icon: String,
})
</script>

<template>
	<NuxtLink :to="to" class="a-menu-item">
		<Icon :name="icon" />
		{{ name }}
	</NuxtLink>
</template>

<style src="./AMenuItem.scss" lang="scss" scoped />
