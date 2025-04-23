import { IItem } from '@/types/item';

import { create } from 'zustand';

interface IStore {
	items: IItem[];
	setItems: (items: IItem[]) => void;
	randomizePrices: () => void;
}

/**
 * Zustand store for managing a list of items (e.g. cryptocurrencies).
 * Includes functionality to update prices dynamically to simulate live market changes.
 *
 * @returns Zustand store with state (`items`) and actions (`setItems`, `randomizePrices`).
 */

const useStore = create<IStore>((set, get) => ({
	items: [],
	setItems: (items) => set({ items }),
	randomizePrices: () => {
		const updated = get().items.map((item) => {
			const change = Math.floor(Math.random() * 10) - 5;
			const newPrice = Math.max(0, item.price + change);
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
