import { IItem } from '@/types/item';

import { create } from 'zustand';

interface IStore {
	items: IItem[];
	item: IItem | null;
	setItem: (item: IItem) => void;
	setItems: (items: IItem[]) => void;
	clearItem: () => void;
	randomizePrices: () => void;
}

/**
 * Zustand store for managing a list of items (e.g. cryptocurrencies),
 * as well as a selected item (for detail view).
 *
 * Store includes:
 * - `items`: the full list of cryptocurrencies.
 * - `item`: the currently selected item (used on detail pages).
 * - `setItems`: sets the full list of items.
 * - `setItem`: sets a single item (e.g. for detail view).
 * - `clearItem`: clears the selected item to avoid stale state.
 * - `randomizePrices`: simulates real-time price changes by randomly increasing or decreasing prices.
 *
 * @returns Zustand store with state (`items`, `item`) and actions (`setItems`, `setItem`, `clearItem`, `randomizePrices`).
 */

const useStore = create<IStore>((set, get) => ({
	items: [],
	item: null,
	setItem: (item) => set({ item }),
	setItems: (items) => set({ items }),
	clearItem: () => set({ item: null }),
	randomizePrices: () => {
		const updated = get().items.map((item) => {
			const change = Math.floor(Math.random() * 10) - 5;
			const newPrice = Math.max(0.01, item.price + change);
			return {
				...item,
				prevPrice: item.price,
				price: newPrice,
			};
		});
		set({ items: updated });
	},
}));

export default useStore;
