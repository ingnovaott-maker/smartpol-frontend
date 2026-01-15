import {
	getAllCandidates,
	getAllDepartaments,
	getAllLeaders,
	getAllMunicipalities,
	getAllVotingBooths,
} from '@/services';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface Leader {
	id?: number;
	name?: string;
	username?: string;
	role?: string;
	value?: string;
	label?: string;
}

interface Department {
	id?: number | string;
	name?: string;
	value?: string;
	label?: string;
}

interface Municipality {
	id?: number;
	name?: string;
	value?: string;
	label?: string;
}

interface Candidate {
	address?: string;
	cellphone?: string | null;
	email?: string | null;
	id?: number;
	identificationNumber?: string;
	lastName?: string;
	name?: string;
	politicParty?: string;
	type?: string;
	userId?: string;
	value?: string;
	label?: string;
}

interface VotingBooths {
	id?: number;
	name?: string;
	value?: string;
	label?: string;
	tables?: [];
}

interface Table {
	value?: string;
	label?: string;
}

const key1 = 'leaders';
const key2 = 'departments';
const key3 = 'municipalities';
const key4 = 'candidates';
const key5 = 'votingBooths';

export const useLeader = () => {
	let leaders: Leader[] = [];
	const { data, isSuccess } = useQuery([key1], getAllLeaders, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data.forEach((el: Leader) => {
			leaders.push({
				label: el?.name,
				value: el?.id + '',
			});
		});
	}
	return {
		leaders,
		isSuccessLeaders: isSuccess,
	};
};

export const useCandidate = () => {
	let candidates: Candidate[] = [];
	const { data, isSuccess } = useQuery([key4], getAllCandidates, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data?.forEach((el: Candidate) => {
			candidates.push({
				value: el?.id + '',
				label: `${el?.type} - ${el?.name} ${el?.lastName}`,
			});
		});
	}
	return {
		candidates,
		isSuccessCandidates: isSuccess,
	};
};

export const useVotingBooths = () => {
	let votingBooths: VotingBooths[] = [];
	const [tables, setTables] = useState<Table[]>([]);

	const { data, isSuccess } = useQuery([key5], getAllVotingBooths, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data?.forEach((el: VotingBooths) => {
			votingBooths.push({
				value: el?.id + '',
				label: el?.name,
				tables: el?.tables,
			});
		});
	}

	const loadTables = (value: string) => {
		const records: Table[] = [];
		const record = votingBooths.find((el: VotingBooths) => el?.value === value);
		if (record) {
			record?.tables?.forEach(el => {
				records.push({
					value: el,
					label: `Mesa ${el}`,
				});
			});
		}
		setTables(records);
	};
	return {
		votingBooths,
		tables,
		loadTables,
		isSuccessVotingBooths: isSuccess,
	};
};

export const useDeparments = () => {
	let departaments: Department[] = [];
	const { data, isSuccess } = useQuery([key2], getAllDepartaments, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data.forEach((item: Department) => {
			departaments.push({
				value: item?.id + '',
				label: item?.name,
			});
		});
	}
	return {
		departaments,
		isSuccessDepartaments: isSuccess,
	};
};

export const useMunicipality = () => {
	let municipalities: Municipality[] = [];
	const [id, setId] = useState<string | number>('');
	const { data, refetch, isSuccess } = useQuery(
		[key3, id],
		() => getAllMunicipalities(id),
		{ enabled: false, refetchOnWindowFocus: false },
	);

	useEffect(() => {
		if (id !== '') {
			refetch();
		}
	}, [id]);

	if (data) {
		data.forEach((el: Leader) => {
			municipalities.push({
				label: el?.name,
				value: el?.id + '',
			});
		});
	}
	return {
		municipalities,
		loadMunicipalities: setId,
		isSuccessMunicipalities: isSuccess,
	};
};
