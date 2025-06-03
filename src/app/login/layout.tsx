import type { FC, ReactNode } from 'react';

import '@/styles/style.css';

interface ILoginLayout {
	children: Readonly<ReactNode>;
}

/**
 * LoginLayout component used to wrap the login page.
 *
 * This layout component simply returns the passed children without any additional layout structure.
 * Useful for isolating the login route from the main application layout (e.g., without a header or sidebar).
 *
 * @param children - The React nodes to be rendered within the layout.
 * @returns The rendered children.
 */

const LoginLayout: FC<ILoginLayout> = ({ children }) => {
	return <div className='overflow-hidden px-0'>{children}</div>;
};

export default LoginLayout;
