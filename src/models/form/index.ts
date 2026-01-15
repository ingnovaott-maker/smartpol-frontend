import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Voter } from '..';

export interface FormComponent {
	label?: string;
	required: boolean;
	name: keyof Voter;
	register: UseFormRegister<any>;
	errors: FieldErrors<any>;
	isDisabled?: boolean;
}
