'use client';

import { useEffect } from 'react';

import { useParams } from 'next/navigation';
import Image from 'next/image';

import useStore from '@/store/store';

import useItem from '@/hooks/useItem';

import Container from '@/components/container';
import Spinner from '@/components/spinner';
import Chart from '@/components/chart';

/**
 * Detail page component that displays information about a selected cryptocurrency.
 *
 * This component retrieves the current item based on the route parameter (ID),
 * and displays its name, price, image, and a dynamic chart of its price history.
 *
 * Features:
 * - Periodically updates the item's price every 2 seconds to simulate real-time changes.
 * - Displays a line chart with color based on price direction:
 *   - Green for price increase
 *   - Red for price decrease
 *   - Gray for unchanged price
 * - Renders a loading spinner while fetching item data
 *
 * Dependencies:
 * - Zustand store for managing item and its history
 * - `useItem` hook to fetch item data based on ID
 * - `Chart` component for rendering price visualization
 *
 * @returns The JSX layout for the detailed item view.
 */

const Detail = () => {
	const { id } = useParams<{ id: string }>();
	const { item, itemHistory, randomizeItemPrice } = useStore();
	const { loading } = useItem(id);

	useEffect(() => {
		const interval = setInterval(() => {
			randomizeItemPrice();
		}, 2000);

		return () => clearInterval(interval);
	}, [randomizeItemPrice]);

	if (loading || !item) {
		return (
			<main>
				<Container>
					<div className='w-full h-full flex justify-center items-center py-12'>
						<Spinner />
					</div>
				</Container>
			</main>
		);
	}

	const { thumbnail, name, price, prevPrice } = item;

	const isUp = prevPrice !== undefined && price > prevPrice;
	const isDown = prevPrice !== undefined && price < prevPrice;

	const generateTimestamps = (count: number) => {
		const now = new Date();
		return Array.from({ length: count }, (_, i) => {
			const d = new Date(now.getTime() - (count - 1 - i) * 2000);
			return d.toLocaleTimeString('ru-RU', {
				minute: '2-digit',
				second: '2-digit',
			});
		});
	};

	let colorState: 'up' | 'down' | 'same' = 'same';

	if (prevPrice !== undefined) {
		if (price > prevPrice) colorState = 'up';
		else if (price < prevPrice) colorState = 'down';
	}

	return (
		<main>
			<section className='my-6'>
				<Container>
					<div className='flex justify-between items-center mt-12'>
						<div className='flex flex-col gap-1'>
							<div className='text-4xl tracking-tight truncate'>{name}</div>
							<div
								className={`text-3xl tracking-tight truncate transition-colors duration-300 w-fit py-0.5 px-2 rounded-md ${
									isUp
										? 'bg-green-100 text-green-600'
										: isDown
										? 'bg-red-100 text-red-600'
										: 'bg-gray-100 text-gray-500'
								}`}
							>
								{price.toFixed(2)} $
							</div>
						</div>
						<Image
							src={thumbnail}
							alt={name}
							className='w-24 h-24'
							width={128}
							height={128}
						/>
					</div>
					<div className='mt-6 p-4 rounded-2xl border border-gray-200 shadow-sm'>
						<Chart
							labels={generateTimestamps(itemHistory?.length)}
							data={itemHistory}
							colorState={colorState}
						/>
					</div>
				</Container>
			</section>
		</main>
	);
};

export default Detail;
