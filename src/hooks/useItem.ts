'use client';

//import { IItem } from '@/types/item';

//import useHttp from './useHttp';
import useStore from '@/store/store';
import { useEffect, useState } from 'react';
import { getItemById } from './useDatabase';

/**
 * Кастомный хук для загрузки одного элемента (например, криптовалюты) по его ID.
 * При смене ID очищает предыдущий выбранный элемент из Zustand-хранилища, чтобы не показывать устаревшие данные.
 * Затем выполняет запрос через `useHttp` и обновляет хранилище полученным элементом.
 *
 * @param id - Строка с уникальным идентификатором элемента для загрузки.
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useItem = (id: string) => {
	const { clearItem, setItem, setItemWithId } = useStore();
	const [loading, setLoading] = useState(false);

	//const url: string = `https://spectrum-happy-apology.glitch.me/currencies/${id}`;

	//const { data, loading } = useHttp<IItem>(url);

	useEffect(() => {
		clearItem();

		const item = getItemById(id);

		if (item) {
			setItem(item);
			setItemWithId(id, item);
		}
		setLoading(false);
	}, [id, clearItem, setItem, setItemWithId]);

	return { loading };
};

export default useItem;
