<script setup>
import 'hamburgers/dist/hamburgers.min.css'

const isMenuOpen = ref(false)
const headerItems = [
	{
		name: 'Главная',
		to: '/',
		icon: 'mdi:home-variant',
	},
	{
		name: 'Конструктор',
		to: '/constructor',
		icon: 'mdi:clipboard-edit',
	},
	{
		name: 'Личный кабинет',
		to: '/profile',
		icon: 'mdi:account-circle',
	},
]
</script>

<template>
	<header class="s-header">
		<div class="container">
			<NuxtLink class="s-header-logo" to="/">Agreement Constructor</NuxtLink>
			<nav class="s-header-list">
				<AMenuItem v-for="item in headerItems" :key="item.name" v-bind="item" />
			</nav>
			<button
				class="hamburger hamburger--slider"
				:class="{ 'is-active': isMenuOpen }"
				@click="isMenuOpen = !isMenuOpen"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</div>
	</header>

	<div
		class="s-mobile-menu-overflow"
		@click="isMenuOpen = false"
		:class="{ open: isMenuOpen }"
	></div>

	<div class="s-mobile-menu" :class="{ open: isMenuOpen }">
		<div class="s-mobile-menu-header">
			<h2>Меню</h2>
			<Icon name="ci:close-lg" @click="isMenuOpen = false" />
		</div>
		<div class="s-mobile-menu-list">
			<AMenuItem v-for="item in headerItems" :key="item.name" v-bind="item" />
		</div>
	</div>
</template>

<style src="./SHeader.scss" lang="scss" scoped />
