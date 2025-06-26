import { quintOut } from 'svelte/easing';

const scrollTargets = new Map();

export const scrollRef = (node: HTMLElement, targetName: string) => {
	scrollTargets.set(targetName, node);

	return {
		destroy() {
			scrollTargets.delete(targetName);
		}
	};
};

export const scrollTo = (node: HTMLElement, targetName: string, duration = 500) => {
	let animation: number;
	let isAnimating = false;

	const handleClick = (event: Event) => {
		event.preventDefault();
		if (isAnimating) return;

		const targetElement: HTMLElement = scrollTargets.get(targetName);
		const startY = window.scrollY;
		const targetY = targetElement.getBoundingClientRect().top + startY - 96; // Navbar Offset;
		const startTime = performance.now();

		const animateScroll = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const easingFactor = quintOut(Math.min(elapsedTime / duration, 1));

			window.scrollTo(0, startY + (targetY - startY) * easingFactor);

			if (elapsedTime < duration) {
				animation = requestAnimationFrame(animateScroll);
			} else {
				isAnimating = false;
			}
		};
		isAnimating = true;
		animation = requestAnimationFrame(animateScroll);
	};

	const stopAnimation = () => {
		if (animation) {
			cancelAnimationFrame(animation);
			isAnimating = false;
		}
	};

	node.addEventListener('click', handleClick);
	window.addEventListener('wheel', stopAnimation);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
			window.removeEventListener('wheel', stopAnimation);
		}
	};
};
