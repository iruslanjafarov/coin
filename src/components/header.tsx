'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

import Icon from '@/assets/icon.svg';

/**
 * Header component that displays the site logo (icon) and a link to the personal account.
 *
 * @returns The header of the page containing the logo and the personal account button.
 */

const Header = () => {
	const pathname: string = usePathname();

	const hideAccountButtonRoutes: string[] = ['/login', '/account'];
	const hideAccountButtonCondition: boolean =
		hideAccountButtonRoutes.includes(pathname);

	return (
		<header>
			<Container className='my-6 flex justify-between items-center'>
				<Link href={'/'}>
					<Image
						src={Icon}
						alt='Icon'
						className='w-[48px] h-[48px]'
						priority={true}
					/>
				</Link>
				{!hideAccountButtonCondition && (
					<Link
						href='/account'
						className='bg-[#FFD700]/70 px-3 py-2 rounded-lg flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer'
					>
						Личный кабинет
					</Link>
				)}
			</Container>
		</header>
	);
};

export default Header;
