import ListHeader from '../atoms/ListHeader';
import AboutIconsList from './AboutIconsList';

export default function AboutIcons() {
	return (
		<div className='xl:px-12 flex flex-col gap-8'>
			<ListHeader text='Technologies that i use:' />
			<AboutIconsList />
		</div>
	);
}
