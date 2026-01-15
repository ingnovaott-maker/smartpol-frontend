import { CardTable } from '@/components';
import { useStatisticsVotePlaces } from '@/hooks';

export const ReportVotePlaces = () => {
	const module = 'module-report-vote-places';
	const { isLoading, records, total } = useStatisticsVotePlaces();
	return (
		<CardTable
			title='Informe de Lugares de Votación'
			rows={records}
			module={module}
			isLoading={isLoading}
			isActions={false}
			total={total}
		/>
	);
};
