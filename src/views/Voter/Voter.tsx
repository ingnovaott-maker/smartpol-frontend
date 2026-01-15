import { CardTable, ModalConfirmVoter } from '@/components';
import { useSearchVoter, useVoters } from '@/hooks';

export const Voter = () => {
	const module = 'module-voter';
	const { isLoading, records, totalPage, currentPage, next, prev, total } =
		useVoters();

	const {
		searchingVoter,
		isInitialLoading,
		clearSearch,
		recordsSearching,
		isSearching,
	} = useSearchVoter();

	const searching = (value: string) => {
		searchingVoter(value);
	};
	return (
		<>
			<ModalConfirmVoter />
			<CardTable
				title='Personas'
				rows={isSearching ? recordsSearching : records}
				module={module}
				isLoading={isLoading || isInitialLoading}
				isInitialLoading={isInitialLoading}
				isActions={true}
				totalPage={totalPage}
				total={total}
				currentPage={currentPage}
				next={next}
				prev={prev}
				searching={searching}
				clearSearch={clearSearch}
			/>
		</>
	);
};
