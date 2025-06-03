'use client';

import { IItem } from '@/types/item';

import useHttp from './useHttp';
import useStore from '@/store/store';
import { useEffect } from 'react';

/**
 * Custom hook for fetching a single item (e.g., a cryptocurrency) based on its ID.
 * When the ID changes, it clears the previously selected item from the Zustand store to prevent showing outdated data.
 * It then performs a fetch using `useHttp` and updates the store with the retrieved item.
 *
 * @param id - A string representing the unique ID of the item to fetch.
 * @returns An object containing the `loading` boolean, which indicates whether the fetch operation is in progress.
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
