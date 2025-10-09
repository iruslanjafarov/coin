'use client';

import { useEffect, useState } from 'react';

import useStore from '@/store/store';

import { supabase } from '@/utils/supabase/supabase';

/**
 * Кастомный хук для загрузки списка элементов (валют).
 * Предоставляет данные и состояние загрузки для списка элементов.
 *
 * @returns Объект с полем `loading`, указывающим на процесс загрузки.
 */

const useItems = () => {
	const [loading, setLoading] = useState(false);

	const { setItems } = useStore();

	useEffect(() => {
		let mounted = true;

		const fetchData = async () => {
			setLoading(true);

			const { data, error } = await supabase.from('currencies').select('*');

			if (!mounted) return;

			if (error) {
				console.error(error);
			} else {
				setItems(data);
			}

			setLoading(false);
		};

		fetchData();

		return () => {
			mounted = false;
		};
	}, [setItems]);

	return { loading };
};

export default useItems;
