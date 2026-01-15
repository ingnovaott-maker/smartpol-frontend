import { axios, API_ROUTES } from '@/config/index.js';
import { UserLogin } from '@/models';

export const login = async (user: UserLogin) => {
	let {
		data: { data },
	} = await axios.post(`${API_ROUTES?.auth?.login}`, user);

	return data;
};
