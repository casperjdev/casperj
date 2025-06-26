<script lang="ts">
	import Icon from '../../../constants/icons/Icon.svelte';
	import type { IconLink } from '../../../constants/types/types';

	let { icon, label, href }: IconLink = $props();
</script>

<a
	{href}
	target="_blank"
	class="w-full grid place-items-center gap-2 text-neutral-200 translate-y-0 hover:translate-y-1 transition-transform duration-500 ease-smooth"
>
	<div class="w-16 h-16 grid place-items-center p-2">
		<Icon name={icon} />
	</div>
	<div class="w-full h-4 text-[0.5rem] grid place-items-center">{label}</div>
</a>
