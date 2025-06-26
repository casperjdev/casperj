<script lang="ts">
	import NavbarItem from '../atoms/NavbarItem.svelte';

	const NavbarItems = ['About', 'Projects', 'Links'];
</script>

<nav
	class="bg-black w-full h-12 flex flex-row justify-center sticky self-start top-0 z-200 shadow-[0px_0px_32px_32px] shadow-black"
>
	{#each NavbarItems as ref}
		<NavbarItem {ref} />
	{/each}
</nav>
