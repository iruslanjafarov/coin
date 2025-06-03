import { IItem } from '@/types/item';

import { create } from 'zustand';

interface IStore {
	items: IItem[];
	item: IItem | null;
	itemHistory: number[];
	setItem: (item: IItem) => void;
	setItems: (items: IItem[]) => void;
	clearItem: () => void;
	randomizePrices: () => void;
	randomizeItemPrice: () => void;
}

/**
 * Zustand store for managing a list of items (e.g. cryptocurrencies),
 * as well as a selected item for detailed view, and its price history.
 *
 * Store state includes:
 * - `items`: the full list of cryptocurrency items.
 * - `item`: the currently selected item (used on detail pages).
 * - `itemHistory`: an array of past price values for the selected item, used for rendering charts.
 *
 * Store actions include:
 * - `setItems`: sets the full list of items.
 * - `setItem`: sets the currently selected item and resets `itemHistory`.
 * - `clearItem`: clears the selected item and price history.
 * - `randomizePrices`: simulates live price changes for all items in the list.
 * - `randomizeItemPrice`: simulates price fluctuation for the selected item and appends to `itemHistory`.
 *
 * @returns Zustand store with managed state and update functions for crypto UI behavior.
 */

const useStore = create<IStore>((set, get) => ({
	items: [],
	item: null,
	itemHistory: [],

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

	randomizeItemPrice: () => {
		const currentItem = get().item;
		if (!currentItem) return;

		const change = Math.floor(Math.random() * 10) - 5;
		const newPrice = Math.max(0.01, currentItem.price + change);
		const updatedItem = {
			...currentItem,
			prevPrice: currentItem.price,
			price: newPrice,
		};

		set((state) => ({
			item: updatedItem,
			itemHistory: [...state.itemHistory.slice(-9), newPrice],
		}));
	},
}));

export default useStore;
