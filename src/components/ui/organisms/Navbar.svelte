<script lang="ts">
	import NavbarItem from '../atoms/NavbarItem.svelte';

	const NavbarItems = ['About', 'Projects', 'Links'];
</script>

<nav
	class="bg-black/85 backdrop-blur-xs border-b-2 border-b-white w-full h-12 flex flex-row justify-center sticky self-start top-0 z-50"
>
	{#each NavbarItems as ref}
		<NavbarItem {ref} />
	{/each}
</nav>
