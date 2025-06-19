import { FC } from 'react';

import { IItem } from '@/types/item';

import Link from 'next/link';
import Image from 'next/image';

import { ChevronRightIcon } from '@heroicons/react/24/solid';

/**
 * Компонент Item, отображающий одну криптовалюту или элемент
 * с миниатюрой, названием, текущей ценой и динамическим цветом цены.
 *
 * Компонент кликабельный и ведёт на страницу с деталями элемента.
 * Подсвечивает изменение цены цветом:
 * - зелёным при росте,
 * - красным при падении,
 * - серым при отсутствии изменений.
 *
 * Включены плавные переходы цвета для лучшего UX.
 *
 * @param props - Свойства, передаваемые компоненту.
 * @param props.id - Уникальный идентификатор элемента.
 * @param props.thumbnail - URL миниатюры элемента.
 * @param props.name - Название элемента.
 * @param props.price - Текущая цена элемента.
 * @param props.prevPrice - Предыдущая цена, используется для определения и подсветки изменений цены.
 * @returns Стилизованный компонент, представляющий один элемент списка.
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
					<ChevronRightIcon
						className={`size-5 transition-colors duration-300 ${priceColor}`}
					/>
				</div>
			</div>
		</Link>
	);
};

export default Item;
