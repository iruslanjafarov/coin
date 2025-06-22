'use client';

import {
	FieldValues,
	Path,
	UseFormRegister,
	FieldError,
} from 'react-hook-form';

interface FormInputProps<T extends FieldValues> {
	type: 'text' | 'email' | 'password';
	name: Path<T>;
	label?: string;
	placeholder?: string;
	register: UseFormRegister<T>;
	required?: boolean;
	error?: FieldError;
}

/**
 * Повторно используемый компонент поля ввода, интегрированный с react-hook-form.
 *
 * @param type - Тип поля ввода.
 * @param name - Имя поля, соответствующее ключу в данных формы.
 * @param label - Опциональная метка поля.
 * @param placeholder - Опциональный плейсхолдер.
 * @param register - Функция регистрации из react-hook-form.
 * @param required - Флаг обязательности поля.
 * @param error - Опциональный объект ошибки для отображения состояния валидации.
 * @returns Контролируемое поле ввода, связанное с react-hook-form.
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
