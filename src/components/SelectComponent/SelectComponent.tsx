import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
// import { Option, Select } from '@material-tailwind/react';
import { MessageError } from '../MessageError';
import { UseFormSetValue } from 'react-hook-form';
import { useEffect } from 'react';
import Select from 'react-select';
interface Option {
	value: string | undefined | number;
	label: string;
}
interface Props extends FormComponent {
	options: any[];
	isEvent?: boolean;
	searchData?: (id: string) => void;
	setValue: UseFormSetValue<any>;
	value?: string | undefined | number;
	isLoading?: boolean;
}
export const SelectComponent = ({
	label,
	options,
	required,
	name: nameField,
	setValue,
	register,
	errors,
	isEvent,
	searchData,
	isDisabled,
	value,
	isLoading,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, ref } = register(nameField, requiredField);

	const handleChange = (val: Option) => {
		if (val.value !== '') {
			setValue(nameField, val.value, { shouldValidate: true });
			if (isEvent && searchData) {
				if (typeof val.value === 'string') searchData(val.value);
			}
		}
	};

	useEffect(() => {
		if (isEvent && value !== '') handleChange({ value, label: '' });
	}, [value]);

	return (
		<div>
			<label>{label}</label>
			<Select
				name={name}
				placeholder='Seleccione...'
				ref={ref}
				options={options}
				isDisabled={isDisabled}
				isLoading={isLoading}
				onChange={handleChange}
				value={options.filter(function (option) {
					return option.value === value;
				})}
			/>
			{/* <Select
				label={label}
				name={name}
				ref={ref}
				animate={{
					mount: { y: 0 },
					unmount: { y: 25 },
				}}
				onChange={handleChange}
				error={!!errors[name]}
				disabled={isDisabled}
				value={value + ''}
			>
				{options?.map(({ name, id }) => (
					<Option key={id} value={id + ''}>
						{name}
					</Option>
				))}
			</Select> */}
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
