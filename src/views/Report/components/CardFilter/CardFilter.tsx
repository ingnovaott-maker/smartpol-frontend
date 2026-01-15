import {
	Card,
	CardHeader,
	Typography,
	CardBody,
} from '@material-tailwind/react';
import { FormFilter } from '..';
import { Filter } from '@/models';

interface Props {
	handleSearching: (data: Filter) => void;
	isLoading: boolean;
}

export const CardFilter = ({ handleSearching, isLoading }: Props) => {
	return (
		<Card className='h-full w-full'>
			<CardHeader floated={false} shadow={false} className='rounded-none'>
				<div className='mb-0 flex items-center justify-between'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							Informes
						</Typography>
						<Typography color='gray' className='mt-1 font-normal'>
							Filtros para generar informes
						</Typography>
					</div>
				</div>
			</CardHeader>
			<CardBody className='px-4'>
				<FormFilter
					handleSearching={(data: Filter) => handleSearching(data)}
					isLoading={isLoading}
				/>
			</CardBody>
		</Card>
	);
};
