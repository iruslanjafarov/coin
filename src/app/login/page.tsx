'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import Container from '@/components/container';
import FormInput from '@/components/formInput';

/**
 * Login page component.
 *
 * This component renders the login page, including a form with email and password fields.
 *
 * @returns A layout container with the login form elements.
 */

interface ILoginInputs {
	email: string;
	password: string;
}

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
		if (data?.email === 'admin@admin.ru' && data?.password === '123') {
			//логика аутентификации
		}
	};

	return (
		<section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4'>
			<Container>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
					<FormInput
						type='email'
						name='email'
						label='Почта'
						placeholder='Введите почту'
						register={register}
						required
						error={errors?.email}
					/>
					<FormInput
						type='password'
						name='password'
						label='Пароль'
						placeholder='Введите пароль'
						register={register}
						required
						error={errors?.password}
					/>

					<button
						type='submit'
						className='mt-2 px-4 py-2 cursor-pointer rounded-md border border-gray-300 text-sm text-gray-700 hover:border-[#FFD700] focus:outline-none focus:border-[#FFD700] transition-colors duration-200'
					>
						Войти
					</button>
				</form>
			</Container>
		</section>
	);
};

export default Login;
