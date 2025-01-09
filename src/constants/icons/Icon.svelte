<script lang="ts">
	import { icons } from './icons';

	let { name } = $props();

	let displayIcon = icons.find((e) => e.name === name)!;
</script>

{@html displayIcon.path}
