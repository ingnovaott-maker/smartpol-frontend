import { FormComponent } from '@/models';
import { validationNumber } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@material-tailwind/react';
import { MessageError } from '..';

interface Props extends FormComponent {
	searchData: (identification: string) => void;
}
export const InputSearchButton = ({
	label,
	required,
	name: nameField,
	register,
	errors,
	searchData,
	isDisabled,
}: Props) => {
	const requiredField = required
		? {
				...validationNumber,
				required: { value: true, message: 'Campo requerido' },
		  }
		: validationNumber;
	const { name, onBlur, onChange, ref } = register(nameField, requiredField);

	const handleBlur = (event: any) => {
		onBlur(event);
		const { value } = event.target;
		if (value !== '') searchData(value);
	};
	return (
		<div>
			<label>{label}</label>
			<div className='relative flex w-full'>
				<Input
					label={label}
					name={name}
					size='lg'
					onBlur={handleBlur}
					onChange={onChange}
					inputRef={ref}
					error={!!errors[name]}
					className='pr-[100px] !border !border-gray-500 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900'
					labelProps={{
						className: 'hidden',
					}}
					containerProps={{
						className: 'min-w-0',
					}}
					disabled={isDisabled}
					placeholder={label}
				/>
			</div>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
