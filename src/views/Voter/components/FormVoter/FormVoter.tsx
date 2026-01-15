import {
	InputDateComponent,
	InputEmailComponent,
	InputNumberComponent,
	InputSearchButton,
	InputTextComponent,
	RadioComponent,
	SelectComponent,
	TextAreaComponent,
} from '@/components';
import {
	useCandidate,
	useCreateVoter,
	useDataGlobal,
	useDeparments,
	useDetailVoter,
	useLeader,
	useMunicipality,
	useSearchingVoter,
	useUpdateVoter,
	useVotingBooths,
} from '@/hooks';
import { Voter } from '@/models';
import { Button, Spinner } from '@material-tailwind/react';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
interface Props {
	isDetail: boolean;
}

let defaultValues = {
	identificationNumber: '',
	name: '',
	lastName: '',
	cellPhone: '',
	phone: '',
	departamentId: '20',
	municipalityId: '2',
	neighborhood: '',
	sidewalk: '',
	address: '',
	birthdate: '',
	email: '',
	leaderId: '',
	candidateId: '',
	voteplaceId: '',
	gender: '',
	bloodType: '',
	occupation: '',
	profession: '',
	population: '',
	academicProfile: '',
	description: '',
	observations: '',
	politicalState: 'Comprometido - equipo',
	role: '',
	table: '',
};

export const FormVoter = ({ isDetail }: Props) => {
	const { id } = useParams();

	const { departaments } = useDeparments();
	const { leaders } = useLeader();
	const { candidates } = useCandidate();
	const { votingBooths, loadTables, tables } = useVotingBooths();
	const { loadMunicipalities, municipalities } = useMunicipality();
	const { searchingVoter, isInitialLoading, isVoter } = useSearchingVoter();
	const { voter, isInitialLoadingDetail } = useDetailVoter({ id });
	const { mutateCreate, isLoading } = useCreateVoter();
	const { isLoadingUpdate, mutateUpdate } = useUpdateVoter();
	const {
		typeRol,
		genders,
		populations,
		occupations,
		statusPolicies,
		typeBlood,
	} = useDataGlobal();

	const isDisabled =
		isLoadingUpdate || isInitialLoadingDetail || isInitialLoading || isLoading;

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		resetField,
		formState: { errors },
	} = useForm<Voter>({
		mode: 'all',
		defaultValues: defaultValues,
		values: voter,
	});

	const onSubmit: SubmitHandler<Voter> = (data, e) => {
		e?.preventDefault();
		if (data?.leaderId !== '') {
			data.leaderId = Number(data?.leaderId);
		} else {
			delete data.leaderId;
		}

		if (data?.candidateId !== '') {
			data.candidateId = Number(data?.candidateId);
		} else {
			delete data.candidateId;
		}

		if (data?.voteplaceId !== '') {
			data.voteplaceId = Number(data?.voteplaceId);
		} else {
			delete data.voteplaceId;
		}

		if (data?.table !== '') {
			data.table = Number(data?.table);
		} else {
			delete data.table;
		}

		if (data?.birthdate === '' || data?.birthdate === null) {
			delete data.birthdate;
		}

		if (id) {
			delete data.role;
			mutateUpdate({ id, data });
		} else {
			mutateCreate(data);
		}
	};

	const handleSelectedMunicipaly = (value: string) => {
		loadMunicipalities(value);
		resetField('municipalityId');
	};
	const handleSelectedTable = (value: string) => {
		loadTables(value);
		resetField('table');
	};
	useMemo(() => {
		if (isVoter) setValue('identificationNumber', '');
	}, [isVoter]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`p-3 ${isDisabled ? 'form-disabled relative' : ''}`}
		>
			{isDisabled && (
				<div className='absolute top-1/2 left-1/2'>
					<Spinner color='amber' className='h-16 w-16' />
				</div>
			)}
			<div className='flex gap-3 mb-4'>
				<RadioComponent
					options={typeRol}
					name='role'
					register={register}
					setValue={setValue}
					required={id === undefined}
					errors={errors}
					isDisabled={id !== undefined}
				/>
			</div>
			<div className='mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				<InputSearchButton
					name='identificationNumber'
					label='Identificación'
					register={register}
					required={true}
					errors={errors}
					searchData={searchingVoter}
					isDisabled={isDetail}
				/>
				<InputTextComponent
					name='name'
					label='Nombres'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputTextComponent
					name='lastName'
					label='Apellidos'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
				/>
				<SelectComponent
					label='Género'
					options={genders}
					required={true}
					name='gender'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('gender')}
				/>
				<SelectComponent
					label='Tipo de sangre'
					options={typeBlood}
					required={false}
					name='bloodType'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('bloodType')}
				/>
				<InputDateComponent
					name='birthdate'
					label='Fecha de nacimiento'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputNumberComponent
					name='cellPhone'
					label='Celular'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
					type='cellphone'
				/>
				<InputNumberComponent
					name='phone'
					label='Teléfono'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
					type='number'
				/>
				<SelectComponent
					label='Población'
					options={populations}
					required={false}
					name='population'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('population')}
				/>
				<SelectComponent
					label='Departamento'
					options={departaments}
					required={true}
					name='departamentId'
					setValue={setValue}
					register={register}
					errors={errors}
					isEvent={true}
					searchData={handleSelectedMunicipaly}
					isDisabled={isDetail}
					value={watch('departamentId')}
				/>
				<SelectComponent
					label='Municipio'
					options={municipalities}
					required={true}
					name='municipalityId'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('municipalityId')}
				/>
				<InputTextComponent
					name='neighborhood'
					label='Barrio'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputTextComponent
					name='sidewalk'
					label='Corregimiento'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputTextComponent
					name='address'
					label='Dirección'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputEmailComponent
					name='email'
					label='Email'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<SelectComponent
					label='Ocupación'
					options={occupations}
					required={false}
					name='occupation'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('occupation')}
				/>
				<InputTextComponent
					name='profession'
					label='Profesión'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputTextComponent
					name='academicProfile'
					label='Perfil Académico'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				{watch('role') !== 'LIDER' && (
					<SelectComponent
						label='Lider'
						options={leaders}
						required={false}
						name='leaderId'
						setValue={setValue}
						register={register}
						errors={errors}
						isDisabled={isDetail}
						value={watch('leaderId')}
					/>
				)}
				<SelectComponent
					label='Candidato'
					options={candidates}
					required={false}
					name='candidateId'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('candidateId')}
				/>
				<SelectComponent
					label='Lugar de votación'
					options={votingBooths}
					required={false}
					name='voteplaceId'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('voteplaceId')}
					isEvent={true}
					searchData={handleSelectedTable}
				/>
				<SelectComponent
					label='Puesto de votación'
					options={tables}
					required={false}
					name='table'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('table')}
				/>
				<SelectComponent
					label='Estado político'
					options={statusPolicies}
					required={false}
					name='politicalState'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('politicalState')}
				/>
			</div>
			<div className='mb-4 grid grid-cols-1 gap-6'>
				<TextAreaComponent
					name='description'
					label='Descripción'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<TextAreaComponent
					name='observations'
					label='Observaciones'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
			</div>
			{!isDetail && (
				<div className='flex justify-center'>
					<Button
						type='submit'
						color={id !== undefined ? 'amber' : 'green'}
						className='mt-6 w-[150px]'
					>
						{id !== undefined ? 'Actualizar' : 'Crear'}
					</Button>
				</div>
			)}
		</form>
	);
};
