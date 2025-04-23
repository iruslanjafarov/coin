import { FC } from 'react';

import { IItem } from '@/types/item';

import Link from 'next/link';
import Image from 'next/image';

import { ChevronRightIcon } from '@heroicons/react/24/solid';

/**
 * Item component that displays a single cryptocurrency/item
 * with its thumbnail, name, current price, and dynamic price coloring.
 *
 * The component is clickable and redirects to a detail page for the item.
 * It highlights price changes with color:
 * - Green when the price goes up
 * - Red when the price goes down
 * - Gray when unchanged
 *
 * Includes smooth color transitions for better UX.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.id - The unique identifier for the item.
 * @param props.thumbnail - The URL of the item's thumbnail image.
 * @param props.name - The name of the item.
 * @param props.price - The current price of the item.
 * @param props.prevPrice - The previous price of the item, used to detect and highlight price changes.
 * @returns A styled component representing a single item in the list.
 */

const Item: FC<IItem> = ({ id, thumbnail, name, price, prevPrice }) => {
	const isPriceUp = prevPrice !== undefined && price > prevPrice;
	const isPriceDown = prevPrice !== undefined && price < prevPrice;

	const priceColor = isPriceUp
		? 'text-green-500'
		: isPriceDown
		? 'text-red-500'
		: 'text-gray-500';

	return (
		<Link href={`/detail/${id}`}>
			<div className='w-full border rounded-2xl px-3 py-2 border-gray-200 flex justify-between items-center cursor-pointer transition-transform duration-200 hover:-translate-y-0.5'>
				<div className='flex items-center'>
					<Image
						src={thumbnail}
						alt={name}
						className='w-[42px] h-[42px]'
						width={42}
						height={42}
					/>
					<div className='h-[20px] mx-2 border-r border-gray-300' />
					<div className='tracking-tight truncate'>{name}</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className={`transition-colors duration-300 ${priceColor}`}>
						{price.toFixed(2)} $
					</div>
					<ChevronRightIcon className='size-5 text-gray-600' />
				</div>
			</div>
		</Link>
	);
};

export default Item;
