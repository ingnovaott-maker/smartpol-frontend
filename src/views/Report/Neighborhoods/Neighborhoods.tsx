import { CardTable } from '@/components';
import { useStatisticsNeighborhoods } from '@/hooks';

export const ReportNeighborhoods = () => {
	const module = 'module-report-neighborhoods';
	const { isLoading, records, total } = useStatisticsNeighborhoods();
	return (
		<CardTable
			title='Informe de Barrios'
			rows={records}
			module={module}
			isLoading={isLoading}
			isActions={false}
			total={total}
		/>
	);
};
