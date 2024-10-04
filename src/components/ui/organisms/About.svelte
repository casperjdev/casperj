<script>
	import { scrollRef } from '$lib/utils/scroll';
	import AboutIntro from '../atoms/AboutIntro.svelte';
	import AboutPrimary from '../atoms/AboutPrimary.svelte';
	import AboutSecondary from '../atoms/AboutSecondary.svelte';
	import AboutIcons from '../molecules/AboutIcons.svelte';
</script>

<section use:scrollRef={'About'} class="overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-12">
	<AboutIntro />
	<AboutPrimary />
	<AboutIcons />
	<AboutSecondary />
</section>
