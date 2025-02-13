import { FC } from 'react';

/**
 * Spinner component that renders a loading spinner with a golden border.
 * It uses a CSS animation to spin continuously, indicating a loading state.
 *
 * @returns The spinner component to be displayed during loading.
 */

const Spinner: FC = () => {
	return (
		<div className='w-16 h-16 border-4 border-t-[#FFD700] border-r-[#FFD700] rounded-full animate-spin'></div>
	);
};

export default Spinner;
