import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

import Icon from '@/assets/icon.svg';

/**
 * Header component that displays the site logo (icon) and a link to the personal account.
 * The logo is rendered as an image and the personal account button is wrapped in a link.
 *
 * @returns The header of the page containing the logo and the personal account button.
 */

const Header = () => {
	return (
		<header>
			<Container className='my-6 flex justify-between items-center'>
				<Image
					src={Icon}
					alt='Icon'
					className='w-[48px] h-[48px]'
					priority={true}
				/>
				<Link href={'/'}>
					<button className='bg-[#FFD700]/70 px-3 py-2 rounded-lg flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer'>
						Личный кабинет
					</button>
				</Link>
			</Container>
		</header>
	);
};

export default Header;
