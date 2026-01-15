import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { Textarea } from '@material-tailwind/react';
import { MessageError } from '..';

interface Props extends FormComponent {}

export const TextAreaComponent = ({
	label,
	required,
	name: nameField,
	register,
	errors,
	isDisabled,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, onBlur, onChange, ref } = register(nameField, requiredField);
	return (
		<div>
			<label>{label}</label>
			<Textarea
				label={label}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				ref={ref}
				error={!!errors[name]}
				disabled={isDisabled}
				className='!border !border-gray-500 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900'
				labelProps={{
					className: 'hidden',
				}}
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
