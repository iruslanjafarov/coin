'use client';

import { useCallback, useEffect, useState } from 'react';

import ky from 'ky';

/**
 * Custom hook to fetch data from an API using `ky` and manage loading state.
 * It fetches data from the provided URL and handles loading and error states.
 * 
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} The hook returns an object with two properties:
 * @returns {T | null} data - The fetched data or `null` if data is not yet available.
 * @returns {boolean} loading - The loading state indicating if the data is being fetched.
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
