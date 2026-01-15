import { PlusIcon } from '@heroicons/react/24/outline';

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';

import { useModuleActions } from '@/hooks';
import { Link } from 'react-router-dom';
import { TableComponent } from './components/TableComponent';
import { Table } from './types';
import { PaginationComponent } from './components/PaginationComponent';
import { formatNumber } from '@/utils';

interface Props extends Table {
	module: string;
	isLoading: boolean;
	isActions: boolean;
	isInitialLoading?: boolean;
	totalPage?: number;
	currentPage?: number;
	total: number;
	next?: () => void;
	prev?: () => void;
	searching?: (value: string) => void;
	clearSearch?: () => void;
}
export const CardTable = ({
	title,
	rows,
	module,
	isLoading,
	isInitialLoading,
	isActions,
	totalPage,
	currentPage,
	total,
	next,
	prev,
	searching,
	clearSearch,
}: Props) => {
	const { headers, actions } = useModuleActions({ module });
	return (
		<Card className='h-full w-full'>
			<CardHeader floated={false} shadow={false} className='rounded-none'>
				<div className='mb-8 flex items-center justify-between gap-8'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							{title}
						</Typography>
						<Typography color='gray' className='mt-1 font-normal'>
							Listado de {title}
						</Typography>
					</div>
					{actions?.create?.permission && (
						<div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
							<Link to={`${actions?.create?.path}`}>
								<Button
									className='flex items-center gap-2'
									size='sm'
									color='green'
								>
									<PlusIcon strokeWidth={2} className='h-4 w-4' /> Nuevo
								</Button>
							</Link>
						</div>
					)}
				</div>
				<div className='flex justify-start'>
					<h1 className='text-base'>
						Total registros:{' '}
						<strong className='text-lg'>{formatNumber(total + '')}</strong>{' '}
					</h1>
				</div>
			</CardHeader>
			<CardBody className='px-2'>
				<TableComponent
					headers={headers}
					actions={actions}
					rows={rows}
					isLoading={isLoading}
					isInitialLoading={isInitialLoading}
					isActions={isActions}
					searching={searching}
					clearSearch={clearSearch}
				/>
				{actions?.pagination?.permission && !isLoading && (
					<div className='flex justify-center py-4'>
						<PaginationComponent
							totalPage={totalPage}
							currentPage={currentPage}
							next={next}
							prev={prev}
						/>
					</div>
				)}
			</CardBody>
		</Card>
	);
};
