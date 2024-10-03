<script lang="ts">
	import { AboutIconsItems } from '$lib/objects/AboutIconsItems';
	import type { ScrollAnimationStyle } from '$lib/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';
	import AboutIcon from '../atoms/AboutIcon.svelte';

	const animation: ScrollAnimationStyle = {
		onHidden: ['-translate-y-8', 'opacity-0'],
		onVisible: ['-translate-y-0', 'opacity-100']
	};
</script>

<ScrollObserver scrollAnimation={animation} className="flex flex-col gap-12">
	<h1 class="text-center text-neutral-300">What i use:</h1>
	<div
		class="xl:flex xl:flex-row md:grid-cols-3 md:grid-rows-2 grid justify-around place-items-center grid-cols-[4rem_4rem] grid-rows-3 gap-y-8">
		{#each AboutIconsItems as item}
			<AboutIcon {...item} />
		{/each}
	</div>
</ScrollObserver>
