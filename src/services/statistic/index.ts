import { axios, API_ROUTES } from '@/config/index.js';

export const getStatistics = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.statistic?.get}`);

	return data;
};

export const getStatisticsCandidates = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.statistic?.candidates}`);

	return data;
};

export const getStatisticsVotePlaces = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.statistic?.votePlaces}`);

	return data;
};

export const getStatisticsPoliticalParties = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.statistic?.politicalParties}`);

	return data;
};

export const getStatisticsNeighborhoods = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.statistic?.neighborhoods}`);

	return data;
};

export const getStatisticsLeaders = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.statistic?.leaders}`);

	return data;
};
