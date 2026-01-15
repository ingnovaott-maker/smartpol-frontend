import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { IconButton, Typography } from '@material-tailwind/react';

interface Props {
	totalPage?: number;
	currentPage?: number;
	next?: () => void;
	prev?: () => void;
}
export const PaginationComponent = ({
	totalPage,
	currentPage,
	next,
	prev,
}: Props) => {
	return (
		<div className='flex items-center gap-8'>
			<IconButton
				size='sm'
				variant='outlined'
				onClick={prev}
				disabled={totalPage === 1}
			>
				<ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
			</IconButton>
			<Typography color='gray' className='font-normal'>
				Página <strong className='text-gray-900'>{currentPage}</strong> de{' '}
				<strong className='text-gray-900'>{totalPage}</strong>
			</Typography>
			<IconButton
				size='sm'
				variant='outlined'
				onClick={next}
				disabled={currentPage === totalPage}
			>
				<ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
			</IconButton>
		</div>
	);
};
