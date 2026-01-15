import {
	getStatistics,
	getStatisticsCandidates,
	getStatisticsLeaders,
	getStatisticsNeighborhoods,
	getStatisticsPoliticalParties,
	getStatisticsVotePlaces,
} from '@/services';
import { useQuery } from '@tanstack/react-query';

const key = 'statistics';
const key2 = 'statisticsCandidates';
const key3 = 'statisticsVotePlaces';
const key4 = 'statisticsPoliticalParties';
const key5 = 'statisticsNeighborhoods';
const key6 = 'statisticsLeaders';

type Texts = {
	[key: string]: string;
};
const texts: Texts = {
	['totalCandidates']: 'Candidatos',
	['totalLeaders']: 'Lideres',
	['totalRegisteredVotes']: 'Votos Registrados',
	['totalVoters']: 'Votantes',
	['totalPendingVotes']: 'Votos Pendientes',
};

type Array = [string, number];
export interface Statistic {
	value: number;
	text: string;
}

export const useStatistics = () => {
	let records: Statistic[] = [];
	const { data, isLoading, refetch } = useQuery([key], getStatistics);

	const refetchData = () => refetch();

	if (data) {
		const array: Array[] = Object.entries(data);
		array.forEach((item: Array) => {
			records.push({
				text: texts[item[0]],
				value: item[1],
			});
		});
	}
	return {
		records,
		isLoading,
		refetchData,
		totalPendientes: data?.totalPendingVotes,
		totalRegisteredVotes: data?.totalRegisteredVotes,
	};
};

export const useStatisticsCandidates = () => {
	const {
		data: records,
		isLoading,
		refetch,
	} = useQuery([key2], getStatisticsCandidates);

	const refetchData = () => refetch();

	return {
		records,
		isLoading,
		refetchData,
		total: records ? records.length : 0,
	};
};

export const useStatisticsVotePlaces = () => {
	const {
		data: records,
		isLoading,
		refetch,
	} = useQuery([key3], getStatisticsVotePlaces);

	const refetchData = () => refetch();

	return {
		records,
		isLoading,
		refetchData,
		total: records ? records.length : 0,
	};
};

export const useStatisticsPoliticalParties = () => {
	const {
		data: records,
		isLoading,
		refetch,
	} = useQuery([key4], getStatisticsPoliticalParties);

	const refetchData = () => refetch();

	return {
		records,
		isLoading,
		refetchData,
		total: records ? records.length : 0,
	};
};

export const useStatisticsNeighborhoods = () => {
	const {
		data: records,
		isLoading,
		refetch,
	} = useQuery([key5], getStatisticsNeighborhoods);

	const refetchData = () => refetch();

	return {
		records,
		isLoading,
		refetchData,
		total: records ? records.length : 0,
	};
};

export const useStatisticsLeaders = () => {
	const {
		data: records,
		isLoading,
		refetch,
	} = useQuery([key6], getStatisticsLeaders);

	const refetchData = () => refetch();

	return {
		records,
		isLoading,
		refetchData,
		total: records ? records.length : 0,
	};
};
