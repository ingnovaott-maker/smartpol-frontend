export interface Voter {
	id?: number;
	identificationNumber: string;
	name: string;
	lastName: string;
	cellPhone: string;
	phone: string;
	departamentId: string | number;
	municipalityId: string | number;
	neighborhood: string;
	sidewalk: string;
	address: string;
	birthdate?: string;
	email: string;
	leaderId?: string | number;
	candidateId?: string | number;
	voteplaceId?: string | number;
	gender: string;
	bloodType: string;
	occupation: string;
	profession: string;
	population: string;
	academicProfile: string;
	description: string;
	observations: string;
	politicalState: string;
	role?: string;
	table?: string | number;
}
