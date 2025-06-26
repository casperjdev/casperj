<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '../../../constants/icons/Icon.svelte';

	let scrollIndicator: HTMLElement = null!;
	let textContainer: HTMLElement = null!;

	$effect(() => {
		if (textContainer) {
			textContainer.style.width = `${textContainer.scrollWidth}px`;
			setTimeout(() => {
				textContainer.style.width = 'max-content';
			}, 500);
		}

		function onScroll() {
			scrollIndicator.style.opacity = window.scrollY > window.innerHeight / 2 ? '0' : '1';
		}
		onScroll();

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
	});
</script>

<main class="w-full h-[calc(100svh-3rem)] bg-banner backdrop-blur-xs overflow-hidden z-10">
	<div class="w-full h-full max-w-8xl mx-auto flex flex-row justify-start items-center">
		<div class="pattern-[-45deg] text-ptrn-fg border-x border-current md:w-6 w-3 h-full shrink-0"></div>
		<div
			bind:this={textContainer}
			class="w-0 transition-all ease-smooth duration-500 overflow-hidden
    before:h-3 md:before:h-6 before:left-0 before:w-full md:before:-translate-y-5.75 before:-translate-y-2.75 before:absolute before:pattern-[-45deg] before:text-ptrn-fg before:border-y before:border-current
    after:h-3 md:after:h-6 after:left-0 after:w-full after:absolute after:pattern-[-45deg] after:text-ptrn-fg after:border-y after:border-current
    "
		>
			<div
				class="w-max h-[clamp(1.5rem,15vw,7.5rem)] -mt-[clamp(0.15rem,2vw,1rem)] text-neutral-200 text-[clamp(1rem,10vw,5rem)] whitespace-nowrap tracking-widest"
			>
				<div class="opacity-5 overflow-hidden">
					casper<b class="text-neutral-400 -mr-[clamp(1.2px,1vw,0.5rem)]">j</b>
				</div>
				<div class="-translate-y-[clamp(1.5rem,15vw,7.5rem)] overflow-hidden animate-banner-delayed w-0">
					casper<b class="text-neutral-400 -mr-[clamp(1.2px,1vw,0.5rem)]">j</b>
				</div>
			</div>
			<div
				class="w-max h-[clamp(0.375rem,3.75vw,1.875rem)] text-neutral-400 text-[clamp(0.25rem,2.5vw,1.25rem)] whitespace-nowrap tracking-[0.125rem]"
			>
				<div class="opacity-5 overflow-hidden">Kacper Jeznach</div>
				<div class="-translate-y-[clamp(0.375rem,3.75vw,1.875rem)] overflow-hidden animate-banner-delayed w-0">
					Kacper Jeznach
				</div>
			</div>
		</div>
		<div class="pattern-[-45deg] text-ptrn-fg border-x border-current md:w-6 w-3 h-full shrink-0"></div>
	</div>
	<div
		bind:this={scrollIndicator}
		class="text-neutral-400 size-6 absolute right-0 left-0 m-auto bottom-12 animate-banner-scroll-indicator transition-opacity ease-smooth duration-500"
	>
		<p class="flex justify-center text-[0.5rem] text-nowrap">scroll down</p>
		<Icon name="chevron-down" />
	</div>
</main>
