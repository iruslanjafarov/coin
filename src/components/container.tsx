import type { FC, ReactNode } from 'react';

interface ICointaier {
	children: ReactNode;
	className?: string;
}

/**
 * Container component that wraps its children inside a div with a maximum width
 * and optional custom class name for styling.
 *
 * @param {ICointaier} props - The properties passed to the container component.
 * @param {ReactNode} props.children - The child components or elements to be rendered inside the container.
 * @param {string} [props.className] - Optional custom class name for additional styling.
 * @returns {JSX.Element} The container component with children and custom class name.
 */

const Container: FC<ICointaier> = ({ children, className }) => {
	return (
		<div className={`max-w-[1000px] w-full mx-auto ${className}`}>
			{children}
		</div>
	);
};

export default Container;
