'use client';

import useStore from '@/store/store';
import { usePathname } from 'next/navigation';

import Container from './container';
import Logo from './logo';

import AppleLogo from '@/assets/apple.svg';
import GooglePay from '@/assets/google.svg';
import Mir from '@/assets/mir.svg';
import Visa from '@/assets/visa.svg';
import MasterCard from '@/assets/mastercard.svg';
import TransitionViewEvery from './transitionViewEvery';

/**
 * Footer Component
 *
 * A functional React component that renders the footer section of the application.
 * Displays supported payment methods and a copyright notice.
 *
 * @returns The footer section containing payment method logos and a copyright notice.
 */

const Footer = () => {
	const { items } = useStore();
	const pathname: string = usePathname();

	const hideFooterRoutes: string[] = ['/login', '/detail'];
	const hideFooterCondition: boolean = hideFooterRoutes.some((route) =>
		pathname.startsWith(route)
	);

	if (!items.length || hideFooterCondition) {
		return null;
	}

	interface ILogos {
		src: string;
		alt: string;
		className?: string;
	}

	const Logos: ILogos[] = [
		{ src: AppleLogo, alt: 'ApplePay' },
		{ src: GooglePay, alt: 'GooglePay' },
		{ src: Mir, alt: 'Mir' },
		{ src: Visa, alt: 'Visa' },
		{ src: MasterCard, alt: 'MasterCard' },
	];

	return (
		<footer>
			<Container>
				<TransitionViewEvery index={items?.length + 1}>
					<div className='h-[200px] font-bold flex flex-col justify-between bg-black font-sans text-white my-6 p-6 rounded-lg'>
						<div className='items-center'>
							<div className='text-zinc-500 uppercase'>МЕТОДЫ ОПЛАТЫ</div>
							<div className='flex gap-3 mt-3 h-[30px]'>
								{Logos.map(({ src, alt }, idx) => (
									<Logo src={src} alt={alt} key={idx} />
								))}
							</div>
						</div>
						<div className='flex flex-col gap-3'>
							<hr className='h-[1px] border-t-0 bg-gray-300/25' />
							<h2 className='text-zinc-600 uppercase tracking-tight text-sm'>
								{`© ${new Date().getFullYear()} Ruslan Jafarov`}
							</h2>
						</div>
					</div>
				</TransitionViewEvery>
			</Container>
		</footer>
	);
};

export default Footer;
