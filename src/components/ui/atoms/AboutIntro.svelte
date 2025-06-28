<script lang="ts">
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['-translate-x-8', 'opacity-0'],
		onVisible: ['translate-x-0', 'opacity-100']
	};
</script>

<ScrollObserver {transition}>
	<h1 class="text-neutral-200 leading-normal xl:text-5xl lg:text-3xl md:text-xl text-base">
		My name is <b class="text-neutral-400">Kacper</b> and I am an aspiring web developer from Warsaw, Poland.
	</h1>
</ScrollObserver>
