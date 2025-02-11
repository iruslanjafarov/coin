'use client';

import useItems from '@/hooks/useItems';

import Spinner from '@/components/spinner';
import Container from '@/components/container';
import Item from '@/components/item';
import TransitionViewEvery from '@/components/transitionViewEvery';
import { useStore } from '@/store/store';

/**
 * Main component for displaying items with a loading spinner while data is being fetched.
 * It uses a custom hook `useItems` to retrieve the data and show a spinner during loading.
 *
 * @returns {JSX.Element} The main section of the page containing items or a loading spinner.
 */

const Main = () => {
	const { items } = useStore();
	const { loading } = useItems();

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
						{items?.map(({ id, thumbnail, name, price }) => (
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
