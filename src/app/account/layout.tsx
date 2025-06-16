import type { FC, ReactNode } from 'react';

import '@/styles/style.css';

interface IAccountLayout {
	children: Readonly<ReactNode>;
}

/**
 * AccountLayout component used to wrap the account-related pages.
 *
 * @param children - The React nodes to be rendered within the layout.
 * @returns The rendered children.
 */

const AccountLayout: FC<IAccountLayout> = ({ children }) => {
	return <div className='overflow-hidden px-0'>{children}</div>;
};

export default AccountLayout;
