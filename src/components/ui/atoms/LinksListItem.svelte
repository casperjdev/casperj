<script lang="ts">
	import Icon from '../../../constants/icons/Icon.svelte';
	import type { IconLink } from '../../../constants/types/types';

	let { icon, label, href }: IconLink = $props();
</script>

<a
	{href}
	target="_blank"
	class="w-full flex lg:flex-col flex-row justify-center items-center lg:gap-2 text-neutral-300 translate-y-0 hover:translate-y-1 transition-transform duration-500 ease-smooth"
>
	<div class="lg:size-16 size-12 shrink-0 grid place-items-center p-2">
		<Icon name={icon} />
	</div>
	<div class="w-full h-4 text-[0.5rem] grid place-items-center">{label}</div>
</a>
