<script lang="ts">
	import type { ScrollAnimationStyle } from '$lib/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const animation: ScrollAnimationStyle = {
		onHidden: ['-translate-x-8', 'opacity-0'],
		onVisible: ['-translate-x-0', 'opacity-100']
	};
</script>

<ScrollObserver className="text-neutral-300 flex flex-col gap-12" scrollAnimation={animation}>
	<h1 class="text-center text-neutral-300">My projects</h1>
	There are currently no projects here.
</ScrollObserver>
