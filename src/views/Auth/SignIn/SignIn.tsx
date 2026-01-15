import { MessageError } from '@/components';
import { useLogin } from '@/hooks';
import { UserLogin } from '@/models';
import { clearNotify, validationNumber } from '@/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ErrorMessage } from '@hookform/error-message';
import {
	Button,
	Card,
	CardBody,
	Input,
	Spinner,
} from '@material-tailwind/react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

export const SignIn = () => {
	const { mutate, isLoading } = useLogin();
	const [typeInput, setTypeInput] = useState<string>('password');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserLogin>({
		mode: 'all',
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const handleChangeTypeInput = () => {
		setTypeInput(prevState => (prevState === 'password' ? 'text' : 'password'));
	};

	const onSubmit: SubmitHandler<UserLogin> = (data, e) => {
		clearNotify();
		e?.preventDefault();
		mutate(data);
	};

	return (
		<>
			{/* <img
				src='https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
				className='absolute inset-0 z-0 h-full w-full object-cover'
			/> */}
			<div className='absolute inset-0 z-0 h-full w-full background-image' />
			<div className='container mx-auto p-4'>
				<Card className='absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4'>
					<h1 className='text-3xl text-center font-semibold uppercase py-6'>
						Iniciar Sesión
					</h1>
					<div className='flex justify-center mb-4'>
						<img src='/img/logo.png' width='300' />
					</div>
					<CardBody>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col gap-y-6'
						>
							<div>
								<Input
									type='text'
									label='Usuario'
									autoFocus
									{...register('username', {
										...validationNumber,
										required: { value: true, message: 'Campo requerido' },
									})}
									error={!!errors?.username}
									size='lg'
								/>
								<ErrorMessage
									errors={errors}
									name='username'
									render={({ message }) => (
										<MessageError>{message}</MessageError>
									)}
								/>
							</div>
							<div>
								<div className='relative flex w-full max-w-[24rem]'>
									<Input
										type={typeInput}
										label='Contraseña'
										className='pr-10'
										{...register('password', {
											required: { value: true, message: 'Campo requerido' },
										})}
										error={!!errors?.password}
										size='lg'
									/>
									<span
										className='!absolute right-1.5 top-2.5 w-7 cursor-pointer'
										onClick={handleChangeTypeInput}
									>
										{typeInput === 'password' ? (
											<EyeIcon className='h-6 w-6' />
										) : (
											<EyeSlashIcon className='h-6 w-6' />
										)}
										<span />
									</span>
								</div>
								<ErrorMessage
									errors={errors}
									name='password'
									render={({ message }) => (
										<MessageError>{message}</MessageError>
									)}
								/>
							</div>
							<div className='mt-4'>
								<Button
									type='submit'
									disabled={isLoading}
									fullWidth
									className='bg-[#e18100] text-base flex gap-x-2 justify-center'
								>
									{isLoading && <Spinner className='h-6 w-6' />}
									Ingresar
								</Button>
							</div>
						</form>
					</CardBody>
					{/* <CardFooter className='pt-0'>
						<Typography variant='small' className='mt-6 flex justify-center'>
							¿No tienes una cuenta?
							<Link to='/registro'>
								<Typography
									as='span'
									variant='small'
									color='blue'
									className='ml-1 font-bold'
								>
									Regístrate
								</Typography>
							</Link>
						</Typography>
					</CardFooter> */}
				</Card>
			</div>
		</>
	);
};
