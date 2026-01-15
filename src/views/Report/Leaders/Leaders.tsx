import { CardTable } from '@/components';
import { useStatisticsLeaders } from '@/hooks';

export const ReportLeaders = () => {
	const module = 'module-report-leaders';
	const { isLoading, records, total } = useStatisticsLeaders();
	return (
		<CardTable
			title='Informe de Líderes'
			rows={records}
			module={module}
			isLoading={isLoading}
			isActions={false}
			total={total}
		/>
	);
};
