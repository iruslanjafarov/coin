import type { FC, ReactNode } from 'react';

import '@/styles/style.css';

interface IAccountLayout {
	children: Readonly<ReactNode>;
}

/**
 * Компонент `AccountLayout`, используемый для обёртки страниц, связанных с личным кабинетом.
 *
 * @param children - React-элементы, которые будут отображаться внутри макета.
 * @returns Отрисованные дочерние элементы.
 */

const AccountLayout: FC<IAccountLayout> = ({ children }) => {
	return <div className='overflow-hidden px-0'>{children}</div>;
};

export default AccountLayout;
