'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from './container';
import { Avatar } from './avatar';

import Icon from '@/assets/icon.svg';

/**
 * Компонент Header, отображающий логотип сайта (иконку) и ссылку на личный кабинет.
 *
 * @returns Шапка страницы с логотипом и кнопкой личного кабинета.
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
