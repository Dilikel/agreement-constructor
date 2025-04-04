<script setup>
defineProps({
	options: Array,
	type: String,
})
const emit = defineEmits(['change'])
</script>

<template>
	<section class="s-constructor-form">
		<div class="container">
			<div class="s-constructor-form-title">
				<h1>Конструктор публичной оферты</h1>
				<h2>Заполните данные</h2>
			</div>
			<ASelect
				:options="options"
				label="Выберите статус лица, размещающего оферту"
				@change="emit('change', $event)"
			/>
			<div class="s-constructor-form-content" v-if="type === 'person'">
				<div>
					<h3>Указать, кто действует от имени юридического лица:</h3>
					<div class="s-constructor-form-content-action">
						<AButton name="Нет" />
						<AButton name="Да" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style src="./SConstructorForm.scss" lang="scss" scoped />
