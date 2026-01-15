import { CardTable } from '@/components';
import { useStatisticsCandidates } from '@/hooks';

export const ReportCandidates = () => {
	const module = 'module-report-candidates';
	const { isLoading, records, total } = useStatisticsCandidates();
	return (
		<CardTable
			title='Informe de Candidatos'
			rows={records}
			module={module}
			isLoading={isLoading}
			isActions={false}
			total={total}
		/>
	);
};
