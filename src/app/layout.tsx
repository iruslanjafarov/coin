import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Nunito } from 'next/font/google';

import Header from '@/components/header';

import '../styles/style.css';

/**
 * Metadata for the platform page, including title, description, and other SEO-related tags.
 */

export const metadata: Metadata = {
	title: 'Coin | Платформа для торговли криптовалютами',
	description:
		'Coin — безопасная платформа для торговли криптовалютами. Простой интерфейс для управления портфелем, отслеживания курсов и совершения сделок.',
	keywords:
		'криптовалюта, торговля криптовалютами обмен криптовалют, криптовалютные биржи',
	authors: [{ name: 'Ruslan Jafarov' }],
	robots: 'index, follow',
};

/**
 * Global font configuration using Nunito from Google Fonts.
 */

const nunito = Nunito({ display: 'swap', subsets: ['latin'] });

/**
 * Root layout component that wraps the entire page with necessary meta information and structure.
 * It includes the header and passes the children content within the body.
 *
 * @param props - The properties passed to the layout component.
 * @param props.children - The child components or elements to be rendered within the body.
 * @returns The JSX structure of the root layout.
 */

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
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
			<body className={nunito.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
