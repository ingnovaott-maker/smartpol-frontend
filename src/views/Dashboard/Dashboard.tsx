import { Statistic, useStatistics } from '@/hooks';
import { CardStatistic } from './components';
import { Spinner } from '@material-tailwind/react';
import { GraficDoughnut } from '@/components';

export const Dashboard = () => {
	const { records, isLoading, totalPendientes, totalRegisteredVotes } =
		useStatistics();

	return (
		<>
			{isLoading ? (
				<div className='flex justify-center pt-8'>
					<Spinner className='h-12 w-12' color='amber' />
				</div>
			) : (
				<>
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
						{records?.map((item: Statistic) => (
							<CardStatistic key={item.text} item={item} />
						))}
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<GraficDoughnut
							totalPendientes={totalPendientes}
							totalRegisteredVotes={totalRegisteredVotes}
						/>
					</div>
				</>
			)}
		</>
	);
};
