import ScrollObserver from '@/components/misc/ScrollObserver';
import { scrollAnimationStyle } from '@/constants/types';

const animation: scrollAnimationStyle = {
	onHidden: ['-translate-y-8', 'opacity-0'],
	onVisible: ['-translate-y-0', 'opacity-100'],
};

export default function ListHeader({ text }: { text: string }) {
	return (
		<ScrollObserver scrollAnimation={animation}>
			<h1 className='text-center text-neutral-300'>{text}</h1>
		</ScrollObserver>
	);
}
