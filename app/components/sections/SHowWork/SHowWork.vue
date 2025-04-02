<script setup>
const howWorks = [
	{
		number: 1,
		title: 'Выбор ситуаций',
		text: 'Определите ключевые моменты, которые должны быть отражены в соглашении',
	},
	{
		number: 2,
		title: 'Ответы на вопросы',
		text: 'Нажимайте на кнопки, чтобы выбрать подходящие варианты для вашего случая',
	},
	{
		number: 3,
		title: 'Создание соглашения',
		text: 'Конструктор формирует индивидуальное соглашение на основе ваших ответов',
	},
]
</script>

<template>
	<section class="s-how-work">
		<div class="container">
			<div class="s-how-work-text">
				<h1>Как это работает</h1>
				<p>
					Выберите подходящие ситуации для соглашения, а наш конструктор поможет
					создать индивидуальное соглашение.
				</p>
			</div>
			<div class="s-how-work-list">
				<MHowWorkCard
					v-for="howWork in howWorks"
					:key="howWork.title"
					v-bind="howWork"
				/>
			</div>
		</div>
	</section>
</template>

<style src="./SHowWork.scss" lang="scss" scoped />
