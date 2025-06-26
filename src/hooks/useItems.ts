'use client';

import { IItem } from '@/types/item';

import useHttp from './useHttp';
import useStore from '@/store/store';
import { useEffect } from 'react';

/**
 * Кастомный хук для загрузки списка элементов (валют) с помощью хука `useHttp`.
 * Предоставляет данные и состояние загрузки для списка элементов.
 *
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useItems = () => {
	const { setItems } = useStore();

	const url: string = 'https://spectrum-happy-apology.glitch.me/currencies';

	const { data, loading } = useHttp<IItem[]>(url);

	useEffect(() => {
		if (data) {
			setItems(data);
		}
	}, [data, setItems]);

	return { loading };
};

export default useItems;
