<script>
	import '../app.css';
	import Background from '../components/ui/atoms/Background.svelte';
	import About from '../components/ui/organisms/About.svelte';
	import Banner from '../components/ui/organisms/Banner.svelte';
	import Links from '../components/ui/organisms/Links.svelte';
	import Navbar from '../components/ui/organisms/Navbar.svelte';
	import Projects from '../components/ui/organisms/Projects.svelte';
</script>

<Background />
<Banner />
<Navbar />
<main class="divide-y divide-dashed divide-neutral-400">
	<About />
	<Projects />
	<Links />
</main>
