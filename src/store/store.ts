import { IItem } from '@/types/item';

import { create } from 'zustand';

interface IStore {
	isAuth: boolean;
	items: IItem[];
	item: IItem | null;
	itemId: string | null;
	setItemWithId: (id: string, item: IItem) => void;
	itemHistory: number[];
	setIsAuth: (authState: boolean) => void;
	setItem: (item: IItem) => void;
	setItems: (items: IItem[]) => void;
	clearItem: () => void;
	randomizePrices: () => void;
	randomizeItemPrice: () => void;
}

/**
 * Zustand store `useStore` that manages the state related to items (e.g., cryptocurrencies) and user authentication.
 *
 * Contains:
 * - `isAuth`: a boolean flag indicating if the user is authenticated.
 * - `items`: a list of all available items.
 * - `item`: the currently selected item (e.g., for a detailed view).
 * - `itemId`: the ID of the currently selected item.
 * - `itemHistory`: an array containing the price history of the selected item, capped at 10 values (used for charts).
 *
 * Actions:
 * - `setIsAuth(authState)`: sets the authentication state.
 * - `setItems(items)`: sets the full list of items.
 * - `setItem(item)`: sets the currently selected item.
 * - `setItemWithId(id, item)`: sets both the item and its ID.
 * - `clearItem()`: clears the selected item, its ID, and its price history.
 * - `randomizePrices()`: simulates random price changes across all items (±5), useful for mocking live updates.
 * - `randomizeItemPrice()`: simulates a price fluctuation for the selected item and appends the new price to its history.
 */

const useStore = create<IStore>((set, get) => ({
	isAuth: false,
	items: [],
	item: null,
	itemId: null,
	itemHistory: [],

	setIsAuth: (authState) => set({ isAuth: authState }),
	setItem: (item) => set({ item }),
	setItems: (items) => set({ items }),
	setItemWithId: (id, item) => set({ item, itemId: id }),
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
