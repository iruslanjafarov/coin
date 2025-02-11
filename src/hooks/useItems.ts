'use client';

import { IItem } from '@/types/item';

import useHttp from './useHttp';

/**
 * Custom hook to fetch a list of items (currencies) using the `useHttp` hook.
 * This hook provides the data and loading state for the list of items.
 *
 * @returns {Object} The hook returns an object with two properties:
 * @returns {IItem[] | null} data - The list of items (currencies) or `null` if the data is not yet available.
 * @returns {boolean} loading - The loading state indicating if the data is being fetched.
 */

const useItems = () => {
	const url: string = 'https://spectrum-happy-apology.glitch.me/currencies';

	const { data, loading } = useHttp<IItem[]>(url);

	return { data, loading };
};

export default useItems;
