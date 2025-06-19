'use client';

import { useCallback, useEffect, useState } from 'react';

import ky from 'ky';

/**
 * Кастомный хук для загрузки данных с API с использованием `ky` и управления состоянием загрузки.
 * Выполняет запрос по переданному URL и обрабатывает состояния загрузки и ошибок.
 *
 * @param url - URL для получения данных.
 * @returns Объект с полями:
 * - `data`: загруженные данные или null, если данные ещё не получены.
 * - `loading`: булевое значение, показывающее состояние загрузки.
 */

const useHttp = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);

			const request: T = await ky.get(url).json();

			setData(request);

			setLoading(false);
		} catch (error) {
			console.error(error instanceof Error ? error.message : 'Unknown error');
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, loading };
};

export default useHttp;
