import { ApiRoutes } from '@/models';

const API_URL = import.meta.env.VITE_API_URL;

export const API_ROUTES: ApiRoutes = {
	auth: {
		login: `${API_URL}/auth/login`,
	},
	voter: {
		get: `${API_URL}/people`,
		find: `${API_URL}/people`,
		save: `${API_URL}/people`,
		update: `${API_URL}/people`,
		search: `${API_URL}/people/identification`,
		search2: `${API_URL}/people/search`,
	},
	vote: {
		save: `${API_URL}/people`,
	},
	departament: {
		get: `${API_URL}/departaments`,
	},
	municipality: {
		get: `${API_URL}/municipalities`,
	},
	role: {
		get: `${API_URL}/users/role/lider`,
	},
	candidate: {
		get: `${API_URL}/candidates`,
	},
	votingBooths: {
		get: `${API_URL}/vote-places`,
	},
	report: {
		get: `${API_URL}/people/find/filter`,
		export: `${API_URL}/people/export/excel`,
	},
	statistic: {
		get: `${API_URL}/people/report/general`,
		candidates: `${API_URL}/people/report/general/candidates`,
		votePlaces: `${API_URL}/people/report/general/vote-places`,
		politicalParties: `${API_URL}/people/report/general/political-parties`,
		neighborhoods: `${API_URL}/people/report/general/neighborhoods`,
		leaders: `${API_URL}/people/report/general/leaders`,
	},
};
