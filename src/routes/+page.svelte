<script>
	import '../app.css';
	import Background from '../components/ui/atoms/Background.svelte';
	import About from '../components/ui/organisms/About.svelte';
	import Banner from '../components/ui/organisms/Banner.svelte';
	import Links from '../components/ui/organisms/Links.svelte';
	import Navbar from '../components/ui/organisms/Navbar.svelte';
	import Projects from '../components/ui/organisms/Projects.svelte';
</script>

<svelte:head>
	<title>CASPERJ | Kacper Jeznach</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
</svelte:head>

<Background />
<Banner />
<Navbar />
<main class="divide-y divide-dashed divide-neutral-400 flex flex-col gap-12">
	<About />
	<Projects />
	<Links />
</main>
