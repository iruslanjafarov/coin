'use client';

import { useCallback, useEffect, useState } from 'react';

import ky from 'ky';

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
