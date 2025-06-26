import { IItem } from '@/types/item';

import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

interface IStore {
	isAuth: boolean;
	name: string;
	items: IItem[];
	item: IItem | null;
	itemId: string | null;
	setItemWithId: (id: string, item: IItem) => void;
	itemHistory: number[];
	setIsAuth: (authState: boolean) => void;
	setName: (name: string) => void;
	setItem: (item: IItem) => void;
	setItems: (items: IItem[]) => void;
	clearItem: () => void;
	randomizePrices: () => void;
	randomizeItemPrice: () => void;
}

/**
 * Zustand стор `useStore`, управляющий состоянием элементов (например, криптовалют) и аутентификацией пользователя.
 *
 * Хранит и управляет:
 * - `isAuth`: флаг, указывающий, авторизован ли пользователь. Сохраняется в localStorage для сохранения состояния между сессиями.
 * - `name` — имя пользователя, введённое при регистрации/авторизации.
 * - `items`: список всех доступных элементов.
 * - `item`: текущий выбранный элемент (например, для детального просмотра).
 * - `itemId`: ID текущего выбранного элемента.
 * - `itemHistory`: история цен выбранного элемента, ограниченная 10 значениями (для отображения графиков).
 *
 * Методы для управления состоянием:
 * - `setIsAuth(authState)`: установить состояние аутентификации.
 * - `setName(name)` — сохраняет имя пользователя.
 * - `setItems(items)`: установить список элементов.
 * - `setItem(item)`: установить текущий выбранный элемент.
 * - `setItemWithId(id, item)`: установить элемент и его ID.
 * - `clearItem()`: очистить выбранный элемент, ID и историю цен.
 * - `randomizePrices()`: симулировать случайное изменение цен для всех элементов (±5), удобно для имитации обновлений.
 * - `randomizeItemPrice()`: симулировать изменение цены выбранного элемента и добавить новое значение в историю.
 *
 * Использует middleware:
 * - `persist` для сохранения `isAuth` и `name` в localStorage (ключ `auth-state`).
 * - `devtools` для интеграции с Redux DevTools.
 */

const useStore = create<IStore>()(
	devtools(
		persist(
			(set, get) => ({
				isAuth: false,
				name: '',
				items: [],
				item: null,
				itemId: null,
				itemHistory: [],

				setIsAuth: (authState) => set({ isAuth: authState }),
				setName: (name) => set({ name }),
				setItem: (item) => set({ item }),
				setItems: (items) => set({ items }),
				setItemWithId: (id, item) => set({ item, itemId: id }),
				clearItem: () => set({ item: null, itemId: null, itemHistory: [] }),

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
			}),
			{
				name: 'auth-state',
				partialize: (state) => ({ isAuth: state.isAuth, name: state.name }),
			}
		)
	)
);

export default useStore;
