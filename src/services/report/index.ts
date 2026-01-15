import { axios, API_ROUTES } from '@/config/index.js';
import { Filter } from '@/models';

export const filterVoters = async (
	{ gender, leaderId, politicalState, candidateId }: Filter,
	page: number,
) => {
	const params = {
		gender,
		leaderId,
		politicalState,
		candidateId,
		page,
		pageSize: 50,
	};
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.report?.get}/`, {
		params,
	});

	return data;
};

export const exportVoters = async ({
	gender,
	leaderId,
	politicalState,
}: Filter) => {
	const params = { gender, leaderId, politicalState };
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.report?.export}/`, {
		params,
	});

	return data;
};
