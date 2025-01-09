<script lang="ts">
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['-translate-x-8', 'opacity-0'],
		onVisible: ['translate-x-0', 'opacity-100']
	};
</script>

<ScrollObserver {transition}>
	<h1 class="text-neutral-300 text-[clamp(1.25rem,6vw,3rem)]">
		My name is <b class="text-red-400">Kacper</b> and I am an aspiring web developer from Warsaw, Poland.
	</h1>
</ScrollObserver>
