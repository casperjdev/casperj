import { Element } from '@/constants/react-scroll';
import LinksList from '../molecules/LinksList';
import ListHeader from '../atoms/ListHeader';

export default function Links() {
	return (
		<Element name='Links' className='overflow-hidden xl:px-12 px-4 py-12 flex flex-col gap-8 min-h-[calc(100dvh-3rem)]'>
			<ListHeader text='Links' />
			<LinksList />
		</Element>
	);
}
