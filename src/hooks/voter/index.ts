import {
	findVoter,
	getAllVoter,
	saveVote,
	saveVoter,
	searchVoter,
	searchVoter2,
	updateVoter,
} from '@/services';
import { useModalStore } from '@/store';
import { notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const key = 'voters';
const key2 = 'voterSearch';
const key3 = 'voter';

interface Error {
	data: {
		message: string;
	};
}

export const useVoters = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, refetch } = useQuery(
		[key, page],
		() => getAllVoter(page),
		{
			refetchOnWindowFocus: false,
		},
	);
	const refetchData = () => refetch();

	const next = () => {
		if (page === data?.total ? Math.round(data?.total / 50) : 0) return;

		setPage(page + 1);
	};

	const prev = () => {
		if (page === 1) return;
		setPage(page - 1);
	};

	useEffect(() => {
		refetchData();
		window.scroll(0, 0);
	}, [page]);

	return {
		records: data?.result,
		isLoading,
		refetchData,
		next,
		prev,
		currentPage: data?.currentPage,
		total: data?.total,
		totalPage: data?.total ? Math.round(data?.total / 50) : 0,
	};
};

export const useSearchingVoter = () => {
	const [identification, setIdentification] = useState<string>('');
	const [isVoter, setVoter] = useState<boolean>(false);
	const { refetch, isInitialLoading, error, isError, remove } = useQuery(
		[key2, identification],
		() => searchVoter(identification),
		{ enabled: false, refetchOnWindowFocus: false, retry: 0 },
	);

	useEffect(() => {
		if (identification !== '') {
			setVoter(false);
			refetch();
		}
	}, [identification]);

	if (isError) {
		const { data }: any = error;

		if (data?.status === 400) {
			notifyError(data?.message);
			setVoter(true);
		} else {
			notifySuccess(data?.message);
			setVoter(false);
		}

		remove();
	}
	return {
		searchingVoter: setIdentification,
		isInitialLoading,
		isVoter,
	};
};

export const useCreateVoter = () => {
	const navigate = useNavigate();
	const { mutate, isLoading } = useMutation(saveVoter, {
		onSuccess: () => {
			notifySuccess('Registro guardado con exito');
			navigate('/personas');
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
		},
	});
	return {
		mutateCreate: mutate,
		isLoading,
	};
};

export const useDetailVoter = ({ id }: { id: string | undefined }) => {
	let voter = null;
	const { data, refetch, isInitialLoading, remove } = useQuery(
		[key3, id],
		() => findVoter(id),
		{
			enabled: false,
			refetchOnWindowFocus: false,
		},
	);

	useEffect(() => {
		if (id !== undefined) {
			refetch();
		}
		return () => remove();
	}, [id]);

	if (data) {
		voter = {
			...data,
			candidateId: data?.candidateId !== null ? data?.candidateId : '',
			departamentId: data?.departamentId + '',
			municipalityId: data?.municipalityId + '',
			table: data?.table + '',
			voteplaceId: data?.voteplace?.id + '',
			role: data?.userId !== null ? data?.role : 'VOTANTE',
			bloodType: data?.bloodType.trim(),
			gender: data?.gender.trim(),
			leaderId: data?.leaderId !== null ? data?.leaderId + '' : '',
		};
		delete voter.leader;
		delete voter.userId;
		delete voter.candidate;
		delete voter.departament;
		delete voter.id;
		delete voter.municipality;
		delete voter.voteplace;
		delete voter.votedDate;
		delete voter.isVoted;
	}

	return {
		voter,
		isInitialLoadingDetail: isInitialLoading,
	};
};

export const useUpdateVoter = () => {
	const navigate = useNavigate();
	const { mutate, isLoading } = useMutation(updateVoter, {
		onSuccess: () => {
			notifySuccess('Registro actualizado con exito');
			navigate('/personas');
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
		},
	});
	return {
		mutateUpdate: mutate,
		isLoadingUpdate: isLoading,
	};
};

export const useSaveVote = () => {
	const { setOpen } = useModalStore();
	const { refetchData } = useVoters();
	const { mutate, isLoading } = useMutation(saveVote, {
		onSuccess: () => {
			notifySuccess('Registro guardado con exito');
			setOpen();
			refetchData();
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
		},
	});
	return {
		mutateUpdate: mutate,
		isLoadingUpdate: isLoading,
	};
};

export const useSearchVoter = () => {
	const [identification, setIdentification] = useState<string>('');
	const [isSearching, setSearching] = useState<boolean>(false);
	const { refetchData } = useVoters();
	const {
		data: records2,
		refetch,
		isInitialLoading,
	} = useQuery([key2, identification], () => searchVoter2(identification), {
		enabled: false,
		refetchOnWindowFocus: false,
		retry: 0,
	});

	useEffect(() => {
		if (identification !== '') {
			setSearching(true);
			refetch();
		}
	}, [identification]);

	const clearSearch = () => {
		setSearching(false);
		refetchData();
	};

	return {
		searchingVoter: setIdentification,
		recordsSearching: records2 ? records2.result : [],
		clearSearch,
		isInitialLoading,
		isSearching,
	};
};
