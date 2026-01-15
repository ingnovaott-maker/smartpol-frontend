export interface User {
	id: number;
	name: string;
	username: number;
	role: string;
	active: boolean;
	electionDay: boolean;
}
export interface CreateUser {
	names: string;
	email: string;
	cellphone?: string;
	password: string;
}

export interface UserLogin {
	username: string;
	password: string;
}
