<script setup>
defineProps({ message: String })
</script>

<template>
	<div class="a-form-error animate__animated animate__fadeIn animate__fast">
		<Icon name="tdesign:error-circle-filled" class="a-form-error-icon" />
		<p>{{ message }}</p>
	</div>
</template>

<style src="./AFormError.scss" lang="scss" scoped />
