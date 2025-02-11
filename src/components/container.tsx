import type { FC, ReactNode } from 'react';

interface ICointaier {
	children: ReactNode;
	className?: string;
}

const Container: FC<ICointaier> = ({ children, className }) => {
	return (
		<div className={`max-w-[1000px] w-full mx-auto ${className}`}>
			{children}
		</div>
	);
};

export default Container;
