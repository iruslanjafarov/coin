import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import { Nunito } from 'next/font/google';

import TopLoader from '@/components/topLoader';
import Header from '@/components/header';
import Footer from '@/components/footer';

import '@/styles/style.css';

export const metadata: Metadata = {
	title: 'Coin',
	description:
		'Coin — безопасная платформа для торговли криптовалютами. Простой интерфейс для управления портфелем, отслеживания курсов и совершения сделок.',
	keywords:
		'криптовалюта, торговля криптовалютами обмен криптовалют, криптовалютные биржи',
	authors: [{ name: 'Ruslan Jafarov' }],
	robots: 'index, follow',
};

const nunito = Nunito({ display: 'swap', subsets: ['latin'] });

interface IRootLayout {
	children: Readonly<ReactNode>;
}

/**
 * Root layout component that wraps the entire page with necessary meta information and structure.
 * It includes the header and passes the children content within the body.
 *
 * @param props - The properties passed to the layout component.
 * @param props.children - The child components or elements to be rendered within the body.
 * @returns The JSX structure of the root layout.
 */

const RootLayout: FC<IRootLayout> = ({ children }) => {
	return (
		<html lang='ru'>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
			</head>
			<body className={`${nunito.className} flex flex-col min-h-screen px-6`}>
				<TopLoader />
				<Header />
				<div className='flex-1'>{children}</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
