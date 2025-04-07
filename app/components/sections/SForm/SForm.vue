<script setup>
defineProps({
	title: String,
	text: String,
	fields: Array,
	isLoading: Boolean,
	message: String,
	linkTitle: String,
	to: String,
	linkText: String,
	buttonText: String,
})
const emit = defineEmits(['submit'])
</script>

<template>
	<section class="s-form animate__animated animate__fadeIn">
		<div class="s-form-content">
			<h2>{{ title }}</h2>
			<p>{{ text }}</p>
			<MFormFields
				:fields="fields"
				:isLoading="isLoading"
				:buttonText="buttonText"
				@submit="formData => emit('submit', formData)"
			/>
			<MAccountPrompt :linkTitle="linkTitle" :to="to" :linkText="linkText" />
			<AFormError v-if="message" :message="message" />
		</div>
	</section>
</template>

<style src="./SForm.scss" lang="scss" scoped />
