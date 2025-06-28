<script lang="ts">
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
				class="w-max relative text-neutral-200 leading-normal xl:text-7xl lg:text-5xl md:text-3xl text-xl whitespace-nowrap tracking-widest"
			>
				<div class="opacity-5 overflow-hidden">
					casper<b class="text-neutral-400">j</b>
				</div>
				<div class="overflow-hidden animate-banner-delayed w-0 absolute top-0">
					casper<b class="text-neutral-400">j</b>
				</div>
			</div>
			<div
				class="w-max relative text-neutral-400 xl:text-lg lg:text-base md:text-sm text-xs whitespace-nowrap tracking-[0.125rem]"
			>
				<div class="opacity-5 overflow-hidden">Kacper Jeznach</div>
				<div class="overflow-hidden animate-banner-delayed w-0 absolute top-0">Kacper Jeznach</div>
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
