import { axios, API_ROUTES } from '@/config/index.js';

export const getAllLeaders = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.role?.get}`);

	return data;
};

export const getAllCandidates = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.candidate?.get}`);

	return data;
};

export const getAllVotingBooths = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.votingBooths?.get}`);

	return data;
};

export const getAllDepartaments = async () => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.departament?.get}`);

	return data;
};

export const getAllMunicipalities = async (id: string | number) => {
	let {
		data: { data },
	} = await axios.get(`${API_ROUTES?.municipality?.get}/${id}`);

	return data;
};
