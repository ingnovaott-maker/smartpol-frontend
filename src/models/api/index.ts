export interface ApiRoutes {
	auth?: {
		login: string;
	};
	voter?: {
		get: string;
		find: string;
		save: string;
		update: string;
		search: string;
		search2: string;
	};
	departament?: {
		get: string;
	};
	municipality?: {
		get: string;
	};
	role?: {
		get: string;
	};
	candidate?: {
		get: string;
	};
	votingBooths?: {
		get: string;
	};
	report?: {
		get: string;
		export: string;
	};
	vote?: {
		save: string;
	};
	statistic?: {
		get: string;
		candidates: string;
		votePlaces: string;
		politicalParties: string;
		neighborhoods: string;
		leaders: string;
	};
}
