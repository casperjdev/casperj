<script lang="ts">
	import type { ScrollObservertransition } from '$lib/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObservertransition = {
		onHidden: ['-translate-x-8', 'opacity-0'],
		onVisible: ['-translate-x-0', 'opacity-100']
	};
</script>

<ScrollObserver className="text-neutral-300 flex flex-col gap-12" {transition}>
	<h1 class="text-center text-neutral-300">My projects</h1>
	There are currently no projects here.
</ScrollObserver>
