import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import { Nunito } from 'next/font/google';

import '@/styles/style.css';

export const metadata: Metadata = {
	title: 'Ruslan Jafarov',
	//description:
	//'Coin — безопасная платформа для торговли криптовалютами. Простой интерфейс для управления портфелем, отслеживания курсов и совершения сделок.',
	//keywords:
	//'криптовалюта, торговля криптовалютами обмен криптовалют, криптовалютные биржи',
	authors: [{ name: 'Ruslan Jafarov' }],
	//robots: 'index, follow',
};

const nunito = Nunito({ display: 'swap', subsets: ['latin'] });

interface IRootLayout {
	children: Readonly<ReactNode>;
}

/**
 * Корневой layout-компонент, оборачивающий всю страницу и добавляющий необходимые метаданные и структуру.
 * Включает шапку (Header) и оборачивает переданный контент внутри тега body.
 *
 * @param props - Свойства, передаваемые в компонент layout.
 * @param props.children - Дочерние компоненты или элементы, которые будут отрендерены внутри body.
 * @returns JSX-структура корневого layout.
 */

const RootLayout: FC<IRootLayout> = ({ children }) => {
	return (
		<html lang='ru'>
			<body className={`${nunito.className}`}>
				{/*<TopLoader />*/}
				{/*<Header />*/}
				<div className=''>{children}</div>
				{/*<Footer />*/}
			</body>
		</html>
	);
};

export default RootLayout;
