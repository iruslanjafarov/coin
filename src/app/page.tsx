'use client';

import { Metadata } from 'next';

import useItems from '@/hooks/useItems';

import Container from '@/components/container';
import Item from '@/components/item';

const Main = () => {
	const { data, loading } = useItems();

	return (
		<main>
			<div className='mt-6'>
				<Container>
					<div className='flex flex-col gap-3'>
						{data?.map(({ id, thumbnail, name, price }) => (
							<Item
								id={id}
								key={id}
								thumbnail={thumbnail}
								name={name}
								price={price}
							/>
						))}
					</div>
				</Container>
			</div>
		</main>
	);
};

export default Main;
