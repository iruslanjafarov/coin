import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import Header from '@/components/header';

import '../styles/style.css';

export const metadata: Metadata = {
	title: 'Coin',
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
