<script lang="ts">
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['-translate-x-8', 'opacity-0'],
		onVisible: ['-translate-x-0', 'opacity-100']
	};
</script>

<ScrollObserver className="text-neutral-200 flex flex-col gap-12" {transition}>
	<h1 class="text-center text-neutral-200">My projects</h1>
	There are currently no projects here.
</ScrollObserver>
