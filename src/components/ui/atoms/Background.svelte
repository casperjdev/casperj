<script lang="ts">
	let background: HTMLElement = null!;

	$effect(() => {
		const onScroll = () => {
			background.style.transform = `translateY(-${window.scrollY / 4}px)`;
		};
		onScroll();

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
	});
</script>

<span bind:this={background} class="bg-[url('/bg.png')] bg-repeat bg-center w-full h-[3000px] fixed -z-20"></span>
