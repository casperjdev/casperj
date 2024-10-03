<script lang="ts">
	import type { ScrollAnimationStyle } from '$lib/types';
	import ScrollObserver from '../../misc/ScrollObserver.svelte';

	const animation: ScrollAnimationStyle = {
		onHidden: ['translate-y-8', 'opacity-0'],
		onVisible: ['translate-y-0', 'opacity-100']
	};
</script>

<ScrollObserver
	className="xl:px-12 grid gap-12 place-items-center grid-flow-row lg:grid-flow-col"
	scrollAnimation={animation}>
	<span class="w-32 h-full min-h-32 [background-image:url('/author.png')]"></span>
	<h1 class="text-red-400 text-[clamp(0.5rem,2vw,1rem)]">
		I picked up programming 5 years ago and ever since then web development has been one of my main hobbies, which later
		turned into a career choice. Over that time period I've obtained a bunch of skills and picked up good coding habits.
	</h1>
</ScrollObserver>
