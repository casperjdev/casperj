<script lang="ts">
	import type { ScrollObserverTransition } from '$lib/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['scale-90', 'opacity-0'],
		onVisible: ['scale-100', 'opacity-100']
	};
</script>

<ScrollObserver {transition} className="xl:px-12">
	<h1 class="text-neutral-300 text-[clamp(0.5rem,2vw,1rem)]">
		I aim to create elegant and responsive websites for multiple purposes, like blogs and promotional pages.
	</h1>
	<br />
	<h1 class="text-red-400 text-[clamp(0.5rem,2vw,1rem)]">
		I also work with web apps involving data analysis using relational and non-relational databases.
	</h1>
</ScrollObserver>
