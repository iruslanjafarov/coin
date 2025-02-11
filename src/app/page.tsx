'use client';

import useItems from '@/hooks/useItems';

import Spinner from '@/components/spinner';
import Container from '@/components/container';
import Item from '@/components/item';
import TransitionViewEvery from '@/components/transitionViewEvery';

const Main = () => {
	const { data, loading } = useItems();

	return (
		<main>
			<div className='mt-6'>
				<Container>
					{loading && (
						<div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
							<Spinner />
						</div>
					)}
					<div className='flex flex-col gap-3'>
						{data?.map(({ id, thumbnail, name, price }) => (
							<TransitionViewEvery index={id} key={id}>
								<Item id={id} thumbnail={thumbnail} name={name} price={price} />
							</TransitionViewEvery>
						))}
					</div>
				</Container>
			</div>
		</main>
	);
};

export default Main;
