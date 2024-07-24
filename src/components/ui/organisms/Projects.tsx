import { Element } from '@/constants/react-scroll';
import ProjectsList from '../molecules/ProjectsList';
import ListHeader from '../atoms/ListHeader';

export default function Projects() {
	return (
		<Element name='Projects' className='overflow-hidden xl:px-24 px-8 py-12 flex flex-col gap-8'>
			<ListHeader text='My Projects' />
			<ProjectsList />
		</Element>
	);
}
