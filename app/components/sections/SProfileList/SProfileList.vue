<script setup>
const props = defineProps({
	items: Array,
	mode: String,
})
const emit = defineEmits(['change-mode'])
</script>

<template>
	<section class="s-profile-list">
		<div class="container">
			<div class="s-profile-list-action">
				<AButton
					name="Готовые документы"
					:active="mode === 'completed'"
					@click="emit('change-mode', 'completed')"
				/>
				<AButton
					name="Черновики"
					:active="mode === 'draft'"
					@click="emit('change-mode', 'draft')"
				/>
			</div>
			<MEmpty v-if="!items || items.length === 0" />
			<div class="s-profile-list-items" v-else>
				<MProfileCard
					v-for="(item, index) in items"
					:key="index"
					:item="item"
				/>
			</div>
		</div>
	</section>
</template>

<style src="./SProfileList.scss" lang="scss" scoped />
