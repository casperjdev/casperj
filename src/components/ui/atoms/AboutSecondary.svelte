<script lang="ts">
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['scale-90', 'opacity-0'],
		onVisible: ['scale-100', 'opacity-100']
	};
</script>

<ScrollObserver {transition} className="xl:px-12">
	<div class="text-neutral-200 text-[clamp(0.5rem,2vw,1rem)]">
		I aim to create elegant and responsive websites for multiple purposes, like blogs and promotional pages.

		<b class="text-neutral-400 text-end">
			I also work with web apps involving data analysis using relational and non-relational databases.
		</b>
	</div>
</ScrollObserver>
