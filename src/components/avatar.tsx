'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import useStore from '@/store/store';

import { Menu, MenuButton, MenuItems } from '@headlessui/react';

import { AnimatePresence } from 'framer-motion';

import TransitionViewEvery from './transitionViewEvery';
import AvatarButton from './avatarButton';

import AvatarLogo from '@/assets/avatar.jpg';

/**
 * Компонент аватара пользователя с выпадающим меню.
 *
 * Отображает аватар с меню, в котором есть ссылки на личный кабинет и выход.
 * Кнопки меню меняются в зависимости от состояния авторизации пользователя.
 *
 * @returns JSX-элемент, представляющий аватар с выпадающим меню.
 */

const Avatar = () => {
	const router = useRouter();

	const { isAuth, setIsAuth } = useStore();

	const handleAccount = () => {
		router.push(isAuth ? '/account' : '/login');
	};

	const handleLogout = () => {
		setIsAuth(false);

		router.replace('/');
	};

	const avatarButtons = [
		{ label: 'Личный кабинет', onClick: handleAccount },
		...(isAuth ? [{ label: 'Выйти', onClick: handleLogout }] : []),
	];

	return (
		<Menu as='div' className='relative inline-block text-left'>
			{({ open, close }) => (
				<>
					<MenuButton className='rounded-full focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2'>
						<Image
							src={AvatarLogo}
							alt='Avatar'
							className='rounded-full cursor-pointer w-10 h-10 object-cover'
						/>
					</MenuButton>

					<AnimatePresence>
						{open && (
							<TransitionViewEvery index={0}>
								<MenuItems
									static
									className='absolute top-full right-0 w-48 bg-white rounded-xl border border-gray-200 focus:outline-none z-50'
								>
									{avatarButtons.map(({ label, onClick }) => (
										<AvatarButton
											key={label}
											onClick={() => {
												onClick();
												close();
											}}
										>
											{label}
										</AvatarButton>
									))}
								</MenuItems>
							</TransitionViewEvery>
						)}
					</AnimatePresence>
				</>
			)}
		</Menu>
	);
};

export default Avatar;
