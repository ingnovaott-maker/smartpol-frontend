import { PaginationComponent, TableComponent } from '@/components';
import { API_ROUTES } from '@/config';
import { useModuleActions } from '@/hooks';
import { Filter } from '@/models';
import { dowlandFile } from '@/utils';
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import { formatNumber } from '@/utils';
interface Props {
	records: any[];
	isLoading: boolean;
	filters: Filter;
	totalPage?: number;
	currentPage?: number;
	total: number;
	next?: () => void;
	prev?: () => void;
}
export const ResultSearching = ({
	records,
	isLoading,
	filters,
	totalPage,
	currentPage,
	total,
	next,
	prev,
}: Props) => {
	const module = 'module-report';
	const { headers, actions } = useModuleActions({ module });

	const handleReport = () => {
		const link = `${API_ROUTES?.report?.export}?leaderId=${filters?.leaderId}&gender=${filters?.gender}&politicalState=${filters?.politicalState}&candidateId=${filters?.candidateId}`;
		dowlandFile(link);
	};
	return (
		<Card className='h-full w-full mt-8'>
			<CardHeader floated={false} shadow={false} className='rounded-none'>
				<div className='mb-8 flex items-center justify-between gap-8'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							Listado de personas
						</Typography>
					</div>
					<div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
						{actions?.report?.permission && (
							<Button
								className='flex items-center gap-2'
								size='sm'
								color='amber'
								disabled={records?.length > 0 ? false : true}
								onClick={() => handleReport()}
							>
								<DocumentArrowDownIcon strokeWidth={2} className='h-4 w-4' />{' '}
								Exportar
							</Button>
						)}
					</div>
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
					rows={records}
					isLoading={isLoading}
					isActions={false}
				/>
				{!isLoading && (
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
