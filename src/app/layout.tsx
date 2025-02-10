import type { ReactNode } from 'react';
import type { Metadata } from 'next';

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
			<body>{children}</body>
		</html>
	);
}
