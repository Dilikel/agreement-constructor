<script setup>
defineProps({
	user: Object,
})
const emit = defineEmits(['exit'])
</script>

<template>
	<section class="s-profile-header">
		<div class="container">
			<div class="s-profile-header-user">
				<h2>{{ user.name }}</h2>
				<p>{{ user.email }}</p>
			</div>
			<div class="s-profile-header-action">
				<AExitButton @click="emit('exit')">Выйти</AExitButton>
			</div>
		</div>
	</section>
</template>

<style src="./SProfileHeader.scss" lang="scss" scoped />
