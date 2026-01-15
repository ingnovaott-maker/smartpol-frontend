import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FormVoter } from '../components';

export const EditVoter = () => {
	return (
		<Card className='h-full w-full'>
			<CardHeader floated={false} shadow={false} className='rounded-none'>
				<div className='mb-8 flex items-center justify-between gap-8'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							Actualizar persona
						</Typography>
						<Typography color='gray' className='mt-1 font-normal'>
							Actulización de persona
						</Typography>
					</div>
					<div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
						<Link to='/personas'>
							<Button className='flex items-center gap-2' size='sm'>
								<ArrowLongLeftIcon strokeWidth={2} className='h-4 w-4' /> Atrás
							</Button>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardBody className='overflow-auto px-2'>
				<FormVoter isDetail={false} />
			</CardBody>
		</Card>
	);
};
