'use client';

import { useState } from 'react';

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
	const [isWrong, setIsWrong] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
		setIsWrong(false);

		if (data?.email === 'admin@admin.ru' && data?.password === '123') {
			localStorage.setItem('isAuth', 'true');
		} else {
			setIsWrong(true);
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
					{isWrong && (
						<span className='text-sm text-red-500'>
							Неверный логин или пароль. Проверьте введённые данные.
						</span>
					)}
					<button
						type='submit'
						className='mt-2 px-4 bg-[#FFD700] py-2 cursor-pointer rounded-md text-sm text-gray-700 focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2'
					>
						Войти
					</button>
				</form>
			</Container>
		</section>
	);
};

export default Login;
