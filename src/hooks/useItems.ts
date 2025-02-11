'use client';

import { IItem } from '@/types/item';

import useHttp from './useHttp';

const useItems = () => {
	const url: string = 'https://spectrum-happy-apology.glitch.me/currencies';

	const { data, loading } = useHttp<IItem[]>(url);

	return { data, loading };
};

export default useItems;
