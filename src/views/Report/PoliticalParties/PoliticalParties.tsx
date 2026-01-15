import { CardTable } from '@/components';
import { useStatisticsPoliticalParties } from '@/hooks';

export const ReportPoliticalParties = () => {
	const module = 'module-report-political-parties';
	const { isLoading, records, total } = useStatisticsPoliticalParties();
	return (
		<CardTable
			title='Informe de Partidos Políticos'
			rows={records}
			module={module}
			isLoading={isLoading}
			isActions={false}
			total={total}
		/>
	);
};
