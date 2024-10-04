<script lang="ts">
	import NavbarItem from '../atoms/NavbarItem.svelte';

	const NavbarItems = ['About', 'Projects', 'Links'];
</script>

<nav
	class="bg-black bg-opacity-85 backdrop-blur-sm border-b-2 border-b-white w-full h-12 flex flex-row justify-center sticky self-start top-0 z-50"
>
	{#each NavbarItems as ref}
		<NavbarItem {ref} />
	{/each}
</nav>
