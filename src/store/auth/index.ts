import { User } from '@/models';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface AuthStore {
	user: User;
	accessToken: null | string;
	isAuthenticate: boolean;
	setLogin: (user: User, isAuthenticate: boolean, accessToken: string) => void;
	setLogout: () => void;
}

const initialState = {
	id: 0,
	name: '',
	username: 0,
	role: '',
	active: false,
	accessToken: null,
	electionDay: false,
};

export const useAuthStore = create(
	persist<AuthStore>(
		set => ({
			user: initialState,
			isAuthenticate: false,
			accessToken: null,
			setLogin: (user: User, isAuthenticate: boolean, accessToken: string) => {
				set({ user });
				set({ isAuthenticate });
				set({ accessToken });
			},
			setLogout: () => {
				set({ user: initialState });
				set({ isAuthenticate: false });
				set({ accessToken: null });
			},
		}),
		{
			name: 'stateAuth',
		},
	),
);
