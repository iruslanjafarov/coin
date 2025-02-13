'use client';

import { IItem } from '@/types/item';

import useHttp from './useHttp';
import { useStore } from '@/store/store';
import { useEffect } from 'react';

/**
 * Custom hook to fetch a list of items (currencies) using the `useHttp` hook.
 * This hook provides the data and loading state for the list of items.
 *
 * @returns The hook returns an object with the following property:
 * @returns {loading} - The loading state indicating if the data is being fetched.
 */

const useItems = () => {
	const { setItems } = useStore();

	const url: string = 'https://spectrum-happy-apology.glitch.me/currencies';

	const { data, loading } = useHttp<IItem[]>(url);

	useEffect(() => {
		setItems(data);
	}, [data, setItems]);

	return { loading };
};

export default useItems;
