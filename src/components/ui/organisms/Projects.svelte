<script>
	import { scrollRef } from '$lib/utils/scroll';

	import ProjectsList from '../molecules/ProjectsList.svelte';
</script>

<section use:scrollRef={'Projects'} class="overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-12">
	<ProjectsList />
</section>
