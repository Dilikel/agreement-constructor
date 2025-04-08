<script setup>
const props = defineProps({
	items: Array,
	mode: String,
})
const emit = defineEmits(['change-mode'], ['delete'])
</script>

<template>
	<section class="s-profile-list">
		<div class="container" v-auto-animate>
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
			<MEmpty v-if="!items || items.length === 0" v-auto-animate />
			<div class="s-profile-list-items" v-auto-animate v-else>
				<MProfileCard
					v-for="(item, index) in items"
					:key="index"
					:item="item"
					@delete="emit('delete', item)"
				/>
			</div>
		</div>
	</section>
</template>

<style src="./SProfileList.scss" lang="scss" scoped />
