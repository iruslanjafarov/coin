'use client';

import { useEffect } from 'react';

import useStore from '@/store/store';
import useItems from '@/hooks/useItems';

import { Spinner } from '@/components/spinner';
import { Container } from '@/components/container';
import Item from '@/components/main/item';
import { TransitionViewEvery } from '@/components/transitionViewEvery';

/**
 * Основной компонент для отображения списка элементов с индикатором загрузки во время получения данных.
 * Использует кастомный хук `useItems` для загрузки данных и отображает спиннер при загрузке.
 *
 * @returns Основной раздел страницы с элементами или индикатором загрузки.
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
