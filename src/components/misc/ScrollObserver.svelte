<script lang="ts">
	import type { ScrollObserverProps } from '../../constants/types/types';

	let { className, children, transition }: ScrollObserverProps = $props();

	let item: HTMLElement = null!;
	let currentState: string = $state.raw('');

	$effect(() => {
		const onScroll = () => {
			let thresholdIn = item.offsetTop - window.innerHeight * 0.6;
			let thresholdOut = item.offsetTop - window.innerHeight;

			if (window.scrollY > thresholdIn) {
				currentState = transition.onVisible.join(' ');
			} else if (window.scrollY < thresholdOut) {
				currentState = transition.onHidden.join(' ');
			}
		};
		onScroll();

		['scroll', 'resize'].forEach(function (e) {
			window.removeEventListener(e, onScroll);
			window.addEventListener(e, onScroll, { passive: true });
		});
	});
</script>

<article
	bind:this={item}
	class={`${className ? className : ''} ${currentState} transition-transform-opacity ease-smooth duration-500`.trim()}
>
	{@render children()}
</article>
