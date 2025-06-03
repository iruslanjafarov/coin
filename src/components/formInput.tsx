'use client';

import {
	FieldValues,
	Path,
	UseFormRegister,
	FieldError,
} from 'react-hook-form';

interface FormInputProps<T extends FieldValues> {
	type: 'email' | 'password';
	name: Path<T>;
	label?: string;
	placeholder?: string;
	register: UseFormRegister<T>;
	required?: boolean;
	error?: FieldError;
}

/**
 * Reusable input component integrated with react-hook-form.
 *
 * @param type - Input type (e.g., "email", "password").
 * @param name - Name of the field, matches key in form values.
 * @param label - Optional field label.
 * @param placeholder - Optional placeholder text.
 * @param register - react-hook-form's register function.
 * @param required - Whether the field is required.
 * @param error - Optional error object for validation state.
 * @returns Controlled input connected to react-hook-form.
 */

const FormInput = <T extends FieldValues>({
	type,
	name,
	label,
	placeholder,
	register,
	required = false,
	error,
}: FormInputProps<T>) => {
	return (
		<div className='flex flex-col space-y-1'>
			{label && (
				<label
					className={`text-gray-600 ${error ? 'text-red-500' : ''}`}
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<input
				type={type}
				id={name}
				placeholder={placeholder}
				{...register(name, {
					required: required ? `Поле '${label || name}' обязательное` : false,
				})}
				className={`px-3 py-2 rounded-md 
          border ${
						error ? 'border-red-500' : 'border-gray-300'
					} focus:border-[#FFD700] focus:outline-none transition-colors duration-200`}
			/>
			{error && <span className='text-sm text-red-500'>{error.message}</span>}
		</div>
	);
};

export default FormInput;
