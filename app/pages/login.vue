<script setup>
definePageMeta({
	middleware: ['auth'],
})

useHead({
	title: 'Вход',
})
</script>

<template>
	<main>
		<SLogin />
	</main>
</template>
