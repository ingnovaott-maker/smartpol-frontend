import { useAuthStore } from '@/store';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
	const { isAuthenticate, setLogin, setLogout, user, accessToken } =
		useAuthStore();
	const navigate = useNavigate();

	const logout = () => {
		setLogout();
		navigate('/iniciar-sesion');
	};

	return {
		isAuthenticate,
		setLogin,
		logout,
		user,
		accessToken,
	};
};
