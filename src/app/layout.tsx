import { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';

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
			<body
				className={`${nunito.className} flex w-full h-full justify-center items-center fixed`}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
