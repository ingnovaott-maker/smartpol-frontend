import { useReport } from '@/hooks';
import { CardFilter, ResultSearching } from './components';
import { Filter } from '@/models';

export const Report = () => {
	const {
		filtered,
		isLoading,
		records,
		filters,
		total,
		totalPage,
		currentPage,
		next,
		prev,
	} = useReport();
	const handleSearching = (data: Filter) => {
		filtered(data);
	};

	return (
		<>
			<CardFilter
				handleSearching={(data: Filter) => handleSearching(data)}
				isLoading={isLoading}
			/>
			<ResultSearching
				records={records}
				isLoading={isLoading}
				filters={filters}
				totalPage={totalPage}
				total={total}
				currentPage={currentPage}
				next={next}
				prev={prev}
			/>
		</>
	);
};
