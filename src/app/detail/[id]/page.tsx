'use client';

import { useEffect } from 'react';

import { useParams } from 'next/navigation';
import Image from 'next/image';

import useStore from '@/store/store';

import useItem from '@/hooks/useItem';

import { transformImagesLink } from '@/utils/supabase/transformImagesLink';

import { Container } from '@/components/container';
import { Chart } from '@/components/chart';

const getValidNumbers = (number: number): string =>
	number.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'USD',
	});

/**
 * Компонент страницы деталей, отображающий информацию о выбранной криптовалюте.
 *
 * Этот компонент получает текущий элемент на основе параметра маршрута (ID)
 * и отображает его название, цену, изображение и динамический график изменения цены.
 *
 * @returns JSX-разметка подробного представления элемента.
 */

const Detail = () => {
	const { id } = useParams<{ id: string }>();
	const { item, itemHistory, randomizeItemPrice, itemId } = useStore();
	const { loading } = useItem(id);

	useEffect(() => {
		const interval = setInterval(() => {
			randomizeItemPrice();
		}, 2000);

		return () => clearInterval(interval);
	}, [randomizeItemPrice]);

	const isLoadedItemCorrect = item && itemId === id;

	if (loading || !isLoadedItemCorrect) {
		return (
			<main>
				<section className='my-6'>
					<Container>
						<div className='flex justify-between items-center mt-12 animate-pulse'>
							<div className='flex flex-col gap-2'>
								<div className='h-9 w-48 bg-gray-200 rounded'></div>
								<div className='h-8 w-32 bg-gray-200 rounded'></div>
							</div>
							<div className='w-24 h-24 bg-gray-200 rounded-full'></div>
						</div>
						<div className='mt-6 p-4 rounded-2xl border border-gray-200 shadow-sm h-[518px] bg-gray-100 animate-pulse' />
					</Container>
				</section>
			</main>
		);
	}

	const {
		thumbnail,
		name,
		price,
		prevPrice,
		metrics: {
			marketCap = 0,
			volume24h = 0,
			circulatingSupply = 0,
			maxSupply = null,
		} = {},
		technical: { network = '-', algorithm = '-' } = {},
	} = item;

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

	const metricsList = [
		{
			value: marketCap ? getValidNumbers(marketCap) : '—',
			label: 'Капитализация',
		},
		{
			value: volume24h ? getValidNumbers(volume24h) : '—',
			label: 'Объем за сутки',
		},
		{
			value: circulatingSupply.toLocaleString('ru-RU') ?? '—',
			label: 'Монеты в обращении',
		},
		{
			value:
				maxSupply != null ? maxSupply.toLocaleString('ru-RU') : 'Не ограничено',
			label: 'Максимальное количество монет',
		},
		{ value: network ? network : '—', label: 'Сеть' },
		{ value: algorithm ? algorithm : '—', label: 'Алгоритм' },
	];

	return (
		<main>
			<section className='my-6'>
				<Container>
					<div className='flex justify-between items-center mt-12'>
						<div className='flex flex-col gap-1'>
							<h1 className='text-4xl tracking-tight truncate'>{name}</h1>
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
							src={transformImagesLink(thumbnail)}
							alt={name}
							className='w-24 h-24'
							width={128}
							height={128}
						/>
					</div>
					<div className='mt-6 rounded-2xl border border-gray-200 shadow-sm'>
						<Chart
							labels={generateTimestamps(itemHistory?.length)}
							data={itemHistory}
							colorState={colorState}
						/>
					</div>
				</Container>
			</section>
			<section>
				<Container className='mb-6'>
					<h2 className='text-2xl truncate'>Основные метрики</h2>
					<ul>
						{metricsList?.map(({ value, label }) => (
							<li
								key={label}
								className='flex justify-between items-center border-b border-b-gray-300 py-1'
							>
								<span className='text-lg text-gray-500 flex-1 min-w-0 truncate'>
									{label}
								</span>
								<span className='text-lg flex-shrink-0 truncate ml-2'>
									{value}
								</span>
							</li>
						))}
					</ul>
				</Container>
			</section>
		</main>
	);
};

export default Detail;
