import type { FC, ReactNode } from 'react';

interface IContainer {
	children: ReactNode;
	className?: string;
}

/**
 * Container component that wraps its children inside a div with a maximum width
 * and optional custom class name for styling.
 *
 * @param props - The properties passed to the container component.
 * @param props.children - The child components or elements to be rendered inside the container.
 * @param props.className - Optional custom class name for additional styling.
 * @returns The container component with children and custom class name.
 */

const Container: FC<IContainer> = ({ children, className }) => {
	return (
		<div className={`max-w-[1000px] w-full mx-auto ${className}`}>
			{children}
		</div>
	);
};

export default Container;
