<script setup>
defineProps({
	linkTitle: String,
	to: String,
	linkText: String,
})
</script>

<template>
	<div class="m-account-prompt">
		<p class="m-account-prompt-text">
			{{ linkTitle }}
			<NuxtLink :to="to" class="m-account-prompt-link">{{ linkText }}</NuxtLink>
		</p>
	</div>
</template>

<style src="./MAccountPrompt.scss" lang="scss" scoped />
