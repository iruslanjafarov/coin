'use client';

import { useEffect } from 'react';

import useStore from '@/store/store';
import useItems from '@/hooks/useItems';

import Spinner from '@/components/spinner';
import Container from '@/components/container';
import Item from '@/components/main/item';
import TransitionViewEvery from '@/components/transitionViewEvery';

/**
 * Main component for displaying items with a loading spinner while data is being fetched.
 * It uses a custom hook `useItems` to retrieve the data and show a spinner during loading.
 *
 * @returns The main section of the page containing items or a loading spinner.
 */

const Main = () => {
	const { items, randomizePrices } = useStore();
	const { loading } = useItems();

	useEffect(() => {
		const interval = setInterval(() => {
			randomizePrices();
		}, 2000);

		return () => clearInterval(interval);
	}, [randomizePrices]);

	return (
		<main>
			<section className='my-6'>
				<Container>
					{loading && (
						<div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
							<Spinner />
						</div>
					)}
					<div className='flex flex-col gap-3'>
						{items?.map(({ id, thumbnail, name, price, prevPrice }) => (
							<TransitionViewEvery index={id} key={id}>
								<Item
									id={id}
									thumbnail={thumbnail}
									name={name}
									price={price}
									prevPrice={prevPrice}
								/>
							</TransitionViewEvery>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
};

export default Main;
