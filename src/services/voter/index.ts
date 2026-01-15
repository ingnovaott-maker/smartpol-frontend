import { axios, API_ROUTES } from '@/config/index.js';
import { Voter } from '@/models';

export const getAllVoter = async (page: number) => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.voter?.get}/?page=${page}&pageSize=50`);

	return data;
};

export const findVoter = async (id: string | undefined) => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.voter?.find}/${id}`);

	return data;
};

export const searchVoter = async (identification: string) => {
	let result = await axios.get(
		`${API_ROUTES?.voter?.search}/${identification}`,
	);

	return result;
};

export const saveVoter = async (data: Voter) => {
	let result = await axios.post(`${API_ROUTES?.voter?.save}`, data);

	return result;
};

export const updateVoter = async ({
	id,
	data,
}: {
	id: string;
	data: Voter;
}) => {
	let result = await axios.put(`${API_ROUTES?.voter?.update}/${id}`, data);

	return result;
};

export const saveVote = async ({
	id,
	data,
}: {
	id: number;
	data: { isVoted: boolean; votedDate?: string };
}) => {
	let result = await axios.put(
		`${API_ROUTES?.vote?.save}/${id}/report-vote`,
		data,
	);

	return result;
};

export const searchVoter2 = async (identification: string) => {
	let {
		data: { data },
	} = await axios.get(
		`${API_ROUTES?.voter?.search2}/${identification}/paginate`,
	);

	return data;
};
