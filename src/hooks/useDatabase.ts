import { IItem } from '@/types/item';

import database from '@/database/database.json';

export const getAllItems = (): IItem[] => {
	return database.currencies;
};

export const getItemById = (id: string | number): IItem | undefined => {
	return database.currencies.find((item) => item.id === Number(id));
};
