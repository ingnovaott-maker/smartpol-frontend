import { create } from 'zustand';
interface User {
	id: number;
	name: string;
	lastName: string;
	identificationNumber: string;
	table?: number;
	candidate?: {
		name: string;
		lastName: string;
	} | null;
	voteplace?: {
		name: string;
	} | null;
}

interface ModalStore {
	isOpen: boolean;
	user: User;
	setOpen: () => void;
	setUser: (user: User) => void;
}

const userDefault = {
	id: 0,
	name: '',
	lastName: '',
	identificationNumber: '',
	table: 0,
	candidate: {
		name: '',
		lastName: '',
	},
	voteplace: {
		name: '',
	},
};

export const useModalStore = create<ModalStore>(set => ({
	user: userDefault,
	isOpen: false,
	setOpen: () => set(state => ({ isOpen: !state.isOpen })),
	setUser: (user: User) => set({ user }),
}));
