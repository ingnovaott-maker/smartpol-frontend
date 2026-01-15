import { Filter } from '@/models';
import { filterVoters } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
const key = 'reports';

const defaultData = {
	gender: '',
	leaderId: '',
	politicalState: '',
	candidateId: '',
};
export const useReport = () => {
	const [filter, setFilter] = useState<Filter>(defaultData);
	const [page, setPage] = useState(1);
	const { refetch, data, isInitialLoading, remove } = useQuery(
		[key, filter, page],
		() => filterVoters(filter, page),
		{
			enabled: false,
			refetchOnWindowFocus: false,
			retry: 0,
		},
	);

	useEffect(() => {
		if (
			filter?.leaderId !== '' ||
			filter?.gender !== '' ||
			filter?.politicalState !== '' ||
			filter?.candidateId !== ''
		) {
			refetchData();
		}
	}, [filter]);

	useEffect(() => {
		refetchData();
		return () => remove();
	}, []);

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
		filtered: setFilter,
		isLoading: isInitialLoading,
		records: data?.result || [],
		filters: filter,
		next,
		prev,
		currentPage: data?.currentPage,
		total: data?.total,
		totalPage: data?.total ? Math.round(data?.total / 50) : 0,
	};
};
