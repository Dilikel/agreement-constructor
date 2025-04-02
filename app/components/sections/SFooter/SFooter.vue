<script setup>
const footerItems = [
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
</script>

<template>
	<footer class="s-footer">
		<div class="container">
			<NuxtLink class="s-footer-logo" to="/">Agreement Constructor</NuxtLink>
			<nav class="s-footer-list">
				<AMenuItem v-for="item in footerItems" :key="item.name" v-bind="item" />
			</nav>
			<p class="s-footer-rights">
				&copy; 2024 Agreement Constructor. Все права защищены.
			</p>
		</div>
	</footer>
</template>

<style src="./SFooter.scss" lang="scss" scoped />
