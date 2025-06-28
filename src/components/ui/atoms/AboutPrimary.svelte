<script lang="ts">
	import type { ScrollObserverTransition } from '../../../constants/types/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const transition: ScrollObserverTransition = {
		onHidden: ['translate-y-8', 'opacity-0'],
		onVisible: ['translate-y-0', 'opacity-100']
	};
</script>

<ScrollObserver className="xl:px-12 grid gap-12 place-items-center grid-flow-row lg:grid-flow-col" {transition}>
	<img class="w-32 h-full min-h-32 object-center object-cover" src="/author.jpg" alt="Author" />
	<h1 class="text-neutral-400 leading-normal xl:text-base md:text-xs text-[0.5rem]">
		I picked up programming 5 years ago and ever since then web development has been one of my main hobbies, which later
		turned into a career choice. Over that time period I've obtained a bunch of skills and picked up good coding habits.
	</h1>
</ScrollObserver>
