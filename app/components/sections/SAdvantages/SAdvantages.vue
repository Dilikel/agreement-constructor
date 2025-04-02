<script setup>
const advantages = [
	{
		title: 'Интуитивный формат «вопрос-ответ»',
		text: 'Выберите подходящие опции, отвечая на вопросы, и создайте соглашение, соответствующее вашим потребностям.',
		icon: 'head',
	},
	{
		title: 'Удобный интерфейс',
		text: 'Простота использования позволяет даже тем, кто не имеет юридического образования, создавать качественные документы.',
		icon: 'idea',
	},
	{
		title: 'Настройка и структурирование',
		text: 'Адаптируйте соглашения под конкретные случаи, сохраняя при этом их чёткую структуру и понятность.',
		icon: 'star',
	},
]
</script>

<template>
	<section class="s-advantages">
		<div class="container">
			<div class="s-advantages-text">
				<h1>Преимущества, которые имеют значение</h1>
				<p>
					Преимущества нашего генератора: удобный интерфейс, пошаговое
					руководство и создание юридически корректных соглашений под ваши
					нужды.
				</p>
			</div>
			<div class="s-advantages-list">
				<MAdvantagesCard
					v-for="advantage in advantages"
					:key="advantage.title"
					v-bind="advantage"
				/>
			</div>
		</div>
	</section>
</template>

<style src="./SAdvantages.scss" lang="scss" scoped />
