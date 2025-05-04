import { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';

import Footer from './footer';

import '@/styles/style.css';

export const metadata: Metadata = {
	title: 'Ruslan Jafarov',
	description: 'Ruslan Jafarov',
	keywords: 'Ruslan Jafarov',
	authors: [{ name: 'Ruslan Jafarov' }],
	robots: 'index, follow',
};

const nunito = Nunito({ display: 'swap', subsets: ['latin'] });

interface IRootLayout {
	children: Readonly<ReactNode>;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
	return (
		<html lang='ru'>
			<body className={`${nunito.className} min-h-screen flex flex-col`}>
				<main className='flex-grow flex items-center justify-center'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
