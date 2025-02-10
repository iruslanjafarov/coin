import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Header from '@/components/header';

import '../styles/style.css';

export const metadata: Metadata = {
	title: 'Coin | Платформа для торговли криптовалютами',
	description:
		'Coin — безопасная платформа для торговли криптовалютами. Простой интерфейс для управления портфелем, отслеживания курсов и совершения сделок.',
	keywords:
		'криптовалюта, торговля криптовалютами, обмен криптовалют, криптовалютные биржи',
	authors: [{ name: 'Ruslan Jafarov' }],
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
