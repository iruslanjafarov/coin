import { FC } from 'react';
import { IItem } from '@/types/item';

import Link from 'next/link';
import Image from 'next/image';

import { ChevronRightIcon } from '@heroicons/react/24/solid';

/**
 * Item component that displays a single item with its thumbnail, name, and price.
 * The component is clickable, redirecting to the item's detail page.
 *
 * @param {IItem} props - The properties for the item.
 * @param {string} props.id - The unique identifier for the item.
 * @param {string} props.thumbnail - The URL of the item's thumbnail image.
 * @param {string} props.name - The name of the item.
 * @param {number} props.price - The price of the item.
 * @returns {JSX.Element} The item component with a link to its detail page.
 */

const Item: FC<IItem> = ({ id, thumbnail, name, price }) => {
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
					<div className='tracking-tight'>{name}</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='text-gray-500'>{price} $</div>
					<ChevronRightIcon className='size-5 text-gray-600' />
				</div>
			</div>
		</Link>
	);
};

export default Item;
