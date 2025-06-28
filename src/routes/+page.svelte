<script>
	import '../app.css';
	import About from '../components/ui/organisms/About.svelte';
	import Banner from '../components/ui/organisms/Banner.svelte';
	import Links from '../components/ui/organisms/Links.svelte';
	import Navbar from '../components/ui/organisms/Navbar.svelte';
	import Projects from '../components/ui/organisms/Projects.svelte';

	$effect(() => {
		function onScroll() {
			if (document.documentElement) {
				document.documentElement.style.backgroundPositionY = `${window.scrollY * 0.9}px`;
			}
		}
		onScroll();

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
	});
</script>

<svelte:head>
	<title>CASPERJ | Kacper Jeznach</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
</svelte:head>

<Banner />
<Navbar />
<main class="flex flex-row w-full max-w-8xl mx-auto h-full">
	<div class="pattern-[-45deg] text-ptrn-fg border-x border-current w-6 shrink-0 lg:block hidden"></div>
	<div class="divide-y divide-dashed flex-auto divide-neutral-400">
		<About />
		<Projects />
		<Links />
	</div>
	<div class="pattern-[-45deg] text-ptrn-fg border-x border-current w-6 shrink-0 lg:block hidden"></div>
</main>
