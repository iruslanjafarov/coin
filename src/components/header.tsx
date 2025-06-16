'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import Container from './container';
import Avatar from './avatar';

import Icon from '@/assets/icon.svg';

/**
 * Header component that displays the site logo (icon) and a link to the personal account.
 *
 * @returns The header of the page containing the logo and the personal account button.
 */

const Header = () => {
	const pathname: string = usePathname();

	const hideAccountRoutes: string[] = ['/login'];
	const hideAccountCondition: boolean = hideAccountRoutes.includes(pathname);

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
				{!hideAccountCondition && <Avatar />}
			</Container>
		</header>
	);
};

export default Header;
