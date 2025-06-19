'use client';

import { IItem } from '@/types/item';

import useHttp from './useHttp';
import useStore from '@/store/store';
import { useEffect } from 'react';

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

	const url: string = `https://spectrum-happy-apology.glitch.me/currencies/${id}`;

	const { data, loading } = useHttp<IItem>(url);

	useEffect(() => {
		clearItem();
	}, [id]);

	useEffect(() => {
		if (data) {
			setItemWithId(id, data);
		}
	}, [data, id]);

	useEffect(() => {
		if (data) {
			setItem(data);
		}
	}, [data, setItem]);

	return { loading };
};

export default useItem;
