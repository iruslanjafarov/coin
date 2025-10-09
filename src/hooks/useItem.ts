'use client';

import { useEffect, useState } from 'react';

import useStore from '@/store/store';
import { supabase } from '@/utils/supabase/supabase';

/**
 * Кастомный хук для загрузки одного элемента (например, криптовалюты) по его ID.
 * При смене ID очищает предыдущий выбранный элемент из Zustand-хранилища, чтобы не показывать устаревшие данные.
 * Затем выполняет запрос через и обновляет хранилище полученным элементом.
 *
 * @param id - Строка с уникальным идентификатором элемента для загрузки.
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useItem = (id: string) => {
	const [loading, setLoading] = useState(false);

	const { setItem, clearItem, setItemWithId } = useStore();

	useEffect(() => {
		clearItem();

		let mounted = true;

		const fetchData = async () => {
			setLoading(true);

			const { data, error } = await supabase
				.from('currencies')
				.select('*')
				.eq('id', id)
				.single();

			if (!mounted) return;

			if (error) {
				console.error(error);
			} else {
				setItemWithId(id, data);
				setItem(data);
			}

			setLoading(false);
		};

		fetchData();

		return () => {
			mounted = false;
		};
	}, [id, setItem, clearItem, setItemWithId]);

	return { loading };
};

export default useItem;
