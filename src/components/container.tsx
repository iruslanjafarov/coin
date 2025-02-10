import type { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
	return <div className='max-w-[1000px] w-full mx-auto'>{children}</div>;
};

export default Container;
