<script lang="ts">
	import { LinksListItems } from '../../../constants/objects/LinksListItems';
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';
	import LinksListItem from '../atoms/LinksListItem.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['translate-x-8', 'opacity-0'],
		onVisible: ['translate-x-0', 'opacity-100']
	};
</script>

<ScrollObserver {transition} className="my-auto flex flex-col items-center lg:gap-12 gap-4">
	<h1 class="text-center text-neutral-300">Let's Connect!</h1>
	<div class="lg:w-full w-max flex lg:flex-row flex-col justify-center items-center lg:gap-12">
		{#each LinksListItems as item}
			<LinksListItem {...item} />
		{/each}
	</div>
</ScrollObserver>
