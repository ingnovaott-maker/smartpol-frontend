import { SelectComponent } from '@/components';
import { useCandidate, useDataGlobal, useLeader } from '@/hooks';
import { Filter } from '@/models';
import { Button, Spinner } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
interface Props {
	handleSearching: (data: Filter) => void;
	isLoading: boolean;
}
export const FormFilter = ({ handleSearching, isLoading }: Props) => {
	const { genders, statusPolicies } = useDataGlobal();
	const { leaders } = useLeader();
	const { candidates } = useCandidate();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<Filter>({
		mode: 'all',
		defaultValues: {
			gender: '',
			politicalState: '',
			leaderId: '',
			candidateId: '',
		},
	});

	const isDisabled = !(
		watch('gender') !== '' ||
		watch('politicalState') !== '' ||
		watch('leaderId') !== '' ||
		watch('candidateId') !== ''
	);

	const onSubmit: SubmitHandler<Filter> = (data, e) => {
		e?.preventDefault();
		handleSearching(data);
	};
	const handleReset = () => {
		const data = {
			gender: '',
			politicalState: '',
			leaderId: '',
			candidateId: '',
		};
		reset(data);
		handleSearching(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`p-3 ${isLoading ? 'form-disabled relative' : ''}`}
		>
			<div className='mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<SelectComponent
					label='Género'
					options={genders}
					required={false}
					name='gender'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isLoading}
					value={watch('gender')}
				/>
				<SelectComponent
					label='Estado político'
					options={statusPolicies}
					required={false}
					name='politicalState'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isLoading}
					value={watch('politicalState')}
				/>
				<SelectComponent
					label='Lider'
					options={leaders}
					required={false}
					name='leaderId'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isLoading}
					value={watch('leaderId')}
					isLoading={false}
				/>
				<SelectComponent
					label='Candidato'
					options={candidates}
					required={false}
					name='candidateId'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isLoading}
					value={watch('candidateId')}
					isLoading={false}
				/>
			</div>
			<div className='flex justify-end gap-x-3'>
				<Button
					type='button'
					color='red'
					size='sm'
					variant='outlined'
					disabled={isLoading}
					className='w-[150px] mt-4 flex items-center justify-center gap-x-2'
					onClick={handleReset}
				>
					Limpiar
				</Button>
				<Button
					type='submit'
					size='sm'
					color='green'
					disabled={isLoading || isDisabled}
					className='w-[150px] mt-4 flex items-center justify-center gap-x-2'
				>
					{isLoading ? <Spinner className='h-5 w-5' /> : 'Filtrar'}
				</Button>
			</div>
		</form>
	);
};
