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
					:active="mode === 'agreement'"
					@click="emit('change-mode', 'agreement')"
				/>
				<AButton
					name="Черновики"
					:active="mode === 'drafts'"
					@click="emit('change-mode', 'drafts')"
				/>
			</div>
			<MEmpty v-if="!items || items.length === 0" />
			<div class="s-profile-list-items" v-auto-animate v-else>
				<MProfileCard
					v-for="(item, index) in items"
					:key="index"
					:item="item"
					@delete="emit('delete', item.id)"
				/>
			</div>
		</div>
	</section>
</template>

<style src="./SProfileList.scss" lang="scss" scoped />
