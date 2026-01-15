import { Statistic } from '@/hooks';
import { formatNumber } from '@/utils';
import { Card, CardBody } from '@material-tailwind/react';

interface Props {
	item: Statistic;
}
export const CardStatistic = ({ item }: Props) => {
	return (
		<Card className='mt-6 text-center h-28'>
			<CardBody className='h-28 flex items-center justify-center flex-col'>
				<h1 className='mb-2 text-4xl font-semibold text-[#e18100]'>
					{formatNumber(item?.value + '')}
				</h1>
				<h2 className='text-base font-semibold'>{item?.text}</h2>
			</CardBody>
		</Card>
	);
};
