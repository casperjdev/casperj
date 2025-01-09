import type { Snippet } from 'svelte';

export type Icon = {
	name: string;
	path: string;
};

export type IconLink = {
	icon: string;
	label: string;
	href: string;
};

export type ScrollObserverProps = {
	className?: string;
	children: Snippet;
	transition: ScrollObserverTransition;
};

export type ScrollObserverTransition = {
	onHidden: string[];
	onVisible: string[];
};
