'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { AnimatePresence } from 'framer-motion';

import TransitionViewEvery from './transitionViewEvery';

import AvatarLogo from '@/assets/avatar.jpg';

/**
 * Avatar component that renders a user avatar with a dropdown menu.
 *
 * @returns JSX.Element representing the avatar with a dropdown menu.
 */

const Avatar = () => {
	const router = useRouter();

	const handleAccount = () => {
		if (localStorage.getItem('isAuth') === 'true') {
			router.push('/account');
		} else {
			router.push('/login');
		}
	};

	return (
		<Menu as='div' className='relative inline-block text-left'>
			{({ open }) => (
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
									className='absolute top-full right-0 w-48 rounded-xl border border-gray-200 focus:outline-none z-50'
								>
									<MenuItem>
										<button
											className='block px-4 py-2 w-full text-left text-sm tracking-tight hover:bg-gray-100 rounded-xl cursor-pointer transition-colors duration-200'
											onClick={handleAccount}
										>
											Личный кабинет
										</button>
									</MenuItem>
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
