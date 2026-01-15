import { useSaveVote } from '@/hooks';
import { useModalStore } from '@/store';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	IconButton,
	Spinner,
	Typography,
} from '@material-tailwind/react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Vote {
	isVoted: boolean;
}
let defaultValues: Vote = {
	isVoted: true,
};
export const ModalConfirmVoter = () => {
	const { isOpen, setOpen, user } = useModalStore();
	const { isLoadingUpdate, mutateUpdate } = useSaveVote();

	const { handleSubmit } = useForm<Vote>({
		mode: 'all',
		defaultValues: defaultValues,
	});

	const onSubmit: SubmitHandler<Vote> = (data, e) => {
		e?.preventDefault();
		mutateUpdate({ id: user?.id, data });
	};
	return (
		<Dialog size='xs' open={isOpen} handler={setOpen}>
			<DialogHeader className='justify-between pb-0'>
				<div>
					<Typography variant='h5' color='blue-gray' className='uppercase'>
						Registrar Voto
					</Typography>
				</div>
				<IconButton
					color='blue-gray'
					size='sm'
					variant='text'
					onClick={() => setOpen()}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
						className='h-5 w-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</IconButton>
			</DialogHeader>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogBody className='!px-5'>
					<div className='mb-6'>
						<p className='mb-4'>
							Acontinuación se realizará el registro del voto de{' '}
							<strong className='font-semibold'>{`${user?.name} ${user?.lastName}`}</strong>
							, identificado con el número de cédula{' '}
							<strong className='font-semibold'>
								{user?.identificationNumber}
							</strong>
						</p>
						{user?.candidate && (
							<p className='mb-2'>
								<strong className='font-semibold uppercase'>candidato:</strong>{' '}
								{`${user?.candidate?.name} ${user?.candidate?.lastName}`}
							</p>
						)}
						{user?.voteplace && (
							<p className='mb-2'>
								<strong className='font-semibold uppercase'>
									Lugar de votación:
								</strong>{' '}
								{user?.voteplace?.name}
							</p>
						)}
						{user?.table && (
							<p className='mb-2'>
								<strong className='font-semibold uppercase'>En la mesa:</strong>{' '}
								{`N° ${user?.table}`}
							</p>
						)}
						<p></p>
					</div>
				</DialogBody>
				<DialogFooter className='justify-between gap-2'>
					<Typography variant='small' color='gray' className='font-normal'>
						¿Seguro que deseas registrar este voto?
					</Typography>
					<Button
						type='submit'
						variant='filled'
						color='green'
						size='sm'
						disabled={isLoadingUpdate}
					>
						{isLoadingUpdate ? <Spinner className='h-6 w-6' /> : 'Registrar'}
					</Button>
				</DialogFooter>
			</form>
		</Dialog>
	);
};
