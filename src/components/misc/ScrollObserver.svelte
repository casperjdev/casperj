<script lang="ts">
	import type { ScrollObserverProps } from '$lib/types';

	let { className, children, scrollAnimation }: ScrollObserverProps = $props();

	let item: HTMLElement = null!;

	$effect(() => {
		const onScroll = () => {
			let thresholdIn = item.offsetTop - window.innerHeight * 0.6;
			let thresholdOut = item.offsetTop - window.innerHeight;

			if (window.scrollY > thresholdIn) {
				item.classList.remove(...scrollAnimation.onHidden);
				item.classList.add(...scrollAnimation.onVisible);
			} else if (window.scrollY < thresholdOut) {
				item.classList.remove(...scrollAnimation.onVisible);
				item.classList.add(...scrollAnimation.onHidden);
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
	class={`${className} ${scrollAnimation.onHidden.join(' ')} transition-transform-opacity ease-smooth duration-500`}>
	{@render children()}
</article>
