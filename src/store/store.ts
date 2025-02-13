import { IItem } from '@/types/item';

import { create } from 'zustand';

interface IStore {
	items: IItem[];
	setItems: (items: IItem[]) => void;
}

/**
 * Zustand store for managing the list of items (currencies).
 *
 * @returns The store with `items` and the `setItems` action.
 */

const useStore = create<IStore>((set) => ({
	items: [],
	setItems: (items) => set({ items }),
}));

export default useStore;
