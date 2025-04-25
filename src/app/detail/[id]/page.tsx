'use client';

import Container from '@/components/container';
import Item from '@/components/main/item';
import Spinner from '@/components/spinner';
import useItem from '@/hooks/useItem';
import useStore from '@/store/store';
import { useParams } from 'next/navigation';

const Detail = () => {
	const { id: idParam } = useParams<{ id: string }>();
	const { item } = useStore();
	const { loading } = useItem(idParam);

	return (
		<main>
			<Container>
				{loading || !item ? (
					<div className='w-full h-full flex justify-center items-center py-12'>
						<Spinner />
					</div>
				) : (
					<Item
						id={item?.id}
						thumbnail={item?.thumbnail}
						name={item?.name}
						price={item?.price}
					/>
				)}
			</Container>
		</main>
	);
};

export default Detail;
