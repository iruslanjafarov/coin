'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'nextjs-toploader/app';

import useStore from '@/store/store';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginSchema } from '@/schemas/auth';

import { Container } from '@/components/container';
import { FormInput } from '@/components/formInput';

/**
 * Компонент страницы входа.
 *
 * Отображает страницу входа, включая форму с полями электронной почты и пароля.
 *
 * @returns Контейнер с элементами формы для авторизации.
 */

const Login = () => {
	const { isAuth, setIsAuth, setName } = useStore();

	const [isWrong, setIsWrong] = useState(false);

	const router = useRouter();

	useEffect(() => {
		if (isAuth) {
			if (window.history.length <= 2) {
				router.replace('/');
			} else {
				router.back();
			}
		}
	}, [isAuth]);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<LoginSchema> = (data) => {
		setIsWrong(false);

		if (data?.email === 'jafarov@jafarov.store' && data?.password === '123') {
			setIsAuth(true);
			setName(data?.name);

			router.replace('/');
		} else {
			setIsWrong(true);
		}
	};

	return (
		<section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4'>
			<Container>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
					<FormInput
						type='text'
						name='name'
						label='Имя'
						placeholder='Введите имя'
						register={register}
						error={errors?.name}
					/>
					<FormInput
						type='email'
						name='email'
						label='Почта'
						placeholder='Введите почту'
						register={register}
						error={errors?.email}
					/>
					<FormInput
						type='password'
						name='password'
						label='Пароль'
						placeholder='Введите пароль'
						register={register}
						error={errors?.password}
					/>
					{isWrong && (
						<span className='text-sm text-red-500'>
							Неверный логин или пароль. Проверьте введённые данные.
						</span>
					)}
					<button
						type='submit'
						className='mt-2 px-4 py-2 rounded-md text-sm bg-[#FFD700] text-gray-700 cursor-pointer focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 disabled:opacity-70 disabled:text-gray-400 disabled:cursor-not-allowed'
						disabled={!isValid}
					>
						Войти
					</button>
				</form>
			</Container>
		</section>
	);
};

export default Login;
