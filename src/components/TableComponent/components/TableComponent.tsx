import { ModuleAction } from '@/utils';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { Button, Input, Spinner } from '@material-tailwind/react';
import DataTable from 'react-data-table-component';
import '../table.css';
import { Actions } from './Actions';
import { useState } from 'react';

interface Props extends ModuleAction {
	rows: any[];
	isLoading: boolean;
	isActions: boolean;
	isInitialLoading?: boolean;
	searching?: ((value: string) => void) | undefined;
	clearSearch?: () => void;
}
export const TableComponent = ({
	headers,
	rows,
	actions,
	isLoading,
	isInitialLoading,
	isActions,
	searching,
	clearSearch,
}: Props) => {
	const [search, setSearch] = useState('');
	let columns = [...headers];

	if (isActions) {
		columns.push({
			name: 'Acciones',
			button: true,
			width: '130px',
			cell: (row: any) => <Actions item={row} actions={actions} />,
		});
	}

	// const tableData = {
	// 	columns,
	// 	data: rows,
	// };

	// const paginationComponentOptions = {
	// 	rowsPerPageText: 'Filas por página:',
	// 	rangeSeparatorText: 'de',
	// 	noRowsPerPage: false,
	// 	selectAllRowsItem: false,
	// 	selectAllRowsItemText: 'All',
	// };

	// const paginationRowsPerPageOptions = [50, 100, 200];

	const onChange = (event: any) => {
		const { value } = event.target;
		setSearch(value);
		if (value === '') {
			if (clearSearch !== undefined) clearSearch();
		}
	};

	const handleSearch = () => {
		if (searching !== undefined) searching(search);
	};

	const handleClear = () => {
		if (clearSearch !== undefined) clearSearch();
		if (searching !== undefined) searching('');
		setSearch('');
	};

	return (
		<div>
			{actions?.search?.permission && (
				<div className='flex flex-col justify-start md:flex-row md:gap-x-3 pl-2 mb-3'>
					<Input
						type='number'
						value={search}
						onChange={onChange}
						placeholder='Buscar por Cédula'
						className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
						labelProps={{
							className: 'hidden',
						}}
						containerProps={{ className: 'w-full md:!w-[250px]' }}
					/>
					<Button
						size='sm'
						color='green'
						disabled={search.length > 0 ? false : true || isInitialLoading}
						className='rounded mt-3 mb-3 md:mt-0 md:mb-0'
						onClick={handleSearch}
					>
						{isInitialLoading ? <Spinner className='h-4 w-4' /> : 'Buscar'}{' '}
					</Button>
					<Button
						size='sm'
						color='red'
						disabled={search.length > 0 ? false : true || isInitialLoading}
						className='rounded'
						onClick={handleClear}
					>
						Limpiar
					</Button>
				</div>
			)}
			<div className='overflow-auto h-[450px]'>
				<DataTable
					persistTableHead
					dense
					columns={columns}
					data={rows}
					defaultSortAsc={true}
					sortIcon={<ArrowDownIcon />}
					highlightOnHover
					progressPending={isLoading}
					noDataComponent={<p className='p-4'>No hay registros para mostrar</p>}
					progressComponent={
						<div className='p-4'>
							<Spinner color='amber' className='h-10 w-10' />
						</div>
					}
				/>
			</div>
		</div>
	);
};
