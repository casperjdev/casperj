<script>
	import { scrollRef } from '$lib/scroll';
	import AboutIntro from '../atoms/AboutIntro.svelte';
	import AboutPrimary from '../atoms/AboutPrimary.svelte';
	import AboutSecondary from '../atoms/AboutSecondary.svelte';
	import AboutList from '../molecules/AboutList.svelte';
</script>

<section use:scrollRef={'About'} class="overflow-hidden px-12 py-12 flex flex-col gap-12">
	<AboutIntro />
	<AboutPrimary />
	<AboutList />
	<AboutSecondary />
</section>
