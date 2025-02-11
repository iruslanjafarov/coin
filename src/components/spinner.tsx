import { FC } from 'react';

const Spinner: FC = () => {
	return (
		<div className='w-16 h-16 border-4 border-t-[#FFD700] border-r-[#FFD700] rounded-full animate-spin'></div>
	);
};

export default Spinner;
