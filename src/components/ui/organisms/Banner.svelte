<script lang="ts">
	import Icon from '../../../constants/icons/Icon.svelte';

	let scrollIndicator: HTMLElement = null!;

	$effect(() => {
		const onScroll = () => (scrollIndicator.style.opacity = window.scrollY > window.innerHeight / 2 ? '0' : '1');
		onScroll();

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
	});
</script>

<main
	class="w-full h-[calc(100svh-3rem+2px)] flex flex-col justify-center items-start gap-1 px-[10vw] bg-banner bg-opacity-85 backdrop-blur-sm overflow-hidden z-10"
>
	<div
		class="w-max h-[clamp(1.5rem,15vw,7.5rem)] text-neutral-300 text-[clamp(1rem,10vw,5rem)] whitespace-nowrap tracking-widest"
	>
		<div class="opacity-5 overflow-hidden animate-banner">
			casper<b class="text-red-400">j</b>
		</div>
		<div class="-translate-y-[clamp(1.5rem,15vw,7.5rem)] overflow-hidden animate-bannerDelayed">
			casper<b class="text-red-400">j</b>
		</div>
	</div>
	<div
		class="w-max h-[clamp(0.375rem,3.75vw,1.875rem)] text-red-400 text-[clamp(0.25rem,2.5vw,1.25rem)] whitespace-nowrap tracking-[0.125rem]"
	>
		<div class="opacity-5 overflow-hidden animate-banner">Kacper Jeznach</div>
		<div class="-translate-y-[clamp(0.375rem,3.75vw,1.875rem)] overflow-hidden animate-bannerDelayed">
			Kacper Jeznach
		</div>
	</div>
	<div
		bind:this={scrollIndicator}
		class="text-red-400 size-6 absolute right-0 left-0 m-auto bottom-12 animate-bannerScrollIndicator transition-opacity ease-smooth duration-500"
	>
		<p class="flex justify-center text-[0.5rem] text-nowrap">scroll down</p>
		<Icon name="chevron-down" />
	</div>
</main>
