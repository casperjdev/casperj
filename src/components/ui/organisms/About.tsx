import { Element } from '@/constants/react-scroll';
import AboutIntro from '../atoms/AboutIntro';
import AboutPrimary from '../atoms/AboutPrimary';
import AboutSecondary from '../atoms/AboutSecondary';
import AboutIcons from '../molecules/AboutIcons';

export default function About() {
	return (
		<Element name='About' className='overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-12'>
			<AboutIntro />
			<AboutPrimary />
			<AboutIcons />
			<AboutSecondary />
		</Element>
	);
}
