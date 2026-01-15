import { Card } from '@material-tailwind/react';
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
	totalPendientes: number;
	totalRegisteredVotes: number;
}
export const GraficDoughnut = ({
	totalPendientes,
	totalRegisteredVotes,
}: Props) => {
	const data = {
		labels: ['Votos Registrados', 'Votos Pendientes'],
		datasets: [
			{
				data: [totalRegisteredVotes, totalPendientes],
				backgroundColor: ['#e18100', 'rgb(122, 120, 120)'],
				borderColor: ['#e18100', 'rgb(122, 120, 120)'],
				borderWidth: 1,
				label: 'Votos',
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Registro de Votos',
			},
		},
	};
	useMemo(() => {
		if (totalPendientes || totalRegisteredVotes) {
			data.datasets[0].data = [totalRegisteredVotes, totalPendientes];
		}
	}, [totalRegisteredVotes, totalPendientes]);

	return (
		<Card className='mt-6'>
			<Doughnut data={data} options={options} />;
			{/* <div className='flex flex-col gap-y-2 px-3 pb-2'>
				<Chip
					value={`Votos Registrados: ${totalRegisteredVotes}`}
					className='bg-[#e18100] text-lg normal-case'
				/>
				<Chip
					value={`Votos Pendientes: ${totalPendientes}`}
					className='bg-[#7A7878] text-lg normal-case'
				/>
			</div> */}
		</Card>
	);
};
