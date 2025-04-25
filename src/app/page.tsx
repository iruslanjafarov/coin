'use client';

import TransitionViewEvery from '@/components/transitionViewEvery';

const Main = () => {
	return (
		<TransitionViewEvery index={2}>
			<h1 className='text-5xl font-bold bg-black text-white p-2 rounded-lg'>
				Продукт в разработке
			</h1>
		</TransitionViewEvery>
	);
};

export default Main;
