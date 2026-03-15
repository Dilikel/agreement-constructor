<script setup lang="ts">
const footerItems: { name: string; to: string; icon: string }[] = [
	{
		name: 'Главная',
		to: '/',
		icon: '',
	},
	{
		name: 'Конструктор',
		to: '/constructor',
		icon: '',
	},
	{
		name: 'Личный кабинет',
		to: '/profile',
		icon: '',
	},
]
const currentYear: number = new Date().getFullYear()
</script>

<template>
	<footer class="s-footer">
		<div class="container">
			<NuxtLink class="s-footer-logo" to="/">Agreement Constructor</NuxtLink>
			<nav class="s-footer-list">
				<AMenuItem v-for="item in footerItems" :key="item.name" v-bind="item" />
			</nav>
			<p class="s-footer-rights">
				&copy; {{ currentYear }} Agreement Constructor. Все права защищены.
			</p>
		</div>
	</footer>
</template>

<style src="./SFooter.scss" lang="scss" scoped />
