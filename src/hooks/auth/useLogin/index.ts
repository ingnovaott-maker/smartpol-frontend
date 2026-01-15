import { useMutation } from '@tanstack/react-query';
import { login } from '@/services';
import { useNavigate } from 'react-router-dom';
import { notifyError } from '@/utils';
import { useAuthStore } from '@/store';

interface Error {
	data: {
		message: string;
	};
}
export const useLogin = () => {
	const navigate = useNavigate();
	const { setLogin } = useAuthStore();
	const { mutate, isLoading } = useMutation(login, {
		onSuccess: data => {
			setLogin({ ...data?.user }, true, data?.token);
			navigate('/');
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
		},
	});

	return {
		mutate,
		isLoading,
	};
};
