<script lang="ts">
	import { AboutListItems } from '../../../constants/objects/AboutListItems';
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';
	import AboutListItem from '../atoms/AboutListItem.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['-translate-y-8', 'opacity-0'],
		onVisible: ['-translate-y-0', 'opacity-100']
	};
</script>

<ScrollObserver {transition} className="flex flex-col gap-12">
	<h1 class="text-center text-neutral-200">What i use:</h1>
	<div
		class="xl:flex xl:flex-row md:grid-cols-3 md:grid-rows-2 grid justify-around place-items-center grid-cols-[4rem_4rem] grid-rows-3 gap-y-8"
	>
		{#each AboutListItems as item}
			<AboutListItem {...item} />
		{/each}
	</div>
</ScrollObserver>
