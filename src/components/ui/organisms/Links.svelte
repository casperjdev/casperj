<script>
	import { scrollRef } from '$lib/scroll';
	import LinksList from '../molecules/LinksList.svelte';
</script>

<section
	use:scrollRef={'Links'}
	class="overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-12 min-h-[calc(100dvh-3rem)]"
>
	<LinksList />
</section>
