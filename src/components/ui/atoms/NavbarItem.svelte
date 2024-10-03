<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
	import { quintOut } from 'svelte/easing';

	let { ref }: { ref: string } = $props();
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<a
	use:scrollTo={{
		ref: ref,
		duration: 500,
		easing: quintOut,
		offset: -96,
		passive: false
	}}
	class="min-w-12 grid place-items-center cursor-pointer group">
	<div class="w-full grid place-items-center">
		<p
			class="w-full h-4 text-[50%] leading-4 text-neutral-300 group-hover:text-red-400 grid place-items-center select-none transition-all duration-.25s ease-smooth">
			{ref}
		</p>
		<span class="relative -bottom-1 w-0 group-hover:w-3/4 h-px bg-red-400 transition-all duration-.25s ease-smooth"
		></span>
	</div>
</a>
